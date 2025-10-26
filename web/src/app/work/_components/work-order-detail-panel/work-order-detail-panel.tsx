'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { removeUrlKeys } from '@app/_utils/navigation';
import WorkOrderHeader from './_components/work-order-header/work-order-header';
import WorkOrderTabs from './_components/work-order-tabs/work-order-tabs';
import WorkOrderTabContent from './_components/work-order-tab-content/work-order-tab-content';

interface WorkOrderDetailPanelProps {
   workOrderNumber: string | null;
   selectedTab: string | null;
}
export default function WorkOrderDetailPanel({
   workOrderNumber,
   selectedTab,
}: WorkOrderDetailPanelProps) {
   console.log(workOrderNumber);
   const router = useRouter();
   const searchParams = useSearchParams();
   const [workOrder, setWorkOrder] = useState(null);

   useEffect(() => {
      async function fetchWorkOrder() {
         const url = `/api/work-orders/${workOrderNumber}`;
         const workOrderResponse = await fetch(url).then((res) => res.json());
         setWorkOrder(workOrderResponse);
      }

      if (workOrderNumber) {
         fetchWorkOrder();
      }
   }, [workOrderNumber]);

   const closePanel = () => {
      removeUrlKeys(router, searchParams, [
         'work_order_number',
         'work_order_tab',
      ]);
      setWorkOrder(null);
   };

   if (!workOrder) {
      return null;
   }

   return (
      <div className="sidepanel">
         <WorkOrderHeader workOrder={workOrder} onClose={closePanel} />
         <WorkOrderTabs
            workOrderNumber={workOrderNumber}
            selectedTab={selectedTab}
         />
         <WorkOrderTabContent workOrder={workOrder} selectedTab={selectedTab} />
      </div>
   );
}
