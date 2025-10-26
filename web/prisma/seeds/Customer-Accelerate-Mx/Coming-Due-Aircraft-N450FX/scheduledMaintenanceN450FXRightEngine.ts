import { PrismaClient } from '@prisma/client';

export async function seedScheduledMaintenanceN450FXRightEngine(
   prisma: PrismaClient,
   physicalInventoryId: string,
   aircraftId: string,
) {
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'N450FX-maint4' },
      update: {},
      create: {
         id: 'N450FX-maint4',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         name: 'Engine Overhaul',
         description: 'Inspect engines every 2,500 cycles',
         status: 'ACTIVE',
         estimated_cost: 8000,
         intervals: {
            create: [
               {
                  id: 'N450FX-intvl4',
                  interval_type: 'UsageBased',
                  metric_type: 'CYCLES',
                  interval_value: 2500,
                  last_performed_date: new Date('2024-02-15'),
               },
            ],
         },
      },
   });
}
