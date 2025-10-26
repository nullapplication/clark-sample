'use client';

import AircraftDropdown from '@app/_components/aircraft-dropdown/aircraft-dropdown';
import AtaCodeDropdown from '@app/_components/ata-code-dropdown/ata-code-dropdown';
import RegulationAuthorityDropdown from '@app/_components/regulation-authority-dropdown/regulation-authority-dropdown';
import MaintenanceTypeDropdown from './_components/maintenance-type-dropdown/maintenance-type-dropdown';
import { useForm } from 'react-hook-form';
import {
   AddScheduledMaintenanceItemInput,
   addScheduledMaintenanceItemInputSchema,
} from '@app/_schemas/scheduled-maintenance';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';

// interface Form {
//    name: string;
//    maintenance_type: string | null;
//    aircraft_id: string;
//    ata_code: string | null;
//    regulation_authority: string | null;
//    description: string | null;
//    standard_operation_procedure: string | null;
//    intervals: {
//       interval_type: string;
//       metric_type: string;
//       interval_value: number;
//       tolerance_value: number | null;
//       adjusted_interval_value: number | null;
//       last_performed_value: string | null;
//       last_performed_date: string | null;
//       recurrence_pattern: string;
//       recurrence_days: number[];
//       recurrence_months: number[];
//       recurrence_interval: number | null;
//    }[];
// }
interface AddTaskFormProps {
   aircraft: {
      id: string;
      tail_number: string;
   };
}
export default function AddTaskForm({ aircraft }: AddTaskFormProps) {
   const { control, setValue, watch, register, handleSubmit } =
      useForm<AddScheduledMaintenanceItemInput>({
         resolver: zodResolver(addScheduledMaintenanceItemInputSchema),
      });

   const onSubmit = (data: AddScheduledMaintenanceItemInput) => {
      console.log('Form submitted:', data);
   };

   const formValues = watch();

   useEffect(() => {
      if (aircraft) {
         setValue('aircraft_id', aircraft.id);
      }
   }, [aircraft, setValue]);

   return (
      <>
         <form className="form-column" onSubmit={handleSubmit(onSubmit)}>
            <h4>General</h4>
            <pre>{JSON.stringify(formValues, null, 2)}</pre>

            <div className="form-row">
               <AircraftDropdown
                  control={control}
                  id="aircraft_id"
                  {...register('aircraft_id')}
               />

               <MaintenanceTypeDropdown
                  id="maintenance_type"
                  control={control}
                  {...register('maintenance_type')}
               />

               <AtaCodeDropdown
                  id="ata_code"
                  control={control}
                  {...register('ata_code')}
               />

               <RegulationAuthorityDropdown
                  id="regulation_authority"
                  control={control}
                  {...register('regulation_authority')}
               />
            </div>

            <div className="form-row">
               <input
                  type="text"
                  id="name"
                  placeholder="Title"
                  className="full-width"
                  {...register('name')}
               />
            </div>

            <div className="form-row">
               <textarea
                  id="description"
                  placeholder="Description"
                  className="full-width"
                  rows={5}
                  {...register('description')}
               />
            </div>

            <div className="form-row">
               <textarea
                  id="standard_operation_procedure"
                  placeholder="Standard Operation Procedure"
                  className="full-width"
                  rows={5}
                  {...register('standard_operation_procedure')}
               />
            </div>

            <label>Due By</label>
            <span className="todo">
               Need to decide how to make this dynamic based on what the
               aircraft tracks
            </span>
            <label>Intervals</label>
            <span className="todo">
               Need to decide how to make this dynamic based on what the
               aircraft tracks
            </span>
            <label>Tolerance</label>
            <span className="todo">
               Need to decide how to make this dynamic based on what the
               aircraft tracks
            </span>

            <h4>Cost Estimate</h4>
            <label>Labor</label>
            <div className="form-row">
               <input
                  type="number"
                  id="estimated_downtime_hours"
                  placeholder="Estimated Downtime (Hours)"
                  {...register('estimated_downtime_hours')}
               />

               <input
                  type="number"
                  id="estimated_cost"
                  placeholder="Estimated Cost"
                  {...register('estimated_cost')}
               />
            </div>

            <label>Associated Parts</label>
            <div className="form-row">
               <select id="needed_parts">
                  <option value="none">None</option>
                  <option value="1">Flux Capacitor</option>
               </select>
            </div>

            <label>Associated Documents</label>
            <span className="todo">
               Attach documents functionality to be added
            </span>

            <label>Task Checklist</label>
            <div className="form-row">
               <input
                  type="text"
                  id="checklist_item"
                  placeholder="Checklist Item Title"
                  className="full-width"
               />
            </div>
            <div className="form-row">
               <textarea
                  id="checklist_item_description"
                  placeholder="Checklist Item Description"
                  className="full-width"
                  rows={3}
               />
            </div>
            <button type="button" className="link">
               Add Checklist Item
            </button>

            <div className="form-actions">
               <button type="submit" className="button">
                  Add Scheduled Task
               </button>
            </div>
         </form>
      </>
   );
}
