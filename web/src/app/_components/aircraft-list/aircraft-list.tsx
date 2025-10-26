'use client';
import { useEffect, useState } from 'react';
import AircraftCard from '../aircraft-card/aircraft-card';
import styles from './aircraft-list.module.css';

interface AircraftListProps {
   selectedBaseOfOperationId: string | null;
   selectedDueListId: string | null;
}

export default function AircraftList({
   selectedBaseOfOperationId,
}: AircraftListProps) {
   const [aircraft, setAircraft] = useState([]);

   useEffect(() => {
      async function fetchAircraft() {
         const url = `/api/aircraft?base_of_operation_id=${selectedBaseOfOperationId}`;
         const aircraftResponse = await fetch(url).then((res) => res.json());
         setAircraft(aircraftResponse.data);
      }

      fetchAircraft();
   }, [selectedBaseOfOperationId]);

   return (
      <div className={styles.main}>
         {aircraft?.map((ac) => (
            <AircraftCard key={ac.tail_number} aircraft={ac} />
         ))}
      </div>
   );
}
