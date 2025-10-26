'use client';

import { SimpleAutoComplete } from '@app/_components/ui/simple-autocomplete/simple-autocomplete';

export default function FlightPhaseDropdown({ id, control }) {
   const options = [
      { id: 'preflight', label: 'Pre-Flight' },
      { id: 'taxi', label: 'Taxi' },
      { id: 'takeoff', label: 'Takeoff' },
      { id: 'cruise', label: 'Cruise' },
      { id: 'landing', label: 'Landing' },
   ];

   return (
      <SimpleAutoComplete
         name={id}
         control={control}
         options={options}
         getOptionLabel={(x) => x.label}
         placeholder="Flight Phase"
         memoize
         saveAsKey />
   );
}
