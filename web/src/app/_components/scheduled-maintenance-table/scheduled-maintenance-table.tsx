'use client';

import NoDataFound from '../ui/no-data-found/no-data-found';
import { useEffect, useState } from 'react';
import { addUrlKey } from '@app/_utils/navigation';
import { useRouter, useSearchParams } from 'next/navigation';

interface ScheduledMaintenanceTableProps {
   tailNumber: string | null;
   workOrderNumber?: string | null;
   includeCheckbox?: boolean;
}
export default function ScheduledMaintenanceTable({
   tailNumber,
   workOrderNumber,
   includeCheckbox,
}: ScheduledMaintenanceTableProps) {
   const router = useRouter();
   const searchParams = useSearchParams();

   const [scheduledMaintenance, setScheduledMaintenance] = useState([]);
   useEffect(() => {
      async function fetchScheduledMaintenance() {
         let url = null;
         if (tailNumber) {
            url = `api/aircraft/${tailNumber}/scheduled-maintenance`;
         } else if (workOrderNumber) {
            url = `api/work-orders/${workOrderNumber}/scheduled-maintenance`;
         }

         if (!url) {
            return;
         }
         const scheduledMaintenanceResponse = await fetch(url).then((res) =>
            res.json(),
         );
         setScheduledMaintenance(scheduledMaintenanceResponse.data);
      }
      fetchScheduledMaintenance();
   }, [tailNumber, workOrderNumber]);

   const selectScheduledMaintenance = (taskId: string) => {
      addUrlKey(router, searchParams, 'scheduled_maintenance_id', taskId);
   };

   return (
      <>
         {scheduledMaintenance && scheduledMaintenance.length > 0 && (
            <table className="table">
               <thead>
                  <tr>
                     {includeCheckbox && (
                        <th style={{ width: '30px' }}>
                           <input type="checkbox" />
                        </th>
                     )}
                     {!tailNumber && <th>Aircraft</th>}
                     {!tailNumber && <th>Tail</th>}
                     <th style={{ width: '50px' }}>ATA</th>
                     <th>Task</th>
                     <th>Authority</th>
                     <th>Intervals</th>
                  </tr>
               </thead>
               <tbody>
                  {scheduledMaintenance.map((task) => (
                     <tr
                        key={task.id}
                        onClick={selectScheduledMaintenance.bind(null, task.id)}
                        style={{ cursor: 'pointer' }}
                     >
                        {includeCheckbox && (
                           <td style={{ width: '30px' }}>
                              <input type="checkbox" />
                           </td>
                        )}
                        {!tailNumber && <td>{task.tail_number}</td>}
                        <td>{task.ata_code}</td>
                        <td>
                           {task.task_number} - {task.name}
                        </td>
                        <td>{task.regulation_authority || 'FAA'}</td>
                        <td>
                           {task.intervals?.map((interval) => (
                              <span key={interval.id}>
                                 {interval.interval_value}{' '}
                                 {interval.metric_type}
                              </span>
                           ))}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         )}
         <NoDataFound
            data={scheduledMaintenance}
            dataNameOnly="scheduled tasks"
         />
      </>
   );
}
