'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import DueListTabs from './_components/due-list-tabs/due-list-tabs';
import DueListHeader from './_components/due-list-header/due-list-header';
import DueListTabContent from './_components/due-list-tab-content/due-list-tab-content';
import { removeUrlKeys } from '@app/_utils/navigation';

interface DueListDetailPanelProps {
   dueListId: string | null;
   tailNumber: string | null;
   selectedTab: string | null;
}
export default function DueListDetailPanel({
   dueListId,
   tailNumber,
   selectedTab,
}: DueListDetailPanelProps) {
   const router = useRouter();
   const searchParams = useSearchParams();
   const [task, setTask] = useState(null);

   useEffect(() => {
      async function fetchTask() {
         const url = `/api/fleet/due-list/${dueListId}`;
         const taskResponse = await fetch(url).then((res) => res.json());
         setTask(taskResponse);
      }
      if (dueListId) {
         fetchTask();
      }
   }, [dueListId]);

   const closePanel = () => {
      removeUrlKeys(router, searchParams, ['due_list_id', 'due_list_tab']);
      setTask(null);
   };

   if (!task) {
      return null;
   }

   return (
      <div className="sidepanel">
         <DueListHeader task={task} onClose={closePanel} />
         <DueListTabs dueListId={dueListId} selectedTab={selectedTab} />
         <DueListTabContent
            task={task}
            selectedTab={selectedTab}
            tailNumber={tailNumber}
         />
      </div>
   );
}
