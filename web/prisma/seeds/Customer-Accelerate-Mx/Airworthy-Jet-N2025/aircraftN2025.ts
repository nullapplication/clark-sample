import { PrismaClient } from '@prisma/client';

export async function seedAircraftN2025(
   prisma: PrismaClient,
   customerId: string,
   baseOfOperationId: string,
) {
   console.log('Upserting N2025 aircraft...');
   const aircraft = await prisma.aircraft.upsert({
      where: { id: 'cm8g2k4a100023j6jwvbancyj' },
      update: {
         base_of_operation_id: baseOfOperationId,
         status: 'AIRWORTHY',
         image_url:
            'https://accelerate-mx-public.s3.us-east-1.amazonaws.com/T7-20DW Pilatus PC 26.png',
         model: 'PC-26',
         manufacturer: 'Pilatus',
         is_accelerated: true,
      },
      create: {
         id: 'cm8g2k4a100023j6jwvbancyj',
         base_of_operation_id: baseOfOperationId,
         tail_number: 'N2025',
         image_url:
            'https://accelerate-mx-public.s3.us-east-1.amazonaws.com/T7-20DW Pilatus PC 26.png',
         model: 'PC-26',
         manufacturer: 'Pilatus',
         year_of_manufacture: 2020,
         number_of_engines: 2,
         is_ifr_certified: true,
         customer_id: customerId,
         is_accelerated: true,
         maintenance_program: 'Part 91',
         status: 'AIRWORTHY',
      },
   });

   console.log('Upserting customer Accelerate MX to aircraft N2025...');
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
}
