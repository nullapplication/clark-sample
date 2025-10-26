import { PrismaClient } from '@prisma/client';

export async function seedScheduledMaintenanceN721AFEngine(
   prisma: PrismaClient,
   physicalInventoryId: string,
   aircraftId: string,
) {
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'clz3kr09o0009cvbn0j4i1p7v' },
      update: {},
      create: {
         id: 'clz3kr09o0009cvbn0j4i1p7v',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '24',
         name: 'Propeller Overhaul',
         task_number: 'FAL9X-32-001',
         description: 'Complete overhaul of propeller assemblies',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: [
               {
                  id: 'n721af012',
                  interval_type: 'UsageBased',
                  metric_type: 'FLIGHT_HOURS',
                  interval_value: 2000,
                  tolerance_value: 0,
                  last_performed_value: 0,
                  last_performed_date: new Date('2023-10-15'),
               },
            ],
         },
      },
   });
}
