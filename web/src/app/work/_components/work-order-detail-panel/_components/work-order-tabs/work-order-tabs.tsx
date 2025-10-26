import { addUrlKey } from '@app/_utils/navigation';
import { useRouter, useSearchParams } from 'next/navigation';

interface WorkOrderTabsProps {
   workOrderNumber: string;
   selectedTab: string;
}
export default function WorkOrderTabs({
   workOrderNumber,
   selectedTab,
}: WorkOrderTabsProps) {
   const router = useRouter();
   const searchParams = useSearchParams();

   if (!workOrderNumber) {
      return null;
   }

   const tabs = [
      {
         title: 'Line Items',
         key: 'line_items',
      },
      {
         title: 'Related MX Items',
         key: 'related_mx_items',
      },
      {
         title: 'Related Parts',
         key: 'related_inventory',
      },
      {
         title: 'History',
         key: 'history',
      },
   ];

   const selectTab = (key) => {
      addUrlKey(router, searchParams, 'work_order_tab', key);
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
