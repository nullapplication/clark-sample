import { SimpleAutoComplete } from '@ui/simple-autocomplete/simple-autocomplete';
import { useAtaCodes } from '@app/_hooks/ata-codes-hooks';

export default function AtaCodeDropdown({ id, control }) {
   const { ataCodesList } = useAtaCodes();

   return (
      <SimpleAutoComplete
         name={id}
         control={control}
         options={ataCodesList}
         getOptionKey={(x) => x.code ?? x}
         getOptionLabel={(x) => x.code}
         placeholder="ATA Code"
         memoize
         saveAsKey
      />
   );
}
