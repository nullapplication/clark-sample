import { PrismaClient } from '@prisma/client';
import { seedPhysicalInventoryN429GR } from './physicalInventoryN429GR';
export async function seedAircraftN429GR(
   prisma: PrismaClient,
   customerId: string,
   baseOfOperationId: string,
) {
   console.log('Upserting N429GR aircraft...');
   const aircraft = await prisma.aircraft.upsert({
      where: { id: 'clz4b429h0000qwer9a3t5p1m' },
      update: {
         base_of_operation_id: baseOfOperationId,
         image_url:
            'https://accelerate-mx-public.s3.us-east-1.amazonaws.com/5B-CLS Bell 429 GlobalRanger.png',
         is_accelerated: true,
         model: '429 Global Ranger',
      },
      create: {
         id: 'clz4b429h0000qwer9a3t5p1m',
         base_of_operation_id: baseOfOperationId,
         tail_number: 'N429GR',
         image_url:
            'https://accelerate-mx-public.s3.us-east-1.amazonaws.com/5B-CLS Bell 429 GlobalRanger.png',
         model: '429 Global Ranger',
         manufacturer: 'Bell',
         year_of_manufacture: 2021,
         number_of_engines: 2,
         is_ifr_certified: true,
         customer_id: customerId,
         is_accelerated: true,
         maintenance_program: 'Part 121',
         status: 'AIRWORTHY',
      },
   });

   console.log('Upserting customer Accelerate MX to aircraft N429GR...');
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

   await seedPhysicalInventoryN429GR(
      prisma,
      customerId,
      aircraft.id,
      baseOfOperationId,
   );
}
