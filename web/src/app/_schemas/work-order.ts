import { z } from 'zod';

export type CreateWorkOrderInput = z.infer<typeof createWorkOrderInputSchema>;
export const createWorkOrderInputSchema = z.object({
   aircraft_id: z.string(),
   base_of_operation_id: z.string(),
   work_order_number: z.string(),
   description: z.string().nullable(),
   status: z.enum(['open', 'in_progress', 'completed', 'rejected']),
   priority: z.enum(['low', 'medium', 'high', 'critical']),
   due_date: z.date().nullable(),
   line_items: z.array(
      z.object({
         id: z.string(),
         scheduled_maintenance_id: z.string().nullable(),
         unscheduled_maintenance_id: z.string().nullable(),
         description: z.string(),
         estimated_hours: z.number().nullable(),
         labor_cost: z.number().nullable(),
         parts_cost: z.number().nullable(),
         total_cost: z.number().nullable(),
      }),
   ),
});
