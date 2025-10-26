'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { removeUrlKeys } from '@app/_utils/navigation';
import ScheduledMaintenanceTabs from './_components/scheduled-maintenance-tabs/scheduled-maintenance-tabs';
import ScheduledMaintenanceHeader from './_components/scheduled-maintenance-header/scheduled-maintenance-header';
import ScheduledMaintenanceTabContent from './_components/scheduled-maintenance-tab-content/scheduled-maintenance-tab-content';

interface ScheduledMaintenanceDetailPanelProps {
   scheduledMaintenanceId: string | null;
   tailNumber: string | null;
   selectedTab: string | null;
}
export default function ScheduledMaintenanceDetailPanel({
   scheduledMaintenanceId,
   tailNumber,
   selectedTab,
}: ScheduledMaintenanceDetailPanelProps) {
   const router = useRouter();
   const searchParams = useSearchParams();
   const [task, setTask] = useState(null);

   useEffect(() => {
      async function fetchTask() {
         const url = `/api/aircraft/${tailNumber}/scheduled-maintenance/${scheduledMaintenanceId}`;
         const taskResponse = await fetch(url).then((res) => res.json());
         setTask(taskResponse);
      }
      if (scheduledMaintenanceId) {
         fetchTask();
      }
   }, [tailNumber, scheduledMaintenanceId]);

   const closePanel = () => {
      removeUrlKeys(router, searchParams, [
         'scheduled_maintenance_id',
         'scheduled_maintenance_tab',
      ]);
      setTask(null);
   };

   if (!task) {
      return null;
   }

   return (
      <div className="sidepanel">
         <ScheduledMaintenanceHeader task={task} onClose={closePanel} />
         <ScheduledMaintenanceTabs
            scheduledMaintenanceId={scheduledMaintenanceId}
            selectedTab={selectedTab}
         />
         <ScheduledMaintenanceTabContent
            task={task}
            selectedTab={selectedTab}
            tailNumber={tailNumber}
         />
      </div>
   );
}
