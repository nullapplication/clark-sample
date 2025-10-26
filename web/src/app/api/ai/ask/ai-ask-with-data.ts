import { openai } from '../ai';
import prisma from '../../../prisma-client';
import { logger } from '../../../logger';

export default async function askWithData(
   userId: string,
   userMessage: string,
   apiResponse: any,
   context_keywords: string[],
   sentiment: number,
   topic: string,
   renderCode: string | null,
) {
   let finalResponsePrompt = '';

   if (apiResponse) {
      // Generate final response using the API data
      finalResponsePrompt = `
      User asked: "${userMessage}"
      The following data should be used to help answer the question: ${JSON.stringify(
         apiResponse.data,
      )}
      Some previous context from past messages include: "keywords ${context_keywords} around the topic ${topic}"`;

      if (renderCode) {
         finalResponsePrompt += ` Briefly summarize the answer in a natural language response using less than 100 words.`;
      } else {
         finalResponsePrompt += ` Summarize answer using markdown language, show lists as bullets instead of tables.`;
      }
   } else {
      // Generate final response without API data
      finalResponsePrompt = `
      User asked: "${userMessage}"
      Some previous context from past messages include: "${context_keywords} around the topic ${topic}"
  
      Make it clear that Accelerate MX could not find internal data to support answering 
      this question, but attempt to answer the best you can in a natural language response.
    `;
   }

   logger.info(
      'The prompt to generate a final response is:',
      finalResponsePrompt,
   );

   try {
      // Call OpenAI API using the SDK
      const finalResponse = await openai.chat.completions.create({
         model: process.env.DEFAULT_OPENAI_MODEL,
         messages: [
            { role: 'user', content: userMessage },
            { role: 'system', content: finalResponsePrompt },
         ],
      });

      const aiResponse = finalResponse.choices[0].message?.content || '';

      // Store message in DB
      const temporarySessionId = new Date().toISOString().split('T')[0];
      await prisma.chatMessage.create({
         data: {
            from_user_id: userId,
            is_ai_generated: true,
            message: userMessage,
            prompt_request: finalResponsePrompt,
            prompt_response: aiResponse,
            chat_topic: topic,
            ai_model: process.env.DEFAULT_OPENAI_MODEL,
            sentiment,
            session_id: temporarySessionId,
         },
      });

      return aiResponse;
   } catch (error) {
      logger.error('Error generating final response:', error);
      return 'An error occurred while generating the final response.';
   }
}
