'use client';
import NoDataFound from '@ui/no-data-found/no-data-found';
import WorkOrderCard from '../work-order-card/work-order-card';
import styles from './work-order-list.module.css';
import { useEffect, useState } from 'react';

interface WorkOrderListProps {
   tailNumber?: string | null;
   dueListId?: string | null;
   onSelectWorkOrder?: (id: string) => void;
}
export default function WorkOrderList({
   tailNumber,
   dueListId,
   onSelectWorkOrder,
}: WorkOrderListProps) {
   const [workOrders, setWorkOrders] = useState([]);
   useEffect(() => {
      async function fetchWorkOrders() {
         let url: string;
         if (tailNumber && dueListId) {
            url = `api/aircraft/${tailNumber}/due-list/${dueListId}/work-orders`;
         } else if (tailNumber) {
            url = `api/aircraft/${tailNumber}/work-orders`;
         } else if (dueListId) {
            url = `api/fleet/due-list/${dueListId}/work-orders`;
         } else {
            url = 'api/work-orders';
         }

         const workOrderResponse = await fetch(url).then((res) => res.json());
         const workOrders = workOrderResponse.data;
         setWorkOrders(workOrders);
      }
      fetchWorkOrders();
   }, [tailNumber, dueListId]);

   return (
      <div className={styles.main}>
         <p className="todo">
            We need to add a migration to include vendor on work orders and
            change the hardcoded &quot;Internal&quot; on work-order-card.
         </p>
         <p className="todo">
            When accessing related work orders of a due list item, we need to
            add a new api endpoint /api/fleet/due-list/[id]/work-orders
         </p>
         {workOrders?.map((workOrder) => (
            <WorkOrderCard
               key={workOrder.id}
               workOrder={workOrder}
               onSelectWorkOrder={onSelectWorkOrder}
            />
         ))}
         <NoDataFound data={workOrders} dataNameOnly="work orders" />
      </div>
   );
}
