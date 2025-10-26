'use client';

import styles from './scheduled-maintenance-header.module.css';
import { addUrlKey } from '@app/_utils/navigation';
import { useRouter, useSearchParams } from 'next/navigation';
import CloseIcon from '@mui/icons-material/Close';

interface ScheduledMaintenanceHeaderProps {
   task: {
      id: string;
      name: string;
      ata_code: string;
      task_number: string;
      authority: string | null;
      intervals: {
         id: string;
         interval_value: number;
         metric_type: string;
      }[];
   };
   onClose: () => void;
}
export default function ScheduledMaintenanceHeader({
   task,
   onClose,
}: ScheduledMaintenanceHeaderProps) {
   const router = useRouter();
   const searchParams = useSearchParams();

   const actions = [
      //   {
      //      title: 'Edit',
      //      key: 'edit',
      //   },
   ];

   const changeUrl = (key) => {
      addUrlKey(router, searchParams, 'scheduled_maintenance_action', key);
   };

   return (
      <>
         <div className="spaced-row">
            <h1>{task.task_number}</h1>
            <button onClick={onClose}>
               <CloseIcon
                  sx={{ color: 'var(--subtle-color)' }}
                  fontSize="small"
               />
            </button>
         </div>
         <span>{task.name}</span>
         <div className="row">
            <div>
               <span>{task.ata_code}</span>
               <br />
               <label>ATA Code</label>
            </div>

            <div>
               <span>{task.authority || 'FAA'}</span>
               <br />
               <label>Authority</label>
            </div>

            <div>
               <span>
                  {task.intervals?.map((interval) => (
                     <span key={interval.id}>
                        {interval.interval_value} {interval.metric_type}
                     </span>
                  ))}
               </span>
               <br />
               <label>Intervals</label>
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
      </>
   );
}
