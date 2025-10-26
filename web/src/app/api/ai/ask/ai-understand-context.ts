import { openai } from '../ai';
import prisma from '../../../prisma-client';

export default async function understandContext(
   userId: string,
   userMessage: string,
) {
   const temporarySessionId = new Date().toISOString().split('T')[0];

   // Fetch the last 3 messages from the database
   const pastMessagesRecords = await prisma.chatMessage.findMany({
      select: { prompt_request: true },
      where: {
         from_user_id: userId,
         session_id: temporarySessionId,
      },
      orderBy: { created_at: 'desc' },
      take: 3,
   });

   // Extract past messages and append the new user message
   const pastMessages = pastMessagesRecords.map((msg) => msg.prompt_request);
   pastMessages.push(userMessage);

   // Construct the prompt for OpenAI
   const prompt = `
    You are an AI that helps determine keywords that establish context for future 
    messages. The keywords you are looking for identify nouns that relate to aviation, 
    maintenance tracking, inventory management, work orders, and similar topics.
  
    Here is content from past messages: ${JSON.stringify(pastMessages)}
    
    Respond in JSON format with:
    - "context_keywords" (an array of keywords that are critical to the past messages, such as tail numbers (N1234), work order numbers (WO-1234), part or serial numbers, maintenance tasks, etc. Ignore specific examples like N12345, N1KE, G-GALX)
  `;

   try {
      // Call OpenAI using the SDK
      const response = await openai.chat.completions.create({
         model: process.env.DEFAULT_OPENAI_MODEL,
         messages: [{ role: 'user', content: prompt }],
         response_format: {
            type: 'json_schema',
            json_schema: {
               name: 'understand_past_context_schema',
               schema: {
                  type: 'object',
                  properties: {
                     context_keywords: {
                        description:
                           'An array of keywords that are critical to the past messages, such as tail numbers, work order numbers, part numbers, maintenance tasks, etc.',
                        type: 'array',
                        items: { type: 'string' },
                     },
                  },
                  additionalProperties: false,
               },
            },
         },
      });

      const parsedResponse = response.choices[0].message?.content;
      return JSON.parse(parsedResponse || '{}');
   } catch (error) {
      console.error('Error understanding context:', error);
      return { context_keywords: [] }; // Fallback in case of error
   }
}
