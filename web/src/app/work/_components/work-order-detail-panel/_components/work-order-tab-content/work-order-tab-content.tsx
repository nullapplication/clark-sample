'use client';

import WorkOrderLineItems from './work-order-line-items/work-order-line-items';
import WorkOrderRelatedItems from './work-order-related-items/work-order-related-items';
import WorkOrderRelatedInventory from './work-order-related-inventory/work-order-related-inventory';
import WorkOrderHistory from './work-order-history/work-order-history';

interface WorkOrderTabContentProps {
   workOrder: {
      id: string;
      work_order_number: string;
      description: string;
      line_items: {
         id: string;
         description: string;
         quantity: number;
      }[];
   };
   selectedTab: string;
}
export default function WorkOrderTabContent({
   workOrder,
   selectedTab,
}: WorkOrderTabContentProps) {
   return (
      <div className="tab-content">
         {selectedTab === 'line_items' && (
            <WorkOrderLineItems lineItems={workOrder.line_items} />
         )}
         {selectedTab === 'related_mx_items' && (
            <WorkOrderRelatedItems
               workOrderNumber={workOrder.work_order_number}
            />
         )}
         {selectedTab === 'related_inventory' && (
            <WorkOrderRelatedInventory
               workOrderNumber={workOrder.work_order_number}
            />
         )}
         {selectedTab === 'history' && (
            <WorkOrderHistory workOrderNumber={workOrder.work_order_number} />
         )}
      </div>
   );
}
