import { PrismaClient } from '@prisma/client';

export async function seedScheduledMaintenanceN721AFAirframe(
   prisma: PrismaClient,
   physicalInventoryId: string,
   aircraftId: string,
) {
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'clz3kq43w0006ploi3g7l4s4s' },
      update: {},
      create: {
         id: 'clz3kq43w0006ploi3g7l4s4s',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '72',
         name: '100-Hour Inspection',
         task_number: 'FAL9X-05-002',
         description:
            'Complete 100-hour inspection per manufacturer requirements',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 40,
         estimated_cost: 10000,
         intervals: {
            create: [
               {
                  id: 'n721af001',
                  interval_type: 'UsageBased',
                  metric_type: 'FLIGHT_HOURS',
                  interval_value: 100,
                  tolerance_value: 0,
                  last_performed_value: 250,
                  last_performed_date: new Date('2024-05-01'),
               },
            ],
         },
      },
   });

   await prisma.scheduledMaintenance.upsert({
      where: { id: 'clz3kqfgh0007qwas2h6k3r5t' },
      update: {},
      create: {
         id: 'clz3kqfgh0007qwas2h6k3r5t',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '05',
         name: 'Annual Inspection',
         task_number: 'FAL9X-05-001',
         description:
            'Complete annual inspection per manufacturer requirements',
         status: 'OVERDUE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 1800,
         intervals: {
            create: [
               {
                  id: 'n721af002',
                  interval_type: 'TimeBased',
                  metric_type: 'MONTHS',
                  interval_value: 12,
                  tolerance_value: 0,
                  last_performed_value: 0,
                  last_performed_date: new Date('2020-08-15'),
               },
            ],
         },
      },
   });
}
