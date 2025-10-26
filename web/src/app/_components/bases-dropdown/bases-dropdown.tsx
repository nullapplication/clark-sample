'use client';

import { SimpleAutoComplete } from '@app/_components/ui/simple-autocomplete/simple-autocomplete';
import { useBaseOfOperationsList } from '@app/_hooks/base-of-operations-hooks';

export default function BaseOfOperationsDropdown({ id, control }) {
   const { basesList } = useBaseOfOperationsList();

   return (
      <SimpleAutoComplete
         name={id}
         control={control}
         options={basesList}
         getOptionLabel={(x) => x.name}
         placeholder="Base"
         memoize
         saveAsKey
      />
   );
}
