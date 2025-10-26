import styles from './due-list-card.module.css';
import { useRouter, useSearchParams } from 'next/navigation';
import { addUrlKey } from '@app/_utils/navigation';

interface DueListCardProps {
   task: {
      id: string;
      name: string;
      ata_code: string;
      due_reason: string;
      next_due_date: string;
      days_remaining: number;
      status: string;
      aircraft: {
         tail_number: string;
      };
      scheduled_maintenance: {
         name: string;
         description: string;
      };
   };
   tailNumber: string | null;
}
export default function DueListCard({ task }: DueListCardProps) {
   const router = useRouter();
   const searchParams = useSearchParams();

   const selectDueListItem = (taskId: string) => {
      addUrlKey(router, searchParams, 'due_list_id', taskId);
   };

   let statusClass = '';
   switch (task.status) {
      case 'ACTIVE':
         statusClass = styles.active;
         break;
      case 'INACTIVE':
         statusClass = styles.inactive;
         break;
      case 'DUESOON':
         statusClass = styles.dueSoon;
         break;
      case 'OVERDUE':
         statusClass = styles.overdue;
         break;
      default:
         statusClass = styles.unknown;
         break;
   }

   return (
      <div className={styles.main + ' ' + statusClass}>
         <div className="spaced-row">
            <span className={styles.subtle}>{task.ata_code}</span>
            <span>{task.aircraft.tail_number}</span>
         </div>
         <span className={styles.title}>
            <button
               onClick={selectDueListItem.bind(null, task.id)}
               className="link"
            >
               {task.scheduled_maintenance?.name}
            </button>
         </span>
         <span className={styles.subtle}>{task.due_reason}</span>
         <div className="row">
            <div>
               <span className={styles.value}>
                  {task.next_due_date
                     ? new Date(task.next_due_date).toLocaleDateString()
                     : null}
               </span>
               <label>Next Due Date</label>
            </div>

            <div>
               <span className={styles.value}>{task.days_remaining} days</span>
               <label>Remaining</label>
            </div>
         </div>
      </div>
   );
}
