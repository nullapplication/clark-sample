import { PrismaClient } from '@prisma/client';
import { seedPhysicalInventoryN721AF } from './physicalInventoryN721AF';

export async function seedAircraftN721AF(
   prisma: PrismaClient,
   customerId: string,
   baseOfOperationId: string,
) {
   console.log('Upserting N721AF aircraft...');
   const aircraft = await prisma.aircraft.upsert({
      where: { id: 'clz3knf4h0000qwer9a3t5p1m' },
      update: {
         tail_number: 'N721AF',
         base_of_operation_id: baseOfOperationId,
         status: 'AIRWORTHY',
         image_url:
            'https://accelerate-mx-public.s3.us-east-1.amazonaws.com/N1130D Pilatus PC12.png',
         model: 'PC-12/47E',
         manufacturer: 'Pilatus',
      },
      create: {
         id: 'clz3knf4h0000qwer9a3t5p1m',
         base_of_operation_id: baseOfOperationId,
         tail_number: 'N721AF',
         image_url:
            'https://accelerate-mx-public.s3.us-east-1.amazonaws.com/N1130D Pilatus PC12.png',
         model: 'PC-12/47E',
         manufacturer: 'Pilatus',
         year_of_manufacture: 2020,
         number_of_engines: 1,
         is_ifr_certified: true,
         customer_id: customerId,
         is_accelerated: true,
         maintenance_program: 'Part 91',
         status: 'AIRWORTHY',
      },
   });

   console.log('Upserting customer Accelerate MX to aircraft N721AF...');
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

   await seedPhysicalInventoryN721AF(
      prisma,
      customerId,
      aircraft.id,
      baseOfOperationId,
   );
}
