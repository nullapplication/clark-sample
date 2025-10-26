import NoDataFound from '@app/_components/ui/no-data-found/no-data-found';
import { useState } from 'react';

interface DueListInventoryProps {
   dueListId: string;
}
export default function DueListInventory({ dueListId }: DueListInventoryProps) {
   const [relatedParts] = useState([]);

   return (
      <>
         <p className="todo">Related parts go here for {dueListId}</p>
         <NoDataFound data={relatedParts} dataNameOnly="related parts" />
      </>
   );
}
