'use client';

import PurchaseOrderList from '@app/_components/purchase-order-list/purchase-order-list';
import SearchInput from '@app/_components/ui/search-input/search-input';

interface AircraftPurchaseOrdersProps {
   tailNumber: string;
}
export default function AircraftPurchaseOrders({
   tailNumber,
}: AircraftPurchaseOrdersProps) {
   return (
      <>
         <div className="spaced-row">
            <form className="search-form">
               <SearchInput placeholder="Search purchase orders" />
            </form>
         </div>
         <PurchaseOrderList tailNumber={tailNumber} />
      </>
   );
}
