'use client';

import AircraftDocs from './aircraft-docs/aircraft-docs';
import AircraftDueList from './aircraft-due-list/aircraft-due-list';
import AircraftHistory from './aircraft-history/aircraft-history';
import AircraftInventory from './aircraft-inventory/aircraft-inventory';
import AircraftLogbooks from './aircraft-logbooks/aircraft-logbooks';
import AircraftPurchaseOrders from './aircraft-purchase-orders/aircraft-purchase-orders';
import AircraftScheduledMaintenanceList from './aircraft-scheduled-maintenance/aircraft-scheduled-maintenance';
import AircraftWorkOrders from './aircraft-work-orders/aircraft-work-orders';

interface AircraftTabContentProps {
   tailNumber: string;
   selectedTab: string | null;
   airframe_physical_inventory_id: string | null;
}
export default function AircraftTabContent({
   tailNumber,
   selectedTab,
   airframe_physical_inventory_id,
}: AircraftTabContentProps) {
   return (
      <div className="tab-content">
         {selectedTab === 'due-list' && (
            <AircraftDueList tailNumber={tailNumber} includeCheckbox={true} />
         )}
         {selectedTab === 'maintenance' && (
            <AircraftScheduledMaintenanceList
               tailNumber={tailNumber}
               includeCheckbox={true}
            />
         )}
         {selectedTab === 'parts' && (
            <AircraftInventory
               tailNumber={tailNumber}
               airframe_physical_inventory_id={airframe_physical_inventory_id}
            />
         )}
         {selectedTab === 'logbooks' && (
            <AircraftLogbooks tailNumber={tailNumber} />
         )}
         {selectedTab === 'work-orders' && (
            <AircraftWorkOrders tailNumber={tailNumber} />
         )}
         {selectedTab === 'purchase-orders' && (
            <AircraftPurchaseOrders tailNumber={tailNumber} />
         )}
         {selectedTab === 'docs' && <AircraftDocs tailNumber={tailNumber} />}
         {selectedTab === 'history' && (
            <AircraftHistory tailNumber={tailNumber} />
         )}
      </div>
   );
}
