import { SimpleAutoComplete } from '@ui/simple-autocomplete/simple-autocomplete';
import { useAircraftList } from '@app/_hooks/aircraft-hooks';

export default function AircraftDropdown({ id, control }) {
   const { aircraftList: aircraft } = useAircraftList();

   return (
      <SimpleAutoComplete
         name={id}
         control={control}
         options={aircraft}
         getOptionLabel={(x) => x.tail_number}
         placeholder="Aircraft"
         memoize
         saveAsKey
      />
   );
}
