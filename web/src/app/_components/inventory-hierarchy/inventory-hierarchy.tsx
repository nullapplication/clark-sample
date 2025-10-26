'use client';
import NoDataFound from '@app/_components/ui/no-data-found/no-data-found';
import styles from './inventory-hierarchy.module.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState, useEffect } from 'react';

interface InventoryHierarchyProps {
   tailNumber: string | null;
   airframe_physical_inventory_id: string | null;
}
export default function InventoryHierarchy({
   tailNumber,
   airframe_physical_inventory_id,
}: InventoryHierarchyProps) {
   const [inventory, setInventory] = useState([]);
   useEffect(() => {
      async function fetchInventory() {
         const inventoryResponse = await fetch(
            `api/aircraft/${tailNumber}/inventory?parent_id=${airframe_physical_inventory_id}`,
         ).then((res) => res.json());
         const inventory = inventoryResponse.data;
         setInventory(inventory);
      }
      fetchInventory();
   }, [tailNumber, airframe_physical_inventory_id]);

   return (
      <>
         <p className="todo">
            We need to add functionality to recursively call the hierarchy and
            allow clicking the expand icon to show part components.
         </p>
         {inventory.map((part) => (
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
