import { NextRequest, NextResponse } from 'next/server';
import { openai } from '../ai';
import { logger } from '../../../logger';

export async function POST(req: NextRequest) {
   try {
      logger.info('INFO: Analyzing image');
      const { base64Image } = await req.json();
      logger.info('INFO: Base64 image:', base64Image);

      if (!base64Image) {
         return NextResponse.json(
            { error: 'No image provided.' },
            { status: 400 },
         );
      }

      // OpenAI API call using SDK
      const response = await openai.chat.completions.create({
         model: process.env.DEFAULT_OPENAI_MODEL,
         messages: [
            {
               role: 'user',
               content: [
                  {
                     type: 'text',
                     text: `What is the subject of this photo? 
              Assign a renderCode based on the following criteria:
              - "image_damaged" if the image appears to show something damaged
              - "image_8130" if the image appears to show an FAA 8130 form
              - "image_purchase_order" if the image appears to show a purchase order
              - "image_undamaged" if the image appears to show an undamaged part
              - "image_other" if the image appears to show something else`,
                  },
                  {
                     type: 'image_url',
                     image_url: {
                        url: `data:image/jpeg;base64,${base64Image}`,
                     },
                  },
               ],
            },
         ],
         response_format: {
            type: 'json_schema',
            json_schema: {
               name: 'image_analysis',
               schema: {
                  type: 'object',
                  properties: {
                     subject: {
                        description: 'The subject of the image',
                        type: 'string',
                     },
                     renderCode: {
                        description:
                           'The render code to assign to the image based on the subject',
                        type: 'string',
                     },
                  },
                  required: ['subject', 'renderCode'],
               },
            },
         },
      });

      // Extract and return response
      const responseData = response.choices[0].message?.content;
      logger.info(responseData);
      return NextResponse.json(JSON.parse(responseData || '{}'));
   } catch (error) {
      logger.error('Error processing request:', error);
      return NextResponse.json(
         { error: 'Internal Server Error' },
         { status: 500 },
      );
   }
}
