import { PrismaClient } from '@prisma/client';

export async function seedScheduledMaintenanceN450FXAirframe(
   prisma: PrismaClient,
   physicalInventoryId: string,
   aircraftId: string,
) {
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'N450FX-maint1' },
      update: {},
      create: {
         id: 'N450FX-maint1',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         name: 'A Check',
         description: 'Perform A check every 750 flight hours',
         status: 'ACTIVE',
         estimated_cost: 5000,
         intervals: {
            create: [
               {
                  id: 'N450FX-intvl1',
                  interval_type: 'UsageBased',
                  metric_type: 'FLIGHT_HOURS',
                  interval_value: 750,
                  last_performed_date: new Date('2024-01-01'),
               },
            ],
         },
      },
   });

   await prisma.scheduledMaintenance.upsert({
      where: { id: 'N450FX-maint2' },
      update: {},
      create: {
         id: 'N450FX-maint2',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         name: 'C Check',
         description: 'Perform C check every 4,000 flight hours',
         status: 'ACTIVE',
         estimated_cost: 15000,
         intervals: {
            create: [
               {
                  id: 'N450FX-intvl2',
                  interval_type: 'UsageBased',
                  metric_type: 'FLIGHT_HOURS',
                  interval_value: 4000,
                  last_performed_date: new Date('2024-01-01'),
               },
            ],
         },
      },
   });
}
