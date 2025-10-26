'use client';
import NoDataFound from '@app/_components/ui/no-data-found/no-data-found';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styles from './inventory-list.module.css';
import { useState, useEffect } from 'react';

interface InventoryListProps {
   workOrderNumber: string | null;
}
export default function InventoryList({ workOrderNumber }: InventoryListProps) {
   const [inventory, setInventory] = useState([]);
   useEffect(() => {
      async function fetchInventory() {
         const inventoryResponse = await fetch(
            `api/work-orders/${workOrderNumber}/inventory`,
         ).then((res) => res.json());
         const inventory = inventoryResponse.data;
         setInventory(inventory);
      }
      fetchInventory();
   }, [workOrderNumber]);

   return (
      <>
         {inventory?.map((part) => (
            <div key={part.number} className={styles.part}>
               <KeyboardArrowRightIcon />
               <div>
                  <span className={styles.title}>{part.name}</span>
                  <div className={styles.partInfo}>
                     <div>
                        {part.number}
                        <br />
                        <span className={styles.label}>Part Number</span>
                     </div>

                     <div>
                        {part.serial_number || part.lot_number}
                        <br />
                        <span className={styles.label}>Serial/Lot Number</span>
                     </div>
                  </div>
               </div>
            </div>
         ))}
         <NoDataFound data={inventory} dataNameOnly="parts" />
      </>
   );
}
