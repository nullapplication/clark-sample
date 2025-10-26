import { PrismaClient } from '@prisma/client';

export async function seedScheduledMaintenanceN450FXApu(
   prisma: PrismaClient,
   physicalInventoryId: string,
   aircraftId: string,
) {
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'N450FX-maint8' },
      update: {},
      create: {
         id: 'N450FX-maint8',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         name: 'Overhaul APU',
         description: 'Complete overhaul of APU',
         status: 'ACTIVE',
         estimated_cost: 200,
         intervals: {
            create: [
               {
                  id: 'N450FX-intvl8',
                  interval_type: 'UsageBased',
                  metric_type: 'FLIGHT_HOURS',
                  interval_value: 6000,
                  last_performed_date: new Date('2024-02-15'),
               },
            ],
         },
      },
   });
}
