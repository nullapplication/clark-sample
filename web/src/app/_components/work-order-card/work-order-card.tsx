import PriorityBadge from '@ui/priority-badge/priority-badge';
import styles from './work-order-card.module.css';

interface WorkOrderCardProps {
   workOrder: {
      id: string;
      work_order_number: string;
      priority: string;
      status: string;
      created_at: Date;
      completed_at: Date | null;
   };
   onSelectWorkOrder: (id: string) => void;
}

export default function WorkOrderCard({
   workOrder,
   onSelectWorkOrder,
}: WorkOrderCardProps) {
   const handleSelectWorkOrder = () => {
      onSelectWorkOrder(workOrder.work_order_number);
   };

   return (
      <div className={styles.main} onClick={handleSelectWorkOrder}>
         <div className={styles.column}>
            <span className="subtle">{workOrder.work_order_number}</span>
            <PriorityBadge priority={workOrder.priority} />
            <span className="subtle">Priority</span>
         </div>

         <div className={styles.column}>
            <span>{workOrder.status}</span>
            <span className="subtle">Status</span>
         </div>

         <div className={styles.column}>
            <span>Internal</span>
            <span className="subtle">Vendor</span>
         </div>

         <div className={styles.column}>
            <span>{new Date(workOrder.created_at).toLocaleDateString()}</span>
            <span className="subtle">Created Date</span>
         </div>

         <div className={styles.column}>
            <span>
               {workOrder.completed_at
                  ? new Date(workOrder.completed_at).toLocaleDateString()
                  : '-'}
            </span>
            <span className="subtle">Completed Date</span>
         </div>
      </div>
   );
}
