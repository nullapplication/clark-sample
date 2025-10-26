import { PrismaClient } from '@prisma/client';

export async function seedScheduledMaintenanceN721AFAvionics(
   prisma: PrismaClient,
   physicalInventoryId: string,
   aircraftId: string,
) {
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'clzrtp4k10000qaz1xsw2edc3' },
      update: {},
      create: {
         id: 'clzrtp4k10000qaz1xsw2edc3',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '24',
         name: 'Avionics Software Upgrade',
         task_number: 'FAL9X-32-001',
         description: 'Software upgrade for avionics systems',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: [
               {
                  id: 'n721af011',
                  interval_type: 'TimeBased',
                  metric_type: 'MONTHS',
                  interval_value: 12,
                  tolerance_value: 0,
                  last_performed_value: 0,
                  last_performed_date: new Date('2024-03-20'),
               },
            ],
         },
      },
   });
}
