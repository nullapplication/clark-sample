import { PrismaClient } from '@prisma/client';

export async function seedScheduledMaintenanceN450FXLeftEngine(
   prisma: PrismaClient,
   physicalInventoryId: string,
   aircraftId: string,
) {
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'N450FX-maint3' },
      update: {},
      create: {
         id: 'N450FX-maint3',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         name: 'Engine Overhaul',
         description: 'Inspect both engines every 2,500 cycles',
         status: 'ACTIVE',
         estimated_cost: 8000,
         intervals: {
            create: [
               {
                  id: 'N450FX-intvl3',
                  interval_type: 'UsageBased',
                  metric_type: 'CYCLES',
                  interval_value: 2500,
                  last_performed_date: new Date('2023-10-01'),
               },
            ],
         },
      },
   });
}
