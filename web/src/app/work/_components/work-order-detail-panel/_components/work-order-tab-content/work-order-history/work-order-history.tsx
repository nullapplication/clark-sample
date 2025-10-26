'use client';

import NoDataFound from '@app/_components/ui/no-data-found/no-data-found';

interface WorkOrderHistoryProps {
   workOrderNumber: string;
}
export default function WorkOrderHistory({
   workOrderNumber,
}: WorkOrderHistoryProps) {
   const history = [];

   return (
      <>
         <p className="todo">
            We need to create a table to store history entries and have a way to
            easily pull back the changes made to this work order.{' '}
            {workOrderNumber}
         </p>

         <NoDataFound data={history} dataNameOnly="audit trail entries" />
      </>
   );
}
