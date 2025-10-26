import { PrismaClient } from '@prisma/client';

export async function seedScheduledMaintenanceN450FXRightLandingGear(
   prisma: PrismaClient,
   physicalInventoryId: string,
   aircraftId: string,
) {
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'N450FX-maint6' },
      update: {},
      create: {
         id: 'N450FX-maint6',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         name: 'Landing Gear Overhaul',
         description: 'Complete overhaul of landing gear assemblies',
         status: 'ACTIVE',
         estimated_cost: 15000,
         intervals: {
            create: [
               {
                  id: 'N450FX-intvl6',
                  interval_type: 'TimeBased',
                  metric_type: 'MONTHS',
                  interval_value: 60,
                  last_performed_date: new Date('2024-02-15'),
               },
            ],
         },
      },
   });
}
