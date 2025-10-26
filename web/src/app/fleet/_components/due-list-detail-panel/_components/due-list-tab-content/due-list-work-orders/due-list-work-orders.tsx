'use client';

import SearchInput from '@app/_components/ui/search-input/search-input';
import WorkOrderList from '@app/_components/work-order-list/work-order-list';

interface DueListWorkOrdersProps {
   dueListId: string;
   tailNumber: string | null;
}
export default function DueListWorkOrders({
   dueListId,
   tailNumber,
}: DueListWorkOrdersProps) {
   console.log(dueListId);
   return (
      <>
         <form className="search-form">
            <SearchInput placeholder="Search work orders" />
         </form>
         <WorkOrderList tailNumber={tailNumber} dueListId={dueListId} />
      </>
   );
}
