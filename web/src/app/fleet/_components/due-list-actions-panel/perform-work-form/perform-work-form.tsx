'use client';

import AircraftUpdateTimesCondensed from '@app/_components/aircraft-update-times-condensed/aircraft-update-times-condensed';
import InspectorDropdown from '@app/_components/inspector-dropdown/inspector-dropdown';
import TechnicianDropdown from '@app/_components/technician-dropdown/technician-dropdown';
import { useState } from 'react';

interface Task {
   name: string;
   description: string | null;
   maintenance_type: string | null;
}

interface Aircraft {
   tail_number: string;
}

interface Form {
   work_description: string | null;
   performed_by: string | null;
   inspected_by: string | null;
   notes: string | null;
}

interface PerformWorkFormProps {
   task: Task;
   aircraft: Aircraft;
}
export default function PerformWorkForm({
   task,
   aircraft,
}: PerformWorkFormProps) {
   const [form] = useState({} as Form);

   if (!task || !aircraft) {
      return null;
   }

   const handleChange = (e) => {
      // Handle change logic here
      console.log(e.target.id, e.target.value);
   };

   return (
      <form className="form-column">
         <label>Description:</label>
         <p>{task.description}</p>

         <h4>Aircraft Utilization at Service</h4>
         <AircraftUpdateTimesCondensed
            aircraft={aircraft}
            onChange={handleChange}
         />

         <div className="form-row">
            <textarea
               id="work_description"
               onChange={handleChange}
               value={form.work_description}
               placeholder="Description of work performed"
               rows={5}
            />
         </div>

         <div className="form-row">
            <TechnicianDropdown
               id="performed_by"
               onChange={handleChange}
               value={form.performed_by}
            />
            <InspectorDropdown
               id="inspected_by"
               onChange={handleChange}
               value={form.inspected_by}
            />
         </div>

         <div className="form-row">
            <textarea
               id="notes"
               onChange={handleChange}
               value={form.notes}
               placeholder="Additional notes"
               rows={5}
            />
         </div>

         <div className="form-actions">
            <button type="submit" className="button">
               Save
            </button>
         </div>
      </form>
   );
}
