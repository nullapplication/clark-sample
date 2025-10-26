'use client';

import { SimpleAutoComplete } from '@app/_components/ui/simple-autocomplete/simple-autocomplete';

export default function MaintenanceTypeDropdown({ id, control }) {
   const options = [
      { id: 'task', label: 'Task' },
      { id: 'inspection', label: 'Inspection' },
   ];

   return (
      <SimpleAutoComplete
         name={id}
         control={control}
         options={options}
         getOptionLabel={(x) => x.label}
         placeholder="Maintenance Type"
         memoize
         saveAsKey
      />
   );
}
