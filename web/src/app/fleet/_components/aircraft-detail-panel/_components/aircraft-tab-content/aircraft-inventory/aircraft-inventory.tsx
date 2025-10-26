import InventoryHierarchy from '@app/_components/inventory-hierarchy/inventory-hierarchy';
import SearchInput from '@app/_components/ui/search-input/search-input';

export default function AircraftInventory({
   tailNumber,
   airframe_physical_inventory_id,
}) {
   return (
      <>
         <div className="spaced-row">
            <form className="search-form">
               <SearchInput placeholder="Search parts" />
            </form>
         </div>
         <InventoryHierarchy
            tailNumber={tailNumber}
            airframe_physical_inventory_id={airframe_physical_inventory_id}
         />
      </>
   );
}
