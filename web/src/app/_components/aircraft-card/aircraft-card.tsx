'use client';
import styles from './aircraft-card.module.css';
import Image from 'next/image';
import AircraftStatusBadge from '../aircraft-status-badge/aircraft-status-badge';
import { addUrlKey } from '@app/_utils/navigation';
import { useRouter, useSearchParams } from 'next/navigation';

interface AircraftCardProps {
   aircraft: {
      tail_number: string;
      manufacturer: string;
      model: string;
      status: string;
      status_reason: string;
      image_url: string;
   };
   selectedDueListId?: string;
}
export default function AircraftCard({ aircraft }: AircraftCardProps) {
   const router = useRouter();
   const searchParams = useSearchParams();

   const selectAircraft = (tailNumber: string) => {
      addUrlKey(router, searchParams, 'tail_number', tailNumber);
   };

   return (
      <button onClick={selectAircraft.bind(null, aircraft.tail_number)}>
         <div className={styles.main}>
            <Image
               src={aircraft.image_url}
               alt={aircraft.tail_number}
               width={350}
               height={116}
               className={styles.img}
            />

            <div className={styles.header}>
               <span>
                  {aircraft.tail_number}
                  <br />
                  <span className="subtle">
                     {aircraft.manufacturer} {aircraft.model}
                  </span>
               </span>
               <AircraftStatusBadge
                  status={aircraft.status}
                  statusReason={aircraft.status_reason}
               />
            </div>
         </div>
      </button>
   );
}
