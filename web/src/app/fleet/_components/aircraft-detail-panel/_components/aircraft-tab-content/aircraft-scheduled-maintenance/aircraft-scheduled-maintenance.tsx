'use client';

import ScheduledMaintenanceTable from '@app/_components/scheduled-maintenance-table/scheduled-maintenance-table';
import SearchInput from '@app/_components/ui/search-input/search-input';

export default function AircraftScheduledMaintenanceList({
   tailNumber,
   includeCheckbox,
}) {
   return (
      <>
         <div className="spaced-row">
            <form className="search-form">
               <SearchInput placeholder="Search maintenance" />
            </form>
         </div>
         <ScheduledMaintenanceTable
            tailNumber={tailNumber}
            includeCheckbox={includeCheckbox}
         />
      </>
   );
}
