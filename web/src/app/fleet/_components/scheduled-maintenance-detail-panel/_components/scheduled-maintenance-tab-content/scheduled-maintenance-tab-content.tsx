'use client';

import ScheduledMaintenanceOverview from './scheduled-maintenance-overview/scheduled-maintenance-overview';

interface ScheduledMaintenanceTabContentProps {
   task: {
      id: string;
      description: string;
      standard_operating_procedure: string | null;
   };
   selectedTab: string;
   tailNumber: string | null;
}
export default function ScheduledMaintenanceTabContent({
   task,
   selectedTab,
}: ScheduledMaintenanceTabContentProps) {
   return (
      <div className="tab-content">
         {selectedTab === 'overview' && (
            <ScheduledMaintenanceOverview task={task} />
         )}
         {/* {selectedTab === 'history' && <DueListHistory />} */}
      </div>
   );
}
