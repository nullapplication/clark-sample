'use client';

import NoDataFound from '@app/_components/ui/no-data-found/no-data-found';

interface AircraftHistoryProps {
   tailNumber: string;
}
export default function AircraftHistory({ tailNumber }: AircraftHistoryProps) {
   const history = [];

   return (
      <>
         <p className="todo">
            We need to create a table to store history entries and have a way to
            easily pull back the changes made to this aircraft. {tailNumber}
         </p>

         <NoDataFound data={history} dataNameOnly="audit trail entries" />
      </>
   );
}
