'use client';

import { addUrlKey } from '@app/_utils/navigation';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AircraftTabs({ tailNumber, selectedTab }) {
   const router = useRouter();
   const searchParams = useSearchParams();

   if (!tailNumber) {
      return null;
   }

   const tabs = [
      {
         title: 'Due List',
         key: 'due-list',
      },
      {
         title: 'MX Tasks',
         key: 'maintenance',
      },
      {
         title: 'Parts / Components',
         key: 'parts',
      },
      {
         title: 'Logbooks',
         key: 'logbooks',
      },
      {
         title: 'Work Orders',
         key: 'work-orders',
      },
      {
         title: 'Purchase Orders',
         key: 'purchase-orders',
      },
      {
         title: 'Reference Docs',
         key: 'docs',
      },
      {
         title: 'History',
         key: 'history',
      },
   ];

   const selectTab = (key) => {
      addUrlKey(router, searchParams, 'aircraft_tab', key);
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
