import styles from './purchase-order-card.module.css';

interface PurchaseOrder {
   id: string;
   order_number: string;
   vendor: string;
   status: string;
   supplier: {
      id: string;
      name: string;
   };
   created_at: Date;
}
export default function PurchaseOrderCard({
   purchaseOrder,
}: {
   purchaseOrder: PurchaseOrder;
}) {
   return (
      <div className={styles.main}>
         <div className={styles.column}>
            <span className="subtle">PO {purchaseOrder.order_number}</span>
            <span className="subtle">Order Number</span>
         </div>

         <div className={styles.column}>
            <span>{purchaseOrder.status}</span>
            <span className="subtle">Status</span>
         </div>

         <div className={styles.column}>
            <span>{purchaseOrder.supplier.name}</span>
            <span className="subtle">Vendor</span>
         </div>

         <div className={styles.column}>
            <span>
               {new Date(purchaseOrder.created_at).toLocaleDateString()}
            </span>
            <span className="subtle">Created Date</span>
         </div>
      </div>
   );
}
