import WorkOrderLineItemTable from '@app/_components/work-order-line-item-table/work-order-line-item-table';

export default function WorkOrderLineItems({ lineItems }) {
   return <WorkOrderLineItemTable lineItems={lineItems} />;
}
