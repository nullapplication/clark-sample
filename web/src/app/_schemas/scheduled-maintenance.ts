import { z } from 'zod';

export type AddScheduledMaintenanceItemInput = z.infer<
   typeof addScheduledMaintenanceItemInputSchema
>;
export const addScheduledMaintenanceItemInputSchema = z.object({
   name: z.string(),
   maintenance_type: z.string().nullable(),
   aircraft_id: z.string(),
   ata_code: z.string().nullable(),
   regulation_authority: z.string().nullable(),
   description: z.string().nullable(),
   standard_operation_procedure: z.string().nullable(),
   estimated_downtime_hours: z.number().nullable(),
   estimated_cost: z.number().nullable(),
   physical_inventory_id: z.string(),
   task_number: z.string().nullable(),
   intervals: z.array(
      z.object({
         interval_type: z.string(),
         metric_type: z.string(),
         interval_value: z.number(),
         tolerance_value: z.number().nullable(),
         adjusted_interval_value: z.number().nullable(),
         last_performed_value: z.string().nullable(),
         last_performed_date: z.string().nullable(),
         recurrence_pattern: z.string(),
         recurrence_days: z.array(z.number()),
         recurrence_months: z.array(z.number()),
         recurrence_interval: z.number().nullable(),
      }),
   ),
});
