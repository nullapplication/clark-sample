import { addUrlKey } from '@app/_utils/navigation';
import { useRouter, useSearchParams } from 'next/navigation';

interface DueListTabsProps {
   dueListId: string;
   selectedTab: string;
}
export default function DueListTabs({
   dueListId,
   selectedTab,
}: DueListTabsProps) {
   const router = useRouter();
   const searchParams = useSearchParams();

   if (!dueListId) {
      return null;
   }

   const tabs = [
      {
         title: 'Task Overview',
         key: 'overview',
      },
      // {
      //    title: 'Additional Details',
      //    key: 'details',
      // },
      {
         title: 'Related Parts',
         key: 'inventory',
      },
      {
         title: 'Related Work Orders',
         key: 'work-orders',
      },
      {
         title: 'History',
         key: 'history',
      },
   ];

   const selectTab = (key) => {
      addUrlKey(router, searchParams, 'due_list_tab', key);
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
