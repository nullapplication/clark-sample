'use client';

import NoDataFound from '../ui/no-data-found/no-data-found';
import { useEffect, useState } from 'react';
import { addUrlKey } from '@app/_utils/navigation';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './due-list-table.module.css';

interface DueListTableProps {
   tailNumber: string | null;
   includeCheckbox?: boolean;
}
export default function DueListTable({
   tailNumber,
   includeCheckbox,
}: DueListTableProps) {
   const router = useRouter();
   const searchParams = useSearchParams();

   const [dueList, setDueList] = useState([]);
   useEffect(() => {
      async function fetchDueList() {
         let url;
         if (tailNumber) {
            url = `api/aircraft/${tailNumber}/due-list`;
         } else {
            url = 'api/fleet/due-list';
         }

         const dueListResponse = await fetch(url).then((res) => res.json());
         setDueList(dueListResponse.data);
      }
      fetchDueList();
   }, [tailNumber]);

   const selectDueListItem = (taskId: string) => {
      addUrlKey(router, searchParams, 'due_list_id', taskId);
   };

   return (
      <>
         {dueList && dueList.length > 0 && (
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
                     <th style={{ width: '60px' }}>ATA</th>
                     <th>Task</th>
                     <th>Due Reason</th>
                     <th>Next Due</th>
                     <th>Remaining</th>
                  </tr>
               </thead>
               <tbody>
                  {dueList.map((task) => (
                     <tr
                        key={task.id}
                        className={
                           task.status === 'OVERDUE' ? styles.overdue : ''
                        }
                        onClick={selectDueListItem.bind(null, task.id)}
                     >
                        {includeCheckbox && (
                           <td>
                              <input type="checkbox" />
                           </td>
                        )}
                        {!tailNumber && <td>{task.tail_number}</td>}
                        <td>{task.ata_code}</td>
                        <td>{task.scheduled_maintenance.name}</td>
                        <td>{task.due_reason}</td>
                        <td>
                           {task.next_due_date
                              ? new Date(
                                   task.next_due_date,
                                ).toLocaleDateString()
                              : null}
                        </td>
                        <td>{task.days_remaining} days</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         )}
         <NoDataFound data={dueList} dataNameOnly="tasks" />
      </>
   );
}
