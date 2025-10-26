import { PrismaClient } from '@prisma/client';

export async function seedScheduledMaintenanceN106EXRightEngine(
   prisma: PrismaClient,
   physicalInventoryId: string,
   aircraftId: string,
) {
   console.log('Seeding scheduled maintenance for Right Engine of N106EX');
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm004' },
      update: {},
      create: {
         id: 'sm004',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '72',
         name: 'Engine Oil Change - Right',
         task_number: 'TFE731-72-001R',
         description: 'Change engine oil and filter for right engine',
         status: 'DUESOON',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 500,
         intervals: {
            create: {
               id: 'smi004',
               interval_type: 'UsageBased',
               metric_type: 'FLIGHT_HOURS',
               interval_value: 50,
               tolerance_value: 5,
               last_performed_value: 260,
               last_performed_date: new Date('2024-06-10'),
            },
         },
      },
   });

   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm007' },
      update: {},
      create: {
         id: 'sm007',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '72',
         name: 'Compressor Blade Inspection',
         task_number: 'TFE731-72-003',
         description: 'Visual inspection of compressor blades for FOD damage',
         status: 'OVERDUE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 800,
         intervals: {
            create: {
               id: 'smi007',
               interval_type: 'UsageBased',
               metric_type: 'FLIGHT_HOURS',
               interval_value: 100,
               tolerance_value: 10,
               last_performed_value: 350,
               last_performed_date: new Date('2024-01-10'),
            },
         },
      },
   });

   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm013' },
      update: {},
      create: {
         id: 'sm013',
         physical_inventory_id: 'cm7kmf3000t08l8ixvnxvxn',
         aircraft_id: 'cm6r01l3502dmj0nu3k4wgj78',
         ata_code: '72',
         name: 'Engine Cycle Inspection - Right',
         task_number: 'TFE731-72-CYC2',
         description: 'Inspection based on engine cycles for right engine',
         status: 'DUESOON',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 6,
         estimated_cost: 1200,
      },
   });
}
