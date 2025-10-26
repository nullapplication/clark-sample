import styles from './list-aircraft.module.css';

// todo: add paging and info
export default function ListAircraft({ envelopedData }) {
   const aircraft = envelopedData.data;

   return (
      <div className={styles.container}>
         {aircraft.map((a) => (
            <div className={styles.aircraft} key={a.tail_number}>
               <h2>
                  {a.tail_number} ({a.status})
               </h2>
               <p>
                  {a.manufacturer} {a.model}
               </p>
               <p>Year: {a.year_of_manufacture}</p>
               <p>Serial: {a.serial_number}</p>
               <p>
                  {a.total_flight_hours} FH, {a.engine_hours} EH,{' '}
                  {a.engine_cycles} EC, {a.landings} L
               </p>
               <p>
                  Last Flight Date:{' '}
                  {new Date(a.last_flight_date)?.toLocaleDateString()}
               </p>
            </div>
         ))}
      </div>
   );
}
