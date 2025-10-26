'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import AircraftDropdown from '../aircraft-dropdown/aircraft-dropdown';
import {
   CreateWorkOrderInput,
   createWorkOrderInputSchema,
} from '@app/_schemas/work-order';
import WorkOrderStatusDropdown from '../work-order-status-dropdown/work-order-status-dropdown';
import WorkOrderPriorityDropdown from '../work-order-priority-dropdown/work-order-priority-dropdown';
import BaseOfOperationDropdown from '../bases-dropdown/bases-dropdown';
import { SimpleDatePicker } from '../ui/simple-date-picker/simple-date-picker';
import styles from './create-work-order-form.module.css';

export default function CreateWorkOrderForm({ aircraft }) {
   const { control, setValue, watch, register, handleSubmit } =
      useForm<CreateWorkOrderInput>({
         resolver: zodResolver(createWorkOrderInputSchema),
         defaultValues: {
            aircraft_id: aircraft?.id,
            base_of_operation_id: aircraft?.base_of_operation_id,
            work_order_number: '',
            description: '',
            priority: 'medium',
            due_date: null,
            status: 'open',
            line_items: [],
         },
      });

   const [lineItemDescription, setLineItemDescription] = useState('');
   const [lineItemEstimatedHours, setLineItemEstimatedHours] = useState('');
   const [lineItemLaborCost, setLineItemLaborCost] = useState('');
   const [lineItemPartsCost, setLineItemPartsCost] = useState('');
   const [lineItemScheduledMaintenanceId, setLineItemScheduledMaintenanceId] =
      useState(null);
   const [
      lineItemUnscheduledMaintenanceId,
      setLineItemUnscheduledMaintenanceId,
   ] = useState(null);

   const onSubmit = (data: CreateWorkOrderInput) => {
      console.log('Form submitted:', data);
   };

   const addLineItem = () => {
      if (!lineItemDescription) {
         alert('Please enter a description for the line item.');
         return;
      }

      const estimatedHours = lineItemEstimatedHours
         ? Number(lineItemEstimatedHours)
         : 0;
      const laborCost = lineItemLaborCost ? Number(lineItemLaborCost) : 0;
      const partsCost = lineItemPartsCost ? Number(lineItemPartsCost) : 0;
      const totalCost = laborCost + partsCost;

      setValue('line_items', [
         ...watch('line_items'),
         {
            id: crypto.randomUUID(),
            scheduled_maintenance_id: lineItemScheduledMaintenanceId,
            unscheduled_maintenance_id: lineItemUnscheduledMaintenanceId,
            description: lineItemDescription,
            estimated_hours: estimatedHours,
            labor_cost: laborCost,
            parts_cost: partsCost,
            total_cost: totalCost,
         },
      ]);

      setLineItemDescription('');
      setLineItemEstimatedHours('');
      setLineItemLaborCost('');
      setLineItemPartsCost('');
      setLineItemScheduledMaintenanceId('');
      setLineItemUnscheduledMaintenanceId('');
   };

   const formValues = watch();

   useEffect(() => {
      if (aircraft) {
         setValue('aircraft_id', aircraft.id);
         setValue('base_of_operation_id', aircraft.base_of_operation_id);
      }
   }, [aircraft, setValue]);

   return (
      <form className="form-column" onSubmit={handleSubmit(onSubmit)}>
         <pre>{JSON.stringify(formValues, null, 2)}</pre>

         <div className="form-row">
            <input
               type="text"
               id="work_order_number"
               placeholder="Work Order Number"
               {...register('work_order_number')}
            />
         </div>

         <div className="form-row">
            <textarea
               id="description"
               placeholder="Description"
               {...register('description')}
               rows={5}
            />
         </div>

         <div className="form-row">
            <AircraftDropdown id="aircraft_id" control={control} />
            <BaseOfOperationDropdown
               id="base_of_operation_id"
               control={control}
            />
            <WorkOrderStatusDropdown id="status" control={control} />
            <WorkOrderPriorityDropdown id="priority" control={control} />
         </div>

         <SimpleDatePicker control={control} name="due_date" label="Due Date" />

         <h4>Line Items</h4>
         {formValues.line_items.map((lineItem, index) => (
            <div key={lineItem.id} className={styles.lineItem}>
               <div className="form-row">
                  <textarea
                     placeholder="Description"
                     {...register(`line_items.${index}.description`)}
                  />
               </div>
               <div className="form-row">
                  <input
                     type="number"
                     placeholder="Estimated Hours"
                     {...register(`line_items.${index}.estimated_hours`)}
                  />
                  <input
                     type="number"
                     placeholder="Labor Cost"
                     {...register(`line_items.${index}.labor_cost`)}
                  />
                  <input
                     type="number"
                     placeholder="Parts Cost"
                     {...register(`line_items.${index}.parts_cost`)}
                  />
               </div>
            </div>
         ))}

         <div className="form-row">
            <textarea
               placeholder="Description"
               value={lineItemDescription}
               onChange={(e) => setLineItemDescription(e.target.value)}
               required
            />
         </div>

         <div className="form-row">
            <input
               type="number"
               placeholder="Estimated Hours"
               value={lineItemEstimatedHours}
               onChange={(e) => setLineItemEstimatedHours(e.target.value)}
            />
            <input
               type="number"
               placeholder="Labor Cost"
               value={lineItemLaborCost}
               onChange={(e) => setLineItemLaborCost(e.target.value)}
            />
            <input
               type="number"
               placeholder="Parts Cost"
               value={lineItemPartsCost}
               onChange={(e) => setLineItemPartsCost(e.target.value)}
            />
            {/* todo: Add dropdowns for scheduled and unscheduled maintenance */}
         </div>

         {/* Button to add a new line item */}
         <button type="button" onClick={addLineItem} className="button">
            Add Line Item
         </button>

         <div className="form-actions">
            <button type="submit" className="button">
               Create Work Order
            </button>
         </div>
      </form>
   );
}
