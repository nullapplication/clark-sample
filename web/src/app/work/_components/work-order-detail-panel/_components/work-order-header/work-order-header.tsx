'use client';

import styles from './work-order-header.module.css';
import { addUrlKey } from '@app/_utils/navigation';
import { useRouter, useSearchParams } from 'next/navigation';
import CloseIcon from '@mui/icons-material/Close';

interface WorkOrderHeaderProps {
   workOrder: {
      id: string;
      work_order_number: string;
      description: string | null;
      status: string;
      priority: string;
   };
   onClose: () => void;
}
export default function WorkOrderHeader({
   workOrder,
   onClose,
}: WorkOrderHeaderProps) {
   const router = useRouter();
   const searchParams = useSearchParams();

   const actions = [
      {
         title: 'Request Quote',
         key: 'request_quote',
      },
      {
         title: 'Edit',
         key: 'edit',
      },
      {
         title: 'Close',
         key: 'close',
      },
   ];

   const changeUrl = (key) => {
      addUrlKey(router, searchParams, 'work_order_action', key);
   };

   return (
      <>
         <div className="spaced-row">
            <h1>{workOrder.work_order_number}</h1>
            <button onClick={onClose}>
               <CloseIcon
                  sx={{ color: 'var(--subtle-color)' }}
                  fontSize="small"
               />
            </button>
         </div>
         <span>{workOrder.description}</span>
         <div className="row">
            <div>
               <span>{workOrder.status}</span>
               <br />
               <label>Status</label>
            </div>

            <div>
               <span>{workOrder.priority}</span>
               <br />
               <label>Priority</label>
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
