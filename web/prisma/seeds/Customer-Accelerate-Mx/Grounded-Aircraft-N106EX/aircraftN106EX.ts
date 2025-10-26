import { PrismaClient } from '@prisma/client';
import { seedPhysicalInventoryN106EX } from './physicalInventoryN106EX';
import { seedWorkOrdersN106EX } from './workOrdersN106EX';

export async function seedAircraftN106EX(
   prisma: PrismaClient,
   customerId: string,
   baseOfOperationId: string,
) {
   console.log('Upserting N106EX aircraft...');
   const aircraft = await prisma.aircraft.upsert({
      where: { id: 'cm6r01l3502dmj0nu3k4wgj78' },
      update: {
         status: 'GROUNDED',
         image_url:
            'https://accelerate-mx-public.s3.us-east-1.amazonaws.com/G-EGVO Dassault Falcon 900LX.png',
         base_of_operation_id: baseOfOperationId,
         is_accelerated: true,
         status_reason: 'Overdue maintenance',
      },
      create: {
         id: 'cm6r01l3502dmj0nu3k4wgj78',
         base_of_operation_id: baseOfOperationId,
         tail_number: 'N106EX',
         image_url:
            'https://accelerate-mx-public.s3.us-east-1.amazonaws.com/G-EGVO Dassault Falcon 900LX.png',
         model: 'Falcon 9X',
         manufacturer: 'Dassault',
         year_of_manufacture: 2011,
         number_of_engines: 2,
         is_ifr_certified: true,
         customer_id: customerId,
         is_accelerated: true,
         maintenance_program: 'Part 91',
         status: 'GROUNDED',
         status_reason: 'Overdue maintenance',
      },
   });

   console.log('Upserting customer Accelerate MX to aircraft N106EX...');
   await prisma.customerToAircraftMap.upsert({
      where: {
         customer_id_aircraft_id: {
            customer_id: customerId,
            aircraft_id: aircraft.id,
         },
      },
      update: {},
      create: {
         customer_id: customerId,
         aircraft_id: aircraft.id,
      },
   });

   await seedPhysicalInventoryN106EX(
      prisma,
      customerId,
      aircraft.id,
      baseOfOperationId,
   );

   await seedWorkOrdersN106EX(
      prisma,
      customerId,
      aircraft.id,
      baseOfOperationId,
   );
}
