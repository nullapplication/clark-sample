'use client';

import { SimpleAutoComplete } from '@app/_components/ui/simple-autocomplete/simple-autocomplete';

export default function WorkOrderStatusDropdown({ id, control }) {
   const options = [
      { id: 'open', label: 'Open' },
      { id: 'in_progress', label: 'In-Progress' },
      { id: 'completed', label: 'Completed' },
      { id: 'rejected', label: 'Rejected' },
   ];

   return (
      <SimpleAutoComplete
         name={id}
         control={control}
         options={options}
         getOptionLabel={(x) => x.label}
         placeholder="Status"
         memoize
         saveAsKey
      />
   );
}
