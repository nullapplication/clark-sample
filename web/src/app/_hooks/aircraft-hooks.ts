import useSWR from 'swr';
import { emptyList } from '@utils/general-utils';

export function useAircraftList() {
   const { data, isLoading } = useSWR('aircraft', () =>
      fetch('/api/aircraft')
         .then((res) => res.json())
         .then((pld) => pld.data),
   );

   return {
      aircraftList: data ?? emptyList(),
      aircraftListLoading: isLoading,
   };
}

export function useAircraftDetail(tailNumber: string | undefined) {
   const { data, isLoading } = useSWR(
      tailNumber ? `aircraft-${tailNumber}` : null,
      () =>
         fetch(`/api/aircraft/${tailNumber}`)
            .then((res) => res.json())
            .then((pld) => pld),
   );

   return {
      aircraft: data,
      aircraftLoading: isLoading,
   };
}
