import { PrismaClient } from '@prisma/client';

export async function seedScheduledMaintenanceN721AFRightLandingGear(
   prisma: PrismaClient,
   physicalInventoryId: string,
   aircraftId: string,
) {
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'clzrtp6n80002edc3rfv4tgb5' },
      update: {},
      create: {
         id: 'clzrtp6n80002edc3rfv4tgb5',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '35',
         name: 'Landing Gear Overhaul',
         task_number: 'FAL9X-32-001',
         description: 'Complete overhaul of right landing gear assemblies',
         status: 'OVERDUE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: [
               {
                  id: 'n721af005',
                  interval_type: 'TimeBased',
                  metric_type: 'MONTHS',
                  interval_value: 60,
                  tolerance_value: 0,
                  last_performed_value: 0,
                  last_performed_date: new Date('2023-12-10'),
               },
               {
                  id: 'n721af006',
                  interval_type: 'UsageBased',
                  metric_type: 'CYCLES',
                  interval_value: 10000,
                  tolerance_value: 0,
                  last_performed_value: 0,
                  last_performed_date: new Date('2023-01-15'),
               },
            ],
         },
      },
   });
}
