import React from 'react';
import styles from './aircraft-update-times-condensed.module.css';

export default function AircraftUpdateTimesCondensed({ aircraft, onChange }) {
   return (
      <>
         {aircraft.installed_physical_inventory_items?.map((item, index) => (
            <div key={index} className={styles.item}>
               <h5 className={styles.itemTitle}>{item.name}:</h5>
               {Object.keys(item.current_usage)?.map((usage, usageIndex) => (
                  <span key={usageIndex} className={styles.usage}>
                     <label>{usage}</label>
                     <input
                        type="text"
                        id="new-usage"
                        value={item.current_usage[usage].value}
                        onChange={onChange}
                        className={styles.input}
                     />{' '}
                  </span>
               ))}
            </div>
         ))}
      </>
   );
}
