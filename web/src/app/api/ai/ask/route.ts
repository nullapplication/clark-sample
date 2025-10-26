import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import selectApi from './ai-select-api';
import understandContext from './ai-understand-context';
import determineSentiment from './ai-determine-sentiment';
import executeApi from './execute-api';
import confirmDataChange from './ai-confirm-data-change';
import askWithData from './ai-ask-with-data';
import { logger } from '../../../logger';

// note: i don't know if we're going to keep html rendering as part of the payload
// we are adding a new code called "renderCode" to the payload so we can key off
// what type of information we're available to render on the client device

// todo: replace with actual user id from auth
const userId = 'cm6tfldaq000g0cla5kbu43gu';

const apiDocsPath = path.join(
   process.cwd(),
   'src/app/api/capability-registry.json',
);
const apiDocs = JSON.parse(fs.readFileSync(apiDocsPath, 'utf-8'));

export async function POST(req: NextRequest) {
   try {
      const body = await req.json();
      const userMessage = body.message;
      const isConfirmed = body.isConfirmed || false;

      logger.info(
         'User is requesting information with the following message:',
         userMessage,
      );

      // Determine some meta data about the user message
      console.time('ai-understand-context');
      const { context_keywords } = await understandContext(userId, userMessage);
      console.timeEnd('ai-understand-context');

      console.time('ai-determine-sentiment');
      const { sentiment, topic } = await determineSentiment(
         userId,
         userMessage,
      );
      console.timeEnd('ai-determine-sentiment');

      // Ask ai which API should be called
      console.time('ai-select-api');
      const selectedApi = await selectApi(
         apiDocs,
         userMessage,
         context_keywords,
      );
      console.timeEnd('ai-select-api');

      // Call the API if one was selected
      console.time('execute-capability-api');
      const internalData = await executeApi(apiDocs, selectedApi, isConfirmed);
      const apiResponse = internalData?.apiResponse;
      const requiresConfirmation = internalData?.requiresConfirmation;
      const renderCode = internalData?.renderCode;
      console.timeEnd('execute-capability-api');

      // Check if we need further confirmation from the user
      logger.info('Requires confirmation:', requiresConfirmation);
      if (requiresConfirmation) {
         // Ask ai to generate a confirmation prompt for the user
         console.time('ai-confirmation-prompt');
         const confirmationPrompt = await confirmDataChange(
            userId,
            userMessage,
            selectedApi,
            context_keywords,
         );
         console.timeEnd('ai-confirmation-prompt');

         if (confirmationPrompt) {
            return NextResponse.json({
               response: confirmationPrompt,
               requiresConfirmation,
               data: apiResponse,
               html: internalData?.html,
               renderCode,
            });
         } else {
            return NextResponse.json({
               response: "We couldn't come up with a good response.",
            });
         }
      } else {
         // Ask ai to generate final response from user request, context, and data provided
         console.time('ai-final-response');
         const finalResponse = await askWithData(
            userId,
            userMessage,
            apiResponse,
            context_keywords,
            sentiment,
            topic,
            renderCode,
         );
         console.timeEnd('ai-final-response');

         if (finalResponse) {
            logger.info('Final response:', {
               response: finalResponse,
               data: apiResponse,
               html: internalData?.html,
               renderCode,
            });

            return NextResponse.json({
               response: finalResponse,
               data: apiResponse,
               html: internalData?.html,
               renderCode,
            });
         } else {
            return NextResponse.json({
               response: "We couldn't come up with a good response.",
            });
         }
      }
   } catch (error) {
      logger.error(error);
      return NextResponse.json(
         { error: 'Error processing request' },
         { status: 500 },
      );
   }
}
