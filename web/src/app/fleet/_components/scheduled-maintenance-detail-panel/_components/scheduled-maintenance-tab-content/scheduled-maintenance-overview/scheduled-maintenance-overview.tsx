interface ScheduledMaintenanceOverviewProps {
   task: {
      description: string | null;
      standard_operating_procedure: string | null;
   };
}
export default function ScheduledMaintenanceOverview({
   task,
}: ScheduledMaintenanceOverviewProps) {
   return (
      <>
         <label>Description:</label>
         <p>{task.description || 'None'}</p>
         <label>Standard Operating Procedure:</label>
         <pre>{task.standard_operating_procedure || 'None'}</pre>
      </>
   );
}
