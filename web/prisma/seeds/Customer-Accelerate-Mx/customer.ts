import { PrismaClient } from '@prisma/client';
import { seedAircraftN106EX } from './Grounded-Aircraft-N106EX/aircraftN106EX';
import { seedAircraftN450FX } from './Coming-Due-Aircraft-N450FX/aircraftN450FX';
import { seedAircraftN429GR } from './Airworthy-Heli-N429GR/aircraftN429GR';
import { seedAircraftN721AF } from './Airworthy-Prop-N721AF/aircraftN721AF';
import { seedAircraftN2025 } from './Airworthy-Jet-N2025/aircraftN2025';

import seedProducts from './products';
import seedSuppliers from './suppliers';

export async function seedCustomer(prisma: PrismaClient) {
   // Upsert customer
   console.log('Upserting Accelerate MX customer...');
   const customer = await prisma.customer.upsert({
      where: { id: 'cm6sgh61g00070cjmh30y819q' },
      update: {
         name: 'Accelerate MX',
         primary_email: 'acceleratemx@nullapplication.com',
         primary_phone: '239-216-3766',
         primary_street1: '14474 Waterway Blvd',
         primary_city: 'Fishers',
         primary_state: 'IN',
         primary_zip: '46040',
         primary_country: 'USA',
         notes: 'Test Aircraft with real tail number',
         code: 'AMX',
         last_used_unscheduled_maintenance_number: 5,
      },
      create: {
         id: 'cm6sgh61g00070cjmh30y819q',
         name: 'Accelerate MX',
         primary_email: 'acceleratemx@nullapplication.com',
         primary_phone: '239-216-3766',
         primary_street1: '14474 Waterway Blvd',
         primary_city: 'Fishers',
         primary_state: 'IN',
         primary_zip: '46040',
         primary_country: 'USA',
         notes: 'Test Aircraft with real tail number',
         code: 'AMX',
         last_used_unscheduled_maintenance_number: 5,
      },
   });

   // Upsert base of operations
   console.log('Upserting base of operations...');
   const indianaBaseOfOperation = await prisma.baseOfOperation.upsert({
      where: { id: 'cm6sgjk9l00090cjm3xx80syt' },
      update: {},
      create: {
         id: 'cm6sgjk9l00090cjm3xx80syt',
         customer_id: customer.id,
         name: 'Fishers, IN',
         street1: '14474 Waterway Blvd',
         city: 'Fishers',
         state: 'IN',
         zip: '46040',
         country: 'USA',
         latitude: 39.944121,
         longitude: -85.905918,
      },
   });

   const floridaBaseOfOperation = await prisma.baseOfOperation.upsert({
      where: { id: 'cm8g2gp6c00013j6jd4q7cwpp' },
      update: {},
      create: {
         id: 'cm8g2gp6c00013j6jd4q7cwpp',
         customer_id: customer.id,
         name: 'Fort Myers, FL',
         street1: '11000 Terminal Access Rd',
         city: 'Fort Myers',
         state: 'FL',
         zip: '33913',
         country: 'USA',
         latitude: 26.5362,
         longitude: -81.7553,
      },
   });

   // Upsert user
   console.log('Upserting user...');
   const user = await prisma.user.upsert({
      where: { id: 'cm6tfldaq000g0cla5kbu43gu' },
      update: {},
      create: {
         id: 'cm6tfldaq000g0cla5kbu43gu',
         email: 'acceleratemx@nullapplication.com',
         first_name: 'Rusty',
         last_name: 'Wingnut',
      },
   });

   // Upsert user to customer map
   console.log('Upserting user to customer map...');
   await prisma.userToCustomerMap.upsert({
      where: {
         user_id_customer_id: {
            user_id: user.id,
            customer_id: customer.id,
         },
      },
      update: {},
      create: {
         user_id: user.id,
         customer_id: customer.id,
         role: 'ADMIN',
      },
   });

   // Create inventory locations with createMany and skipDuplicates
   console.log('Creating inventory locations with skipDuplicates...');
   await prisma.inventoryLocation.createMany({
      skipDuplicates: true,
      data: [
         {
            id: 'cm745yetb000108js0m5jgblk',
            code: 'cm745yetb000108js0m5jgblk',
            name: 'Hangar NH1',
            customer_id: customer.id,
            base_of_operation_id: indianaBaseOfOperation.id,
            description: 'Our main hangar location.',
         },
         {
            id: 'cm7460r6m000208js5ojn8ajg',
            code: 'cm7460r6m000208js5ojn8ajg',
            parent_id: 'cm745yetb000108js0m5jgblk',
            name: 'Security Cage',
            customer_id: customer.id,
            base_of_operation_id: indianaBaseOfOperation.id,
            description: 'Security cage for expensive equipment',
         },
      ],
   });

   await seedAircraftN106EX(prisma, customer.id, indianaBaseOfOperation.id);
   await seedAircraftN450FX(prisma, customer.id, floridaBaseOfOperation.id);
   await seedAircraftN721AF(prisma, customer.id, floridaBaseOfOperation.id);
   await seedAircraftN2025(prisma, customer.id, floridaBaseOfOperation.id);
   await seedAircraftN429GR(prisma, customer.id, floridaBaseOfOperation.id);

   await seedProducts(prisma, customer.id);
   await seedSuppliers(prisma, customer.id);
}
