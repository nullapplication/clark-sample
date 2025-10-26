'use client';
import styles from './bases.module.css';
import { useEffect, useState, useCallback } from 'react';

export default function Bases({ onSelect }) {
   const [selectedBase, setSelectedBase] = useState(null);
   const [bases, setBases] = useState([]);

   const handleSelect = useCallback(
      (id) => {
         onSelect(id);
      },
      [onSelect],
   );

   useEffect(() => {
      async function fetchBases() {
         const url = `/api/bases`;
         const basesResponse = await fetch(url).then((res) => res.json());
         setBases(basesResponse.data);

         if (!selectedBase && basesResponse.data.length > 0) {
            setSelectedBase(basesResponse.data[0]?.id);
            handleSelect(basesResponse.data[0]?.id);
         }
      }
      fetchBases();
   }, [selectedBase, handleSelect]);

   const onClick = (id) => {
      setSelectedBase(id);
      handleSelect(id);
   };

   return (
      <>
         <p className="todo">
            Setup something to handle state of selected base and persist
            throughout app
         </p>
         <ul className={styles.main}>
            {bases.map((base) => (
               <li key={base.id}>
                  <button
                     onClick={onClick.bind(null, base.id)}
                     className={base.id === selectedBase ? styles.selected : ''}
                  >
                     {base.name}
                  </button>
               </li>
            ))}
         </ul>
      </>
   );
}
