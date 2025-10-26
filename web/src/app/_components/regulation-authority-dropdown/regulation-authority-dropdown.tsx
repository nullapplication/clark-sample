import { useState } from 'react';
import { SimpleAutoComplete } from '../ui/simple-autocomplete/simple-autocomplete';

export default function RegulationAuthorityDropdown({ id, control }) {
   const [regulationAuthority] = useState([
      {
         code: 'FAA',
      },
      {
         code: 'EASA',
      },
      {
         code: 'TCCA',
      },
      {
         code: 'CAAC',
      },
      {
         code: 'UKCAA',
      },
      {
         code: 'DGCA',
      },
      {
         code: 'JAA',
      },
   ]);

   return (
      <SimpleAutoComplete
         name={id}
         control={control}
         options={regulationAuthority}
         getOptionLabel={(x) => x.code}
         placeholder="Regulation Authority"
         memoize
         saveAsKey
      />
   );
}
