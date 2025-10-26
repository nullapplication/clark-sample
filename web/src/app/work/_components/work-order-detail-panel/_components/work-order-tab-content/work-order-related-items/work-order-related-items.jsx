import ScheduledMaintenanceTable from '@app/_components/scheduled-maintenance-table/scheduled-maintenance-table';

export default function WorkOrderRelatedItems({ workOrderNumber }) {
   return <ScheduledMaintenanceTable workOrderNumber={workOrderNumber} />;
}
