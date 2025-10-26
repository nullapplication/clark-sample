'use client';

import AircraftList from '@app/_components/aircraft-list/aircraft-list';
import Bases from '@app/_components/bases/bases';
import AircraftDetailPanel from './_components/aircraft-detail-panel/aircraft-detail-panel';
import { useEffect, useState, Suspense } from 'react';
import DueListDetailPanel from './_components/due-list-detail-panel/due-list-detail-panel';
import AircraftActionsPanel from './_components/aircraft-actions-panel/aircraft-actions-panel';
import DueListActionsPanel from './_components/due-list-actions-panel/due-list-actions-panel';
import CalendarDueList from './_components/calendar-due-list/calendar-due-list';
import ForumIcon from '@mui/icons-material/Forum';
import { useRouter, useSearchParams } from 'next/navigation';
import { addUrlKey } from '@app/_utils/navigation';
import ScheduledMaintenanceDetailPanel from './_components/scheduled-maintenance-detail-panel/scheduled-maintenance-detail-panel';

function FleetHomepageContent() {
   const router = useRouter();
   const searchParams = useSearchParams();
   const [selectedTailNumber, setSelectedTailNumber] = useState(null);
   const [selectedBaseOfOperationId, setSelectedBaseOfOperationId] =
      useState(null);
   const [selectedDueListId, setSelectedDueListId] = useState(null);
   const [selectedScheduledMaintenanceId, setSelectedScheduledMaintenanceId] =
      useState(null);
   const [selectedAircraftTab, setSelectedAircraftTab] = useState(null);
   const [selectedDueListTab, setSelectedDueListTab] = useState(null);
   const [selectedScheduledMaintenanceTab, setSelectedScheduledMaintenanceTab] =
      useState(null);
   const [aircraftAction, setAircraftAction] = useState(null);
   const [dueListAction, setDueListAction] = useState(null);
   // const [scheduledMaintenanceAction, setScheduledMaintenanceAction] =
   //    useState(null);

   useEffect(() => {
      const getParams = async () => {
         const base_of_operation_id = searchParams.get('base_of_operation_id');
         const tail_number = searchParams.get('tail_number');
         const due_list_id = searchParams.get('due_list_id');
         const scheduled_maintenance_id = searchParams.get(
            'scheduled_maintenance_id',
         );
         const aircraft_tab = searchParams.get('aircraft_tab');
         const due_list_tab = searchParams.get('due_list_tab');
         const scheduled_maintenance_tab = searchParams.get(
            'scheduled_maintenance_tab',
         );
         const aircraft_action = searchParams.get('aircraft_action');
         const due_list_action = searchParams.get('due_list_action');
         // const scheduled_maintenance_action = searchParams.get(
         //    'scheduled_maintenance_action',
         // );

         setSelectedTailNumber(tail_number);
         setSelectedDueListId(due_list_id);
         setSelectedScheduledMaintenanceId(scheduled_maintenance_id);

         if (base_of_operation_id) {
            setSelectedBaseOfOperationId(base_of_operation_id);
         }

         setSelectedAircraftTab(aircraft_tab || 'due-list');
         setSelectedDueListTab(due_list_tab || 'overview');
         setSelectedScheduledMaintenanceTab(
            scheduled_maintenance_tab || 'overview',
         );

         setAircraftAction(aircraft_action);
         setDueListAction(due_list_action);
         // setScheduledMaintenanceAction(scheduled_maintenance_action);
      };

      getParams();
   }, [searchParams]);

   const openChat = () => {
      addUrlKey(router, searchParams, 'chat', 'true');
   };

   const selectBase = (id) => {
      setSelectedBaseOfOperationId(id);
      addUrlKey(router, searchParams, 'base_of_operation_id', id);
   };

   return (
      <div className="container">
         <div className="content">
            <div className="spaced-row">
               <h1>Summary</h1>
               {!searchParams.get('chat') && (
                  <button onClick={openChat}>
                     <ForumIcon style={{ color: 'var(--highlight-color)' }} />
                  </button>
               )}
            </div>

            <Bases onSelect={(id) => selectBase(id)} />

            <h2>Fleet</h2>
            <AircraftList
               selectedBaseOfOperationId={selectedBaseOfOperationId}
               selectedDueListId={selectedDueListId}
            />

            <h3>Due List</h3>
            <CalendarDueList baseOfOperationId={selectedBaseOfOperationId} />
         </div>

         <AircraftDetailPanel
            tailNumber={selectedTailNumber}
            selectedTab={selectedAircraftTab}
         />
         <AircraftActionsPanel
            tailNumber={selectedTailNumber}
            action={aircraftAction}
         />
         <DueListDetailPanel
            dueListId={selectedDueListId}
            tailNumber={selectedTailNumber}
            selectedTab={selectedDueListTab}
         />
         <DueListActionsPanel
            dueListId={selectedDueListId}
            tailNumber={selectedTailNumber}
            action={dueListAction}
         />
         <ScheduledMaintenanceDetailPanel
            scheduledMaintenanceId={selectedScheduledMaintenanceId}
            tailNumber={selectedTailNumber}
            selectedTab={selectedScheduledMaintenanceTab}
         />
      </div>
   );
}

export default function FleetHomepage() {
   return (
      <Suspense fallback={<div>Loading...</div>}>
         <FleetHomepageContent />
      </Suspense>
   );
}
