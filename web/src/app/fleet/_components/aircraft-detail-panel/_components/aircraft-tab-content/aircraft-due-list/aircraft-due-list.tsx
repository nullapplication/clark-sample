'use client';

import DueListTable from '@app/_components/due-list-table/due-list-table';
import SearchInput from '@app/_components/ui/search-input/search-input';

export default function AircraftDueList({ tailNumber, includeCheckbox }) {
   return (
      <>
         <div className="spaced-row">
            <form className="search-form">
               <SearchInput placeholder="Search maintenance" />
            </form>
         </div>
         <DueListTable
            tailNumber={tailNumber}
            includeCheckbox={includeCheckbox}
         />
      </>
   );
}
