import useSWR from 'swr';

export function useDueList(dueListId: string | undefined) {
   const { data, isLoading } = useSWR(
      dueListId ? `due-list-${dueListId}` : null,
      () =>
         fetch(`/api/fleet/due-list/${dueListId}`)
            .then((res) => res.json())
            .then((pld) => pld),
   );

   return {
      task: data,
      taskLoading: isLoading,
   };
}
