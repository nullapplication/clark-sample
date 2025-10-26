'use client';
import styles from './event-linear-calendar.module.css';

export default function EventLinearCalendar({ onSelect }) {
   const today = new Date();
   const numberOfDaysForward = 30;
   const days = Array.from({ length: numberOfDaysForward }, (_, i) => {
      const day = new Date(today);
      day.setDate(day.getDate() + i);
      return {
         date: day,
         monthDay: day.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
         }),
         weekDay: day.toLocaleDateString('en-US', { weekday: 'short' }),
      };
   });
   return (
      <>
         <p className="todo">
            Display events on this calendar and also add onSelect event to be
            used for filtering of the due list on fleet summary
         </p>
         <div className={styles.main}>
            {days.map((day, i) => (
               <div
                  key={`day${i}`}
                  className={styles.day}
                  onClick={() => onSelect(day.date)}
               >
                  <span className={styles.monthDay}>{day.monthDay}</span>
                  <span className={styles.weekDay}>{day.weekDay}</span>
               </div>
            ))}
         </div>
      </>
   );
}
