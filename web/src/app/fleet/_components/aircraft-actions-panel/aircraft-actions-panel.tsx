'use client';

import UpdateAircraftTimesForm from './update-aircraft-times-form/update-aircraft-times-form';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter, useSearchParams } from 'next/navigation';
import AddTaskForm from './add-task-form/add-task-form';
import EditAircraftForm from './edit-aircraft-form/edit-aircraft-form';
import ReportDiscrepancyForm from './report-discrepancy-form/report-discrepancy-form';
import InstallPartForm from './install-part-form/install-part-form';
import CreatePurchaseOrderForm from './create-purchase-order-form/create-purchase-order-form';
import AircraftAttachFile from './aircraft-attach-file/aircraft-attach-file';
import { useAircraftDetail } from '@app/_hooks/aircraft-hooks';
import CreateWorkOrderForm from '@app/_components/create-work-order-form/create-work-order-form';

interface AircraftActionsPanelProps {
   tailNumber: string;
   action: string;
}
export default function AircraftActionsPanel({
   tailNumber,
   action,
}: AircraftActionsPanelProps) {
   const router = useRouter();
   const searchParams = useSearchParams();

   const { aircraft } = useAircraftDetail(tailNumber);

   const closePanel = () => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete('aircraft_action');

      const newPath = `${window.location.pathname}?${params.toString()}`;
      router.replace(newPath);
   };

   const closeButtonContent = (
      <button onClick={closePanel}>
         <CloseIcon sx={{ color: 'var(--subtle-color)' }} fontSize="small" />
      </button>
   );

   let heading,
      content = null;
   switch (action) {
      case 'add-task':
         heading = (
            <div className="spaced-row">
               <h1>{aircraft?.tail_number} Add Task</h1>
               {closeButtonContent}
            </div>
         );
         content = <AddTaskForm aircraft={aircraft} />;
         break;
      case 'attach-file':
         heading = (
            <div className="spaced-row">
               <h1>{aircraft?.tail_number} Attach File(s)</h1>
               {closeButtonContent}
            </div>
         );
         content = <AircraftAttachFile tailNumber={aircraft?.tail_number} />;
         break;
      case 'create-purchase-order':
         heading = (
            <div className="spaced-row">
               <h1>{aircraft?.tail_number} Create Purchase Order</h1>
               {closeButtonContent}
            </div>
         );
         content = <CreatePurchaseOrderForm />;
         break;
      case 'create-work-order':
         heading = (
            <div className="spaced-row">
               <h1>{aircraft?.tail_number} Create Work Order</h1>
               {closeButtonContent}
            </div>
         );
         content = <CreateWorkOrderForm aircraft={aircraft} />;
         break;
      case 'edit':
         heading = (
            <div className="spaced-row">
               <h1>{aircraft?.tail_number} Edit</h1>
               {closeButtonContent}
            </div>
         );
         content = <EditAircraftForm aircraft={aircraft} />;
         break;
      case 'install-part':
         heading = (
            <div className="spaced-row">
               <h1>{aircraft?.tail_number} Install Part</h1>
               {closeButtonContent}
            </div>
         );
         content = <InstallPartForm />;
         break;
      case 'report-discrepancy':
         heading = (
            <div className="spaced-row">
               <h1>{aircraft?.tail_number} Report Discrepancy</h1>
               {closeButtonContent}
            </div>
         );
         content = <ReportDiscrepancyForm aircraft={aircraft} />;
         console.log(aircraft);
         break;
      case 'update-times':
         heading = (
            <div className="spaced-row">
               <h1>{aircraft?.tail_number} Update Times</h1>
               {closeButtonContent}
            </div>
         );
         content = <UpdateAircraftTimesForm aircraft={aircraft} />;
         break;
   }

   if (!action) {
      return null;
   }

   return (
      <div className="sidepanel">
         {heading}
         {content}
      </div>
   );
}
