'use client';
import AircraftHeader from '@app/fleet/_components/aircraft-detail-panel/_components/aircraft-header/aircraft-header';
import AircraftTabs from '@app/fleet/_components/aircraft-detail-panel/_components/aircraft-tabs/aircraft-tabs';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import AircraftTabContent from './_components/aircraft-tab-content/aircraft-tab-content';
import { removeUrlKeys } from '@app/_utils/navigation';

interface AircraftDetailPanelProps {
   tailNumber: string | null;
   selectedTab: string | null;
}
export default function AircraftDetailPanel({
   tailNumber,
   selectedTab,
}: AircraftDetailPanelProps) {
   const router = useRouter();
   const searchParams = useSearchParams();
   const [aircraft, setAircraft] = useState(null);

   useEffect(() => {
      async function fetchAircraft() {
         const url = `/api/aircraft/${tailNumber}`;
         const aircraftResponse = await fetch(url).then((res) => res.json());
         setAircraft(aircraftResponse);
      }

      if (tailNumber) {
         fetchAircraft();
      }
   }, [tailNumber]);

   const closePanel = () => {
      removeUrlKeys(router, searchParams, ['tail_number', 'aircraft_tab']);
      setAircraft(null);
   };

   if (!aircraft) {
      return null;
   }

   return (
      <div className="sidepanel">
         <AircraftHeader aircraft={aircraft} onClose={closePanel} />
         <AircraftTabs selectedTab={selectedTab} tailNumber={tailNumber} />
         <AircraftTabContent
            selectedTab={selectedTab}
            tailNumber={tailNumber}
            airframe_physical_inventory_id={
               aircraft.airframe_physical_inventory_id
            }
         />
      </div>
   );
}
