import { PrismaClient } from '@prisma/client';

export async function seedScheduledMaintenanceN721AFNoseLandingGear(
   prisma: PrismaClient,
   physicalInventoryId: string,
   aircraftId: string,
) {
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'clzrtp7p70003rfv4tgb5yhn6' },
      update: {},
      create: {
         id: 'clzrtp7p70003rfv4tgb5yhn6',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '24',
         name: 'Landing Gear Overhaul',
         task_number: 'FAL9X-32-001',
         description: 'Complete overhaul of nose landing gear assemblies',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: [
               {
                  id: 'n721af009',
                  interval_type: 'TimeBased',
                  metric_type: 'MONTHS',
                  interval_value: 60,
                  tolerance_value: 0,
                  last_performed_value: 0,
                  last_performed_date: new Date('2024-02-15'),
               },
               {
                  id: 'n721af010',
                  interval_type: 'UsageBased',
                  metric_type: 'CYCLES',
                  interval_value: 10000,
                  tolerance_value: 0,
                  last_performed_value: 0,
                  last_performed_date: new Date('2023-11-20'),
               },
            ],
         },
      },
   });
}
