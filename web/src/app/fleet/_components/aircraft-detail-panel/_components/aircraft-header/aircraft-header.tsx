'use client';

import Image from 'next/image';
import AircraftStatusBadge from '@app/_components/aircraft-status-badge/aircraft-status-badge';
import styles from './aircraft-header.module.css';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter, useSearchParams } from 'next/navigation';
import { addUrlKey } from '@app/_utils/navigation';

interface AircraftHeaderProps {
   aircraft: {
      tail_number: string;
      manufacturer: string;
      model: string;
      status: string;
      status_reason: string;
      image_url: string;
      year_of_manufacture: string;
      serial_number: string;
      last_flight_date: string;
      installed_physical_inventory_items: {
         id: string;
         name: string;
         current_usage: {
            [key: string]: {
               value: number;
            };
         };
      }[];
   };
   onClose: () => void;
}
export default function AircraftHeader({
   aircraft,
   onClose,
}: AircraftHeaderProps) {
   const router = useRouter();
   const searchParams = useSearchParams();

   if (!aircraft) {
      return null;
   }

   const actions = [
      {
         title: 'Update Times',
         key: 'update-times',
      },
      {
         title: 'Edit',
         key: 'edit',
      },
      {
         title: 'Report Discrepancy',
         key: 'report-discrepancy',
      },
      {
         title: 'Add Task',
         key: 'add-task',
      },
      {
         title: 'Install Part',
         key: 'install-part',
      },
      {
         title: 'Create WO',
         key: 'create-work-order',
      },
      {
         title: 'Create PO',
         key: 'create-purchase-order',
      },
      {
         title: 'Attach File',
         key: 'attach-file',
      },
   ];

   const changeUrl = (key) => {
      addUrlKey(router, searchParams, 'aircraft_action', key);
   };

   return (
      <div className={styles.main}>
         <div className="spaced-row">
            <h1>
               {aircraft.tail_number} {aircraft.manufacturer} {aircraft.model}
            </h1>
            <button onClick={onClose}>
               <CloseIcon
                  sx={{ color: 'var(--subtle-color)' }}
                  fontSize="small"
               />
            </button>
         </div>

         <AircraftStatusBadge
            status={aircraft.status}
            statusReason={aircraft.status_reason}
         />

         <Image
            src={aircraft.image_url}
            alt={aircraft.tail_number}
            width={1200}
            height={400}
            className={styles.img}
         />

         <div>
            <div className={styles.aircraftDetails}>
               <div>
                  <span className="subtle">Current Times</span>
                  {aircraft.installed_physical_inventory_items?.map((item) => (
                     <p key={item.id}>
                        {item.name}:&nbsp;
                        {Object.keys(item.current_usage)?.map((usage, j) => (
                           <span key={usage}>
                              {item.current_usage[usage].value} {usage[0]}
                              {Object.keys(item.current_usage)?.length - 1 !== j
                                 ? ','
                                 : ''}{' '}
                              &nbsp;
                           </span>
                        ))}
                     </p>
                  ))}
               </div>

               <div>
                  <span className="subtle">Details</span>
                  <p>
                     <label>Mfg. Year:</label>&nbsp;
                     {aircraft.year_of_manufacture
                        ? aircraft.year_of_manufacture
                        : 'N/A'}
                  </p>
                  <p>
                     <label>Serial #:</label>&nbsp;
                     {aircraft.serial_number ? aircraft.serial_number : 'N/A'}
                  </p>
                  <p>
                     <label>Last Flight:</label>&nbsp;
                     {aircraft.last_flight_date
                        ? aircraft.last_flight_date
                        : 'N/A'}
                  </p>
               </div>
            </div>
         </div>

         <div className={styles.actions}>
            {actions.map((action) => (
               <button
                  key={action.key}
                  onClick={changeUrl.bind(null, action.key)}
                  className="button"
               >
                  {action.title}
               </button>
            ))}
         </div>
      </div>
   );
}
