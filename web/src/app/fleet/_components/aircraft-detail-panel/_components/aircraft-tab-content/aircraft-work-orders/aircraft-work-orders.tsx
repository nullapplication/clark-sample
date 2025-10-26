import SearchInput from '@app/_components/ui/search-input/search-input';
import WorkOrderList from '@app/_components/work-order-list/work-order-list';

export default function AircraftWorkOrders({ tailNumber }) {
   return (
      <>
         <form className="search-form">
            <SearchInput placeholder="Search work orders" />
         </form>
         <WorkOrderList tailNumber={tailNumber} />
      </>
   );
}
