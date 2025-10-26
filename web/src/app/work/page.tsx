'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Bases from '@app/_components/bases/bases';
import WorkOrderList from '@app/_components/work-order-list/work-order-list';
import { Suspense, useEffect, useState } from 'react';
import { addUrlKey } from '@app/_utils/navigation';
import WorkOrderDetailPanel from './_components/work-order-detail-panel/work-order-detail-panel';

function WorkHomepageContent() {
   const router = useRouter();
   const searchParams = useSearchParams();
   const [selectedWorkOrderNumber, setSelectedWorkOrderNumber] = useState(null);
   const [, setSelectedBaseOfOperationId] = useState(null);
   const [selectedWorkOrderTab, setSelectedWorkOrderTab] = useState(null);
   const [, setWorkOrderAction] = useState(null);

   useEffect(() => {
      const getParams = async () => {
         const workOrderNumber = searchParams.get('work_order_number');
         console.log(workOrderNumber);
         const base_of_operation_id = searchParams.get('base_of_operation_id');
         const work_order_tab = searchParams.get('work_order_tab');
         const work_order_action = searchParams.get('work_order_action');

         setSelectedWorkOrderNumber(workOrderNumber);
         setSelectedBaseOfOperationId(base_of_operation_id);
         setSelectedWorkOrderTab(work_order_tab || 'line_items');
         setWorkOrderAction(work_order_action);
      };

      getParams();
   }, [searchParams]);

   const handleSelectBase = (id: string) => {
      setSelectedBaseOfOperationId(id);
      addUrlKey(router, searchParams, 'base_of_operation_id', id);
   };

   const handleSelectWorkOrder = (workOrderNumber: string) => {
      setSelectedWorkOrderNumber(workOrderNumber);
      addUrlKey(router, searchParams, 'work_order_number', workOrderNumber);
   };

   return (
      <div className="container">
         <div className="content">
            <h1>Work</h1>
            <Bases onSelect={handleSelectBase} />

            <h2>Work Orders</h2>
            <WorkOrderList onSelectWorkOrder={handleSelectWorkOrder} />
         </div>

         <WorkOrderDetailPanel
            workOrderNumber={selectedWorkOrderNumber}
            selectedTab={selectedWorkOrderTab}
         />
      </div>
   );
}

export default function WorkHomepage() {
   return (
      <Suspense fallback={<div>Loading...</div>}>
         <WorkHomepageContent />
      </Suspense>
   );
}
