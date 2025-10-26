'use client';

import AircraftDropdown from '@app/_components/aircraft-dropdown/aircraft-dropdown';
import SeverityDropdown from './_components/severity-dropdown/severity-dropdown';
import { zodResolver } from '@hookform/resolvers/zod';
import FlightPhaseDropdown from './_components/flight-phase-dropdown/flight-phase-dropdown';
import UnscheduledMaintenanceStatusDropdown from './_components/unscheduled-maintenance-status-dropdown/unscheduled-maintenance-status-dropdown';
import {
   ReportDiscrepancyInput,
   reportDiscrepancyInputSchema,
} from '@app/_schemas/unscheduled-maintenance';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import AtaCodeDropdown from '@app/_components/ata-code-dropdown/ata-code-dropdown';
import { SimpleDatePicker } from '@ui/simple-date-picker/simple-date-picker';

export default function ReportDiscrepancyForm({ aircraft }) {
   const { control, setValue, watch, register, handleSubmit } =
      useForm<ReportDiscrepancyInput>({
         resolver: zodResolver(reportDiscrepancyInputSchema),
         defaultValues: {
            aircraft_id: aircraft?.id,
            title: '',
            description: '',
            ata_code: null,
            severity: undefined,
            flight_phase: undefined,
            status: 'open',
            reported_by: '',
            reported_date: new Date(),
            safety_impact: false,
            repeat_issue: false,
            current_time: null,
            current_hours: null,
            current_cycles: null,
            current_landings: null,
            deferred_until: null,
            resolved_by: null,
            resolved_date: null,
            corrective_action: '',
         },
      });

   const onSubmit = (data: ReportDiscrepancyInput) => {
      console.log('Form submitted:', data);
   };

   const formValues = watch();

   useEffect(() => {
      if (aircraft) {
         setValue('aircraft_id', aircraft.id);
      }
   }, [aircraft, setValue]);

   return (
      <form className="form-column" onSubmit={handleSubmit(onSubmit)}>
         <h4>General</h4>
         <pre>{JSON.stringify(formValues, null, 2)}</pre>

         <div className="form-row">
            <AircraftDropdown id="aircraft_id" control={control} />

            <SeverityDropdown id="severity" control={control} />

            <FlightPhaseDropdown id="flight_phase" control={control} />

            <UnscheduledMaintenanceStatusDropdown
               id="status"
               control={control}
            />
         </div>
         <div className="form-row">
            <input type="text" {...register('title')} placeholder="Title" />
         </div>
         <div className="form-row">
            <textarea
               {...register('description')}
               placeholder="Description"
               rows={5}
            />
         </div>

         <div className="form-row">
            <input
               type="text"
               {...register('reported_by')}
               placeholder="Reported By"
            />

            <SimpleDatePicker
               control={control}
               name="reported_date"
               label="Reported Date"
            />

            <AtaCodeDropdown id="ata_code" control={control} />
         </div>

         <div className="form-row">
            <label className="checkbox" htmlFor="safety_impact">
               <input
                  type="checkbox"
                  id="safety_impact"
                  {...register('safety_impact')}
               ></input>
               The discrepancy impacts safety
            </label>
         </div>

         <div className="form-row">
            <label className="checkbox" htmlFor="repeat_issue">
               <input
                  type="checkbox"
                  id="repeat_issue"
                  {...register('repeat_issue')}
               ></input>
               The discrepancy is a repeat issue
            </label>
         </div>

         <h4>Current Time at Reporting</h4>
         <div className="form-row">
            <input
               type="text"
               {...register('current_time')}
               placeholder="Reported Date"
               className="full-width"
            />

            <input
               type="number"
               {...register('current_hours')}
               placeholder="Hours"
               className="full-width"
            />

            <input
               type="number"
               {...register('current_cycles')}
               placeholder="Cycles"
               className="full-width"
            />

            <input
               type="number"
               {...register('current_landings')}
               placeholder="Landings"
               className="full-width"
            />
         </div>

         <h4>Defer Maintenance</h4>
         <div className="form-row">
            <input
               type="text"
               {...register('deferred_until')}
               placeholder="Deferred Date"
            />
         </div>

         <h4>Resolution</h4>
         <div className="form-row">
            <input
               type="text"
               {...register('resolved_by')}
               placeholder="Resolved By"
            />

            <SimpleDatePicker
               control={control}
               name="resolved_date"
               label="Resolved Date"
            />
         </div>
         <div className="form-row">
            <textarea
               {...register('corrective_action')}
               placeholder="Corrective Action"
               rows={5}
            />
         </div>

         <div className="form-actions">
            <button type="submit" className="button">
               Submit Discrepancy
            </button>
         </div>
      </form>
   );
}
