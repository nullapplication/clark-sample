'use client';

import { useEffect, useState } from 'react';
import NoDataFound from '../ui/no-data-found/no-data-found';

interface LogbookListProps {
   tailNumber: string;
}
export default function LogbookList({ tailNumber }: LogbookListProps) {
   const [logbookEntries, setLogbookEntries] = useState([]);

   useEffect(() => {
      async function fetchLogbookEntries() {
         const url = `api/aircraft/${tailNumber}/logbook-entries`;
         const logbookEntriesResponse = await fetch(url).then((res) =>
            res.json(),
         );
         setLogbookEntries(logbookEntriesResponse.data);
      }
      fetchLogbookEntries();
   }, [tailNumber]);

   if (!tailNumber) {
      return null;
   }

   return (
      <>
         <p className="todo">
            We need to add logbooks as a table and connect them to major
            physical assets. {tailNumber}
         </p>

         <div className="logbook-list">
            {logbookEntries.map((entry) => (
               <div key={entry.id} className="logbook-entry">
                  <h4>{entry.title}</h4>
                  <p>{entry.description}</p>
                  <p>{entry.date}</p>
               </div>
            ))}
         </div>

         <NoDataFound data={logbookEntries} dataNameOnly="logbook entries" />
      </>
   );
}
