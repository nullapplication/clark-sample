'use client';

import { useState, useEffect } from 'react';
import PurchaseOrderCard from '../purchase-order-card/purchase-order-card';
import NoDataFound from '../ui/no-data-found/no-data-found';
import styles from './purchase-order-list.module.css';

interface PurchaseOrderListProps {
   tailNumber: string;
   maintenance_due_projection_id?: string | null;
}
export default function PurchaseOrderList({
   tailNumber,
   maintenance_due_projection_id,
}: PurchaseOrderListProps) {
   const [purchaseOrders, setPurchaseOrders] = useState([]);
   useEffect(() => {
      async function fetchPurchaseOrders() {
         let url: string;
         if (tailNumber && maintenance_due_projection_id) {
            url = `api/aircraft/${tailNumber}/due-list/${maintenance_due_projection_id}/purchase-orders`;
         } else if (tailNumber) {
            url = `api/aircraft/${tailNumber}/purchase-orders`;
         } else {
            url = 'api/purchase-orders';
         }

         const purchaseOrderResponse = await fetch(url).then((res) =>
            res.json(),
         );
         const purchaseOrders = purchaseOrderResponse.data;
         setPurchaseOrders(purchaseOrders);
      }
      fetchPurchaseOrders();
   }, [tailNumber, maintenance_due_projection_id]);

   return (
      <div className={styles.main}>
         {purchaseOrders.map((purchaseOrder) => (
            <PurchaseOrderCard
               key={purchaseOrder.id}
               purchaseOrder={purchaseOrder}
            />
         ))}
         <NoDataFound data={purchaseOrders} dataNameOnly="purchase orders" />
      </div>
   );
}
