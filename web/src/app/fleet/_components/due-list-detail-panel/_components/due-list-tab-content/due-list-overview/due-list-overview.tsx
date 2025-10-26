interface DueListOverviewProps {
   task: {
      description: string | null;
      standard_operating_procedure: string | null;
      scheduled_maintenance: {
         description: string;
      };
   };
}
export default function DueListOverview({ task }: DueListOverviewProps) {
   return (
      <>
         <label>Description:</label>
         <p>{task.scheduled_maintenance?.description || 'None'}</p>
         <label>Standard Operating Procedure:</label>
         <p>{task.standard_operating_procedure || 'None'}</p>
      </>
   );
}
