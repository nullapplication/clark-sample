'use client';

import styles from './due-list-header.module.css';
import { addUrlKey } from '@app/_utils/navigation';
import { useRouter, useSearchParams } from 'next/navigation';
import CloseIcon from '@mui/icons-material/Close';

interface DueListHeaderProps {
   task: {
      id: string;
      name: string;
      ata_code: string;
      due_reason: string;
      next_due_date: string;
      days_remaining: number;
      scheduled_maintenance: {
         name: string;
      };
   };
   onClose: () => void;
}
export default function DueListHeader({ task, onClose }: DueListHeaderProps) {
   const router = useRouter();
   const searchParams = useSearchParams();

   const actions = [
      {
         title: 'Perform Work',
         key: 'perform-work',
      },
      {
         title: 'Error Correct',
         key: 'error-correct',
      },
   ];

   const changeUrl = (key) => {
      addUrlKey(router, searchParams, 'due_list_action', key);
   };

   return (
      <>
         <div className="spaced-row">
            <h1>{task.scheduled_maintenance?.name || task.name}</h1>
            <button onClick={onClose}>
               <CloseIcon
                  sx={{ color: 'var(--subtle-color)' }}
                  fontSize="small"
               />
            </button>
         </div>
         <div className="row">
            <div>
               <span>{task.ata_code}</span>
               <br />
               <label>ATA Code</label>
            </div>
            <div>
               <span>
                  {task.next_due_date
                     ? new Date(task.next_due_date).toLocaleDateString()
                     : null}
               </span>
               <br />
               <label>Next Due Date</label>
            </div>

            <div>
               <span>{task.days_remaining} days</span>
               <br />
               <label>Remaining</label>
            </div>
         </div>

         <span>{task.due_reason}</span>

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
