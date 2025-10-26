import { PrismaClient } from '@prisma/client';

export async function seedScheduledMaintenanceN106EXLeftEngine(
   prisma: PrismaClient,
   physicalInventoryId: string,
   aircraftId: string,
) {
   console.log('Seeding scheduled maintenance for Left Engine of N106EX');
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm006' },
      update: {},
      create: {
         id: 'sm006',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '72',
         name: 'Hot Section Inspection',
         task_number: 'TFE731-72-002',
         description:
            'Detailed inspection of combustion chamber and turbine section',
         status: 'OVERDUE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 40,
         estimated_cost: 25000,
         intervals: {
            create: {
               id: 'smi006',
               interval_type: 'UsageBased',
               metric_type: 'FLIGHT_HOURS',
               interval_value: 1500,
               tolerance_value: 50,
               last_performed_value: 0,
               last_performed_date: new Date('2023-01-15'),
            },
         },
      },
   });

   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm012' },
      update: {},
      create: {
         id: 'sm012',
         physical_inventory_id: 'cm7kmf2000s08l8d9hj4v7n',
         aircraft_id: 'cm6r01l3502dmj0nu3k4wgj78',
         ata_code: '72',
         name: 'Engine Cycle Inspection - Left',
         task_number: 'TFE731-72-CYC1',
         description: 'Inspection based on engine cycles for left engine',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 6,
         estimated_cost: 1200,
      },
   });
}
