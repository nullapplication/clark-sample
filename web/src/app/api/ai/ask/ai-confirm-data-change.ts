import { openai } from '../ai';
import prisma from '../../../prisma-client';

export default async function confirmDataChange(
   userId: string,
   userMessage: string,
   selectedApi: any,
   context_keywords: string[],
) {
   const confirmationPrompt = `
    I found the following API to call: ${JSON.stringify(selectedApi)}
    Some previous context from past messages include: "${context_keywords}"
    
    You are an aviation maintenance professional. Confirm what values will be used to perform the action in the API.
    If any additional required parameters are needed to perform the API call, ask the user for their values.
    Finally, confirm with the user that the action should be performed.
  `;

   try {
      // Call OpenAI API using the SDK
      const confirmationResponse = await openai.chat.completions.create({
         model: process.env.DEFAULT_OPENAI_MODEL,
         messages: [
            { role: 'user', content: userMessage },
            { role: 'system', content: confirmationPrompt },
         ],
      });

      const aiResponse = confirmationResponse.choices[0].message?.content || '';

      // Store message in DB
      const temporarySessionId = new Date().toISOString().split('T')[0];
      await prisma.chatMessage.create({
         data: {
            from_user_id: userId,
            is_ai_generated: true,
            message: userMessage,
            prompt_request: confirmationPrompt,
            prompt_response: aiResponse,
            session_id: temporarySessionId,
         },
      });

      return aiResponse;
   } catch (error) {
      console.error('Error generating confirmation prompt:', error);
      return 'An error occurred while generating the confirmation prompt.';
   }
}
