import InventoryList from '@app/_components/inventory-list/inventory-list';

export default function WorkOrderRelatedInventory({ workOrderNumber }) {
   return <InventoryList workOrderNumber={workOrderNumber} />;
}
