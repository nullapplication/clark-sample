import useSWR from 'swr';
import { emptyList } from '@utils/general-utils';

export function useBaseOfOperationsList() {
   const { data, isLoading } = useSWR('bases', () =>
      fetch('/api/bases')
         .then((res) => res.json())
         .then((pld) => pld.data),
   );

   return {
      basesList: data ?? emptyList(),
      basesListLoading: isLoading,
   };
}
