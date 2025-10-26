import { emptyList } from '@app/_utils/general-utils';
import useSWR from 'swr';

export function useAtaCodes() {
   const { data, isLoading } = useSWR('ata-codes', () =>
      fetch('/api/ata-codes')
         .then((res) => res.json())
         .then((pld) => pld.data),
   );

   return {
      ataCodesList: data ?? emptyList(),
      ataCodesLoading: isLoading,
   };
}
