'use client';

import React from 'react';
import { useState } from 'react';

interface UpdateAircraftTimesFormProps {
   aircraft: {
      tail_number: string;
      installed_physical_inventory_items: {
         name: string;
         number: string;
         current_usage: any;
      }[];
   };
}
export default function UpdateAircraftTimesForm({
   aircraft,
}: UpdateAircraftTimesFormProps) {
   const [form, setForm] = useState({
      ...aircraft,
   });

   const handleChange = (e) => {
      setForm({
         ...form,
         [e.target.id]: e.target.value,
      });
   };

   return (
      <form className="form-column">
         {form.installed_physical_inventory_items?.map((item, index) => (
            <React.Fragment key={index}>
               <h4>{item.name}</h4>
               {Object.keys(item.current_usage)?.map((usage, usageIndex) => (
                  <div key={usageIndex} className="form-row">
                     <label htmlFor="usage">{usage}</label>
                     <input
                        type="text"
                        id="new-usage"
                        value={item.current_usage[usage].value}
                        onChange={handleChange}
                     />
                  </div>
               ))}
            </React.Fragment>
         ))}

         <div className="form-actions">
            <button type="submit" className="button">
               Update
            </button>
         </div>
      </form>
   );
}
