import { z } from 'zod';

export type ReportDiscrepancyInput = z.infer<
   typeof reportDiscrepancyInputSchema
>;
export const reportDiscrepancyInputSchema = z.object({
   aircraft_id: z.string(),
   title: z.string(),
   description: z.string(),
   ata_code: z.string().nullable(),
   severity: z.enum(['low', 'medium', 'high', 'grounded']),
   flight_phase: z.enum(['preflight', 'taxi', 'takeoff', 'cruise', 'landing']),
   status: z.enum([
      'open',
      'in_progress',
      'deferred',
      'closed',
      'non_compliant',
   ]),
   reported_by: z.string(),
   reported_date: z.date(),
   safety_impact: z.boolean(),
   repeat_issue: z.boolean(),
   current_time: z.number(),
   current_hours: z.number(),
   current_cycles: z.number(),
   current_landings: z.number(),
   deferred_until: z.date().nullable(),
   resolved_by: z.string().nullable(),
   resolved_date: z.date().nullable(),
   corrective_action: z.string().nullable(),
});
