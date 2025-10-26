'use client';

import NoDataFound from '@app/_components/ui/no-data-found/no-data-found';

interface AircraftDocsProps {
   tailNumber: string;
}
export default function AircraftDocs({ tailNumber }: AircraftDocsProps) {
   return (
      <div>
         <p className="todo">Need to show docs here {tailNumber}</p>
         <NoDataFound data={[]} dataNameOnly="documents" />
      </div>
   );
}
