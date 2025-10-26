import { fetchFaaData } from './actions';

// Fetch and process FAA data
export default async function FetchFaaAircraftPage() {
   let message = 'Processing FAA aircraft data...';

   return (
      <main>
         <h1>Fetch FAA Aircraft</h1>
         <p>
            This page will likely become a scheduled job. Simply by going to the
            page, we are fetching from
            https://registry.faa.gov/database/ReleasableAircraft.zip and
            retrieving a zip file which is updated at 11:30pm central time each
            day with registered aircraft. The zip file contains multiple files,
            but the one we are most interested in is MASTER.txt. We will parse
            this file and store the data in our database as an upsert.
         </p>
         <p>
            It may take a bit of time to finish processing the data, so please
            be patient. Also, there is no loader or any indication that the data
            is being processed, sorry.
         </p>

         <button type="button" onClick={fetchFaaData}>
            Insert Data
         </button>
      </main>
   );
}
