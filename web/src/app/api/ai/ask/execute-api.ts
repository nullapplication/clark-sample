import { logger } from '../../../logger';

const API_URL = process.env.API_URL;

export default async function executeApi(apiDocs, selectedApi, isConfirmed) {
   try {
      let apiResponse = null;
      let requiresConfirmation = false;
      if (selectedApi.api_name) {
         // Find API details from documentation
         const apiDetails = apiDocs.apis.find(
            (api) => api.name === selectedApi.api_name,
         );
         if (!apiDetails) {
            logger.info('The selected API was not found in the documentation.');
            return null;
         }

         // Construct API URL
         let apiUrl = API_URL + apiDetails.endpoint;
         if (apiDetails.method === 'GET') {
            Object.keys(selectedApi.parameters).forEach((param) => {
               if (apiUrl.includes(`:${param}`)) {
                  apiUrl = apiUrl.replace(
                     `:${param}`,
                     selectedApi.parameters[param],
                  );
               } else {
                  apiUrl +=
                     (apiUrl.includes('?') ? '&' : '?') +
                     `${param}=${selectedApi.parameters[param]}`;
               }
            });

            logger.info(
               'The final API URL to call with parameter values is:',
               apiUrl,
            );

            // Call the selected API
            logger.info(`1: Calling ${apiDetails.method} API at ${apiUrl}`);
            apiResponse = await fetch(apiUrl, {
               method: apiDetails.method,
            });
         } else {
            if (isConfirmed) {
               const requestData = {};
               Object.keys(selectedApi.parameters).forEach((param) => {
                  if (apiUrl.includes(`:${param}`)) {
                     apiUrl = apiUrl.replace(
                        `:${param}`,
                        selectedApi.parameters[param],
                     );
                  }

                  requestData[param] = selectedApi.parameters[param];
               });
               const requestHeaders = {
                  'Content-Type': 'application/json',
                  ...selectedApi.headers,
               };

               logger.info(
                  `Preparing ${apiDetails.method} request to ${apiUrl} with data:`,
                  requestData,
               );

               logger.info(`2: Calling ${apiDetails.method} API at ${apiUrl}`);
               apiResponse = await fetch(apiUrl, {
                  method: apiDetails.method,
                  body: JSON.stringify(requestData),
                  headers: requestHeaders,
               });
            } else {
               requiresConfirmation = true;
            }
         }

         if (!apiResponse.ok) {
            throw new Error(
               `API call failed with status ${apiResponse.status}`,
            );
         }

         if (!apiResponse) {
            return { apiResponse: null, requiresConfirmation };
         }

         const body = await apiResponse.json();

         // Handle responses with or without "data" field
         let response;
         let html;
         if (body?.data) {
            response = {
               page: body.page || 0,
               limit: body.limit || 0,
               total: body.total || 0,
               totalPages: body.totalPages || 0,
               data: body.data || [],
            };
            html = body.html || null;
         } else {
            response = { data: body };
         }

         return {
            apiResponse: response,
            requiresConfirmation,
            html,
            renderCode: apiDetails?.response?.code,
         };
      } else {
         logger.info('No API was selected to satisfy this question.');
         return { apiResponse, requiresConfirmation };
      }
   } catch (error) {
      logger.error('Error calling API:', error);
      return null;
   }
}
