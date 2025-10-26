import { addUrlKey } from '@app/_utils/navigation';
import { useRouter, useSearchParams } from 'next/navigation';

interface ScheduledMaintenanceTabsProps {
   scheduledMaintenanceId: string;
   selectedTab: string;
}
export default function ScheduledMaintenanceTabs({
   scheduledMaintenanceId,
   selectedTab,
}: ScheduledMaintenanceTabsProps) {
   const router = useRouter();
   const searchParams = useSearchParams();

   if (!scheduledMaintenanceId) {
      return null;
   }

   const tabs = [
      {
         title: 'Task Overview',
         key: 'overview',
      },
      //   {
      //      title: 'Related Parts',
      //      key: 'inventory',
      //   },
      //   {
      //      title: 'History',
      //      key: 'history',
      //   },
   ];

   const selectTab = (key) => {
      addUrlKey(router, searchParams, 'scheduled_maintenance_tab', key);
   };

   return (
      <ul className="tabs">
         {tabs.map((tab) => (
            <li
               key={tab.key}
               className={selectedTab === tab.key ? 'active' : ''}
            >
               <button onClick={selectTab.bind(null, tab.key)}>
                  {tab.title}
               </button>
            </li>
         ))}
      </ul>
   );
}
