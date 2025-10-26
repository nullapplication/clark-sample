import { PrismaClient } from '@prisma/client';

export async function seedScheduledMaintenanceN721AFLeftLandingGear(
   prisma: PrismaClient,
   physicalInventoryId: string,
   aircraftId: string,
) {
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'clz3kqrty0008edrf1i5j2q6u' },
      update: {},
      create: {
         id: 'clz3kqrty0008edrf1i5j2q6u',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '33',
         name: 'Landing Gear Overhaul',
         task_number: 'FAL9X-32-001',
         description: 'Complete overhaul of landing gear assemblies',
         status: 'OVERDUE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 300,
         intervals: {
            create: [
               {
                  id: 'n721af003',
                  interval_type: 'TimeBased',
                  metric_type: 'MONTHS',
                  interval_value: 60,
                  tolerance_value: 0,
                  last_performed_value: 0,
                  last_performed_date: new Date('2023-11-05'),
               },
               {
                  id: 'n721af004',
                  interval_type: 'UsageBased',
                  metric_type: 'CYCLES',
                  interval_value: 10000,
                  tolerance_value: 0,
                  last_performed_value: 0,
                  last_performed_date: new Date('2024-06-10'),
               },
            ],
         },
      },
   });
}
