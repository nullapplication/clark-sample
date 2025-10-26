import { openai } from '../ai';
import { logger } from '../../../logger';

export default async function selectApi(
   apiDocs,
   userMessage,
   context_keywords,
) {
   const apiSelectionPrompt = `
    You are an AI that helps determine which API endpoint should be called based on user questions. 
    Here is the API documentation: ${JSON.stringify(apiDocs, null, 2)}
    
    User query: "${userMessage}"
    Some past context: "${context_keywords}"
    
    Respond in JSON format with:
    - "api_name" (name of the API to call)
    - "parameters" (an object with parameter values based on user input)
    - If no API matches, return { "api_name": null }.
  `;

   try {
      const selectionResponse = await openai.chat.completions.create({
         model: process.env.DEFAULT_OPENAI_MODEL,
         messages: [{ role: 'user', content: apiSelectionPrompt }],
         response_format: {
            type: 'json_schema',
            json_schema: {
               name: 'api_selection_schema',
               schema: {
                  type: 'object',
                  properties: {
                     api_name: {
                        description: 'The name of the API to call',
                        type: 'string',
                     },
                     parameters: {
                        description:
                           'An object with parameter values based on user input',
                        type: 'object',
                     },
                  },
                  additionalProperties: false,
               },
            },
         },
      });

      const apiSelection = selectionResponse.choices[0].message?.content;
      logger.info('The selected API is:', apiSelection);

      return JSON.parse(apiSelection || '{}');
   } catch (error) {
      logger.error('Error selecting API:', error);
      return { api_name: null };
   }
}
