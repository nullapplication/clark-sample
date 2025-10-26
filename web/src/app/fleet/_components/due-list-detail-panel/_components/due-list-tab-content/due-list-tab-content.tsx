'use client';

import DueListDetails from './due-list-details/due-list-details';
import DueListHistory from './due-list-history/due-list-history';
import DueListInventory from './due-list-inventory/due-list-inventory';
import DueListOverview from './due-list-overview/due-list-overview';
import DueListWorkOrders from './due-list-work-orders/due-list-work-orders';

interface DueListTabContentProps {
   task: {
      id: string;
      description: string;
      standard_operating_procedure: string | null;
      scheduled_maintenance: {
         name: string;
         description: string | null;
      };
   };
   selectedTab: string;
   tailNumber: string | null;
}
export default function DueListTabContent({
   task,
   selectedTab,
   tailNumber,
}: DueListTabContentProps) {
   return (
      <div className="tab-content">
         {selectedTab === 'overview' && <DueListOverview task={task} />}
         {selectedTab === 'details' && <DueListDetails task={task} />}
         {selectedTab === 'inventory' && (
            <DueListInventory dueListId={task.id} />
         )}
         {selectedTab === 'work-orders' && (
            <DueListWorkOrders dueListId={task.id} tailNumber={tailNumber} />
         )}
         {selectedTab === 'history' && <DueListHistory />}
      </div>
   );
}
