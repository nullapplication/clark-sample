'use client';

import LogbookList from '@app/_components/logbook-list/logbook-list';

interface AircraftLogbooksProps {
   tailNumber: string;
}
export default function AircraftLogbooks({
   tailNumber,
}: AircraftLogbooksProps) {
   return <LogbookList tailNumber={tailNumber} />;
}
