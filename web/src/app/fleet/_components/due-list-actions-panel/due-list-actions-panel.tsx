'use client';

import CloseIcon from '@mui/icons-material/Close';
import { useRouter, useSearchParams } from 'next/navigation';
import PerformWorkForm from './perform-work-form/perform-work-form';
import ErrorCorrectForm from './error-correct-form/error-correct-form';
import { useAircraftDetail } from '@app/_hooks/aircraft-hooks';
import { useDueList } from '@app/_hooks/fleet-hooks';

interface DueListActionsPanelProps {
   dueListId: string;
   action: string;
   tailNumber: string | null;
}
export default function DueListActionsPanel({
   dueListId,
   tailNumber,
   action,
}: DueListActionsPanelProps) {
   const router = useRouter();
   const searchParams = useSearchParams();

   const { task } = useDueList(dueListId);
   const { aircraft } = useAircraftDetail(tailNumber);

   const closePanel = () => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete('due_list_action');

      const newPath = `${window.location.pathname}?${params.toString()}`;
      router.replace(newPath);
   };

   let heading,
      content = null;

   switch (action) {
      case 'perform-work':
         heading = (
            <div className="spaced-row">
               <h1>{task?.task_number} Perform Work</h1>
               <button onClick={closePanel}>
                  <CloseIcon
                     sx={{ color: 'var(--subtle-color)' }}
                     fontSize="small"
                  />
               </button>
            </div>
         );
         content = <PerformWorkForm task={task} aircraft={aircraft} />;
         break;
      case 'error-correct':
         heading = (
            <div className="spaced-row">
               <h1>{task?.task_number} Error Correct</h1>
               <button onClick={closePanel}>
                  <CloseIcon
                     sx={{ color: 'var(--subtle-color)' }}
                     fontSize="small"
                  />
               </button>
            </div>
         );
         content = <ErrorCorrectForm />;
   }

   if (!action || !task) {
      return null;
   }

   return (
      <div className="sidepanel">
         {heading}
         {content}
      </div>
   );
}
