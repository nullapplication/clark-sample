'use client';

import { SimpleAutoComplete } from '@app/_components/ui/simple-autocomplete/simple-autocomplete';

export default function UnscheduledMaintenanceStatusDropdown({
   id,
   control
}) {
   const options = [
      { id: 'open', label: 'Open' },
      { id: 'in_progress', label: 'In Progress' },
      { id: 'deferred', label: 'Deferred' },
      { id: 'closed', label: 'Closed' },
      { id: 'non_compliant', label: 'Non-Compliant' },
   ];

   return (
      <SimpleAutoComplete
         name={id}
         control={control}
         options={options}
         getOptionLabel={(x) => x.label}
         placeholder="Status"
         memoize
         saveAsKey />
   );
}
