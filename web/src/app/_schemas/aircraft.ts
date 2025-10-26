import { z } from 'zod';

export type AircraftSimpleListItem = z.infer<typeof aircraftSimpleListItemSchema>;
export const aircraftSimpleListItemSchema = z.object({
   id: z.string(),
   tail_number: z.string(),
});