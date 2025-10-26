'use client';

import { SimpleAutoComplete } from '@app/_components/ui/simple-autocomplete/simple-autocomplete';

export default function SeverityDropdown({ id, control }) {
   const options = [
      { id: 'low', label: 'Low' },
      { id: 'medium', label: 'Medium' },
      { id: 'high', label: 'High' },
      { id: 'grounded', label: 'Grounded' },
   ];

   return (
      <SimpleAutoComplete
         name={id}
         control={control}
         options={options}
         getOptionLabel={(x) => x.label}
         placeholder="Severity"
         memoize
         saveAsKey
      />
   );
}
