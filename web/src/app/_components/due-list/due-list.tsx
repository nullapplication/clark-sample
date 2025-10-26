import DueListCard from '../due-list-card/due-list-card';
import NoDataFound from '@ui/no-data-found/no-data-found';
import styles from './due-list.module.css';
import { useEffect, useState } from 'react';

interface DueListProps {
   baseOfOperationId: string | null;
   tailNumber?: string | null;
}
export default function DueList({
   baseOfOperationId,
   tailNumber,
}: DueListProps) {
   const [dueList, setDueList] = useState([]);
   useEffect(() => {
      async function fetchDueList() {
         let url;
         // if (tailNumber) {
         //    url = `api/aircraft/${tailNumber}/due-list`;
         // }
         if (baseOfOperationId) {
            url = `api/fleet/due-list?base_of_operation_id=${baseOfOperationId}`;
         } else {
            url = `api/fleet/due-list`;
         }
         const dueListResponse = await fetch(url).then((res) => res.json());
         setDueList(dueListResponse.data);
      }
      fetchDueList();
   }, [tailNumber, baseOfOperationId]);

   return (
      <div className={styles.main}>
         {dueList?.map((task) => (
            <DueListCard task={task} key={task.id} tailNumber={tailNumber} />
         ))}
         <NoDataFound data={dueList} dataNameOnly="maintenance tasks" />
      </div>
   );
}
