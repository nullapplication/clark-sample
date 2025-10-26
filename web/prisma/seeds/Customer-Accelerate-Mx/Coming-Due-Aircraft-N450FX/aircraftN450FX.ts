import { PrismaClient } from '@prisma/client';
import { seedPhysicalInventoryN450FX } from './physicalInventoryN450FX';

export async function seedAircraftN450FX(
   prisma: PrismaClient,
   customerId: string,
   baseOfOperationId: string,
) {
   console.log('Upserting N450FX aircraft...');
   const aircraft = await prisma.aircraft.upsert({
      where: { id: 'clzrtp8q60004tgb5yhn6uju7' },
      update: {
         tail_number: 'N450FX',
         base_of_operation_id: baseOfOperationId,
         status: 'AIRWORTHY',
         image_url:
            'https://accelerate-mx-public.s3.us-east-1.amazonaws.com/N450FX Gulfstream G450.png',
         model: 'G450',
         manufacturer: 'Gulfstream',
         is_accelerated: true,
      },
      create: {
         id: 'clzrtp8q60004tgb5yhn6uju7',
         base_of_operation_id: baseOfOperationId,
         tail_number: 'N450FX',
         image_url:
            'https://accelerate-mx-public.s3.us-east-1.amazonaws.com/N450FX Gulfstream G450.png',
         model: 'G450',
         manufacturer: 'Gulfstream',
         year_of_manufacture: 1995,
         number_of_engines: 2,
         is_ifr_certified: true,
         customer_id: customerId,
         is_accelerated: true,
         maintenance_program: 'Part 121',
         status: 'AIRWORTHY',
      },
   });

   console.log('Upserting customer Accelerate MX to aircraft N450FX...');
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

   await seedPhysicalInventoryN450FX(
      prisma,
      customerId,
      aircraft.id,
      baseOfOperationId,
   );
}
