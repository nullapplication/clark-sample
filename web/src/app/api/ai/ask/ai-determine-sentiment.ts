import { openai } from '../ai';
import prisma from '../../../prisma-client';

export default async function determineSentiment(
   userId: string,
   userMessage: string,
) {
   // Retrieve last 5 user messages
   const pastMessagesRecords = await prisma.chatMessage.findMany({
      select: { message: true },
      where: { from_user_id: userId },
      orderBy: { created_at: 'desc' },
      take: 5,
   });

   // Collect past messages and append the new user message
   const pastMessages = pastMessagesRecords.map((msg) => msg.message);
   pastMessages.push(userMessage);

   // Construct the prompt for OpenAI
   const prompt = `
    You are an AI that helps determine whether the overall sentiment is negative 
    from past user messages and indicate whether the user is getting frustrated. 

    Here is content from the past messages: ${JSON.stringify(pastMessages)}
    
    Respond in JSON format with:
    - "sentiment" (score of sentiment from -1 [bad] to 1 [good], note: "overdue" is a neutral word for sentiment)
    - "topic" (the topic of the conversation, such as "aircraft maintenance", "part ordering", etc.)
  `;

   try {
      const response = await openai.chat.completions.create({
         model: process.env.DEFAULT_OPENAI_MODEL,
         messages: [{ role: 'user', content: prompt }],
         response_format: {
            type: 'json_schema',
            json_schema: {
               name: 'understand_sentiment_schema',
               schema: {
                  type: 'object',
                  properties: {
                     sentiment: {
                        description:
                           "Score of sentiment from -1 (bad) to 1 (good), note: 'overdue' is a neutral word for sentiment",
                        type: 'number',
                     },
                     topic: {
                        description:
                           "The topic of the conversation, such as 'aircraft maintenance', 'part ordering', etc.",
                        type: 'string',
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
      console.error('Error determining sentiment:', error);
      return { sentiment: 0, topic: 'unknown' };
   }
}
