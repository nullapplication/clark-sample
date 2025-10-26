import { MetricType, PrismaClient } from '@prisma/client';
import { calculateCurrentUsage } from '../../utils';
import { seedScheduledMaintenanceN721AFAirframe } from './scheduledMaintenanceN721AFAirframe';
import { seedScheduledMaintenanceN721AFEngine } from './scheduledMaintenanceN721AFEngine';
import { seedScheduledMaintenanceN721AFAvionics } from './scheduledMaintenanceN721AFAvionics';
import { seedScheduledMaintenanceN721AFLeftLandingGear } from './scheduledMaintenanceN721AFLeftLandingGear';
import { seedScheduledMaintenanceN721AFRightLandingGear } from './scheduledMaintenanceN721AFRightLandingGear';
import { seedScheduledMaintenanceN721AFNoseLandingGear } from './scheduledMaintenanceN721AFNoseLandingGear';

export async function seedPhysicalInventoryN721AF(
   prisma: PrismaClient,
   customerId: string,
   aircraftId: string,
   baseOfOperationId: string,
) {
   // Create products with upsert and store IDs
   console.log('Creating products with upsert...');

   const airframeProduct = await prisma.product.upsert({
      where: { id: 'cm7km80iv000008l82nzu3ipn' },
      update: {},
      create: {
         id: 'cm7km80iv000008l82nzu3ipn',
         name: 'PC-12/47E Airframe',
         description: 'Main airframe for PC-12/47E',
         part_number: 'PC-12-47E-AF',
         manufacturer: 'Pilatus',
         model: 'PC-12/47E',
         quantity_in_stock: 1,
         reorder_threshold: 0,
         category: 'Aircraft Components',
         sub_category: 'Airframe',
         unit_price: 4500000.0,
      },
   });

   const engineProduct = await prisma.product.upsert({
      where: { id: 'cm7km86rr000108l8ct6adys3' },
      update: {},
      create: {
         id: 'cm7km86rr000108l8ct6adys3',
         name: 'PT6A-114A Engine',
         description: 'Turboprop Engine for PC-12/47E',
         part_number: 'PT6A-114A',
         manufacturer: 'Pratt & Whitney Canada',
         model: 'PT6A-114A',
         quantity_in_stock: 1,
         reorder_threshold: 0,
         category: 'Aircraft Components',
         sub_category: 'Engines',
         unit_price: 950000.0,
      },
   });

   const landingGearProduct = await prisma.product.upsert({
      where: { id: 'cm7km86rr000208l8ct6adys4' },
      update: {},
      create: {
         id: 'cm7km86rr000208l8ct6adys4',
         name: 'PC-12/47E Landing Gear',
         description: 'Landing Gear Assembly for PC-12/47E',
         part_number: 'PC-12-47E-LG',
         manufacturer: 'Pilatus',
         model: 'PC-12/47E',
         quantity_in_stock: 3,
         reorder_threshold: 0,
         category: 'Aircraft Components',
         sub_category: 'Landing Gear',
         unit_price: 250000.0,
      },
   });

   const avionicsProduct = await prisma.product.upsert({
      where: { id: 'cm7km86rr000408l8ct6adys6' },
      update: {},
      create: {
         id: 'cm7km86rr000408l8ct6adys6',
         name: 'PC-12/47E Avionics Suite',
         description: 'Avionics Suite for PC-12/47E',
         part_number: 'PC-12-47E-AV',
         manufacturer: 'Honeywell',
         model: 'PC-12/47E',
         quantity_in_stock: 1,
         reorder_threshold: 0,
         category: 'Aircraft Components',
         sub_category: 'Avionics',
         unit_price: 750000.0,
      },
   });

   console.log('Creating customer to product map N721AF...');
   await prisma.customerToProductMap.createMany({
      skipDuplicates: true,
      data: [
         {
            customer_id: customerId,
            product_id: airframeProduct.id,
            base_of_operation_id: baseOfOperationId,
         },
         {
            customer_id: customerId,
            product_id: engineProduct.id,
            base_of_operation_id: baseOfOperationId,
         },
         {
            customer_id: customerId,
            product_id: landingGearProduct.id,
            base_of_operation_id: baseOfOperationId,
         },
         {
            customer_id: customerId,
            product_id: avionicsProduct.id,
            base_of_operation_id: baseOfOperationId,
         },
      ],
   });

   // Airframe for N721AF
   console.log('Creating N721AF airframe inventory and metrics...');
   const airframeMetrics = [
      {
         id: 'um011',
         metric_type: MetricType.FLIGHT_HOURS,
         value: 3250,
         recorded_at: new Date('2024-01-01'),
      },
      {
         id: 'um012',
         metric_type: MetricType.FLIGHT_HOURS,
         value: 500,
         recorded_at: new Date('2024-07-01'),
      },
      {
         id: 'um014',
         metric_type: MetricType.LANDINGS,
         value: 845,
         recorded_at: new Date('2024-07-01'),
      },
   ];

   const airframeInventoryItem = await prisma.physicalInventoryItem.upsert({
      where: { id: 'clz3knqop0001asdf8b2r1q9n' },
      update: {
         aircraft_id: aircraftId,
         show_on_aircraft: true,
         current_usage: calculateCurrentUsage(airframeMetrics),
         usage_metrics: {
            createMany: {
               skipDuplicates: true,
               data: airframeMetrics,
            },
         },
      },
      create: {
         id: 'clz3knqop0001asdf8b2r1q9n',
         customer_id: customerId,
         product_id: airframeProduct.id,
         aircraft_id: aircraftId,
         show_on_aircraft: true,
         number: 'INV-AIRFRAME-721AF',
         name: 'PC-12/47E Airframe',
         serial_number: 'SN11111',
         description: 'Main airframe for N721AF',
         current_usage: calculateCurrentUsage(airframeMetrics),
         usage_metrics: {
            createMany: {
               skipDuplicates: true,
               data: airframeMetrics,
            },
         },
      },
   });

   await seedScheduledMaintenanceN721AFAirframe(
      prisma,
      airframeInventoryItem.id,
      aircraftId,
   );

   // Engine for N721AF
   console.log('Creating N721AF engine inventory and metrics...');
   const engineMetrics = [
      {
         id: 'um015',
         metric_type: MetricType.FLIGHT_HOURS,
         value: 3750,
         recorded_at: new Date('2024-07-01'),
      },
      {
         id: 'um016',
         metric_type: MetricType.CYCLES,
         value: 1800,
         recorded_at: new Date('2024-07-01'),
      },
   ];

   const engineInventoryItem = await prisma.physicalInventoryItem.upsert({
      where: { id: 'clz3knzxy0002zxcv7c1p8w0o' },
      update: {
         aircraft_id: aircraftId,
         show_on_aircraft: true,
         parent_id: airframeInventoryItem.id,
         current_usage: calculateCurrentUsage(engineMetrics),
         usage_metrics: {
            createMany: {
               skipDuplicates: true,
               data: engineMetrics,
            },
         },
      },
      create: {
         id: 'clz3knzxy0002zxcv7c1p8w0o',
         customer_id: customerId,
         product_id: engineProduct.id,
         aircraft_id: aircraftId,
         show_on_aircraft: true,
         parent_id: airframeInventoryItem.id,
         number: 'INV-ENGINE-721AF',
         name: 'Engine',
         serial_number: 'SN67890',
         description: 'Engine for N721AF',
         current_usage: calculateCurrentUsage(engineMetrics),
         usage_metrics: {
            createMany: {
               skipDuplicates: true,
               data: engineMetrics,
            },
         },
      },
   });

   await seedScheduledMaintenanceN721AFEngine(
      prisma,
      engineInventoryItem.id,
      aircraftId,
   );

   // Avionics for N721AF
   console.log('Creating N721AF avionics inventory...');
   const avionicsInventoryItem = await prisma.physicalInventoryItem.upsert({
      where: { id: 'clz3kp87r0003tyui6d0o7v1p' },
      update: {
         aircraft_id: aircraftId,
         show_on_aircraft: false,
         parent_id: airframeInventoryItem.id,
      },
      create: {
         id: 'clz3kp87r0003tyui6d0o7v1p',
         customer_id: customerId,
         product_id: avionicsProduct.id,
         aircraft_id: aircraftId,
         show_on_aircraft: false,
         parent_id: airframeInventoryItem.id,
         number: 'INV-AVIONICS-721AF',
         name: 'Avionics',
         serial_number: 'SN54321',
         description: 'Avionics for N721AF',
      },
   });

   await seedScheduledMaintenanceN721AFAvionics(
      prisma,
      avionicsInventoryItem.id,
      aircraftId,
   );

   // Left Landing Gear for N721AF
   console.log('Creating N721AF left landing gear inventory and metrics...');
   const leftLandingGearMetrics = [
      {
         id: 'um019',
         metric_type: MetricType.LANDINGS,
         value: 8500,
         recorded_at: new Date('2024-05-01'),
      },
      {
         id: 'um020',
         metric_type: MetricType.LANDINGS,
         value: 1800,
         recorded_at: new Date('2024-07-01'),
      },
   ];

   const leftLandingGearInventoryItem =
      await prisma.physicalInventoryItem.upsert({
         where: { id: 'clz3kpklm0004ghjk5e9n6u2q' },
         update: {
            aircraft_id: aircraftId,
            show_on_aircraft: false,
            parent_id: airframeInventoryItem.id,
            current_usage: calculateCurrentUsage(leftLandingGearMetrics),
            usage_metrics: {
               createMany: {
                  skipDuplicates: true,
                  data: leftLandingGearMetrics,
               },
            },
         },
         create: {
            id: 'clz3kpklm0004ghjk5e9n6u2q',
            customer_id: customerId,
            product_id: landingGearProduct.id,
            aircraft_id: aircraftId,
            show_on_aircraft: false,
            parent_id: airframeInventoryItem.id,
            number: 'INV-LEFT-LANDING-GEAR-721AF',
            name: 'Left Landing Gear',
            serial_number: 'SN54321',
            description: 'Left landing gear for N721AF',
            current_usage: calculateCurrentUsage(leftLandingGearMetrics),
            usage_metrics: {
               createMany: {
                  skipDuplicates: true,
                  data: leftLandingGearMetrics,
               },
            },
         },
      });

   await seedScheduledMaintenanceN721AFLeftLandingGear(
      prisma,
      leftLandingGearInventoryItem.id,
      aircraftId,
   );

   // Right Landing Gear for N721AF
   console.log('Creating N721AF right landing gear inventory and metrics...');
   const rightLandingGearMetrics = [
      {
         id: 'um022',
         metric_type: MetricType.LANDINGS,
         value: 1800,
         recorded_at: new Date('2024-07-01'),
      },
   ];

   const rightLandingGearInventoryItem =
      await prisma.physicalInventoryItem.upsert({
         where: { id: 'clz3kpvbn0005bnmx4f8m5t3r' },
         update: {
            aircraft_id: aircraftId,
            show_on_aircraft: false,
            parent_id: airframeInventoryItem.id,
            current_usage: calculateCurrentUsage(rightLandingGearMetrics),
            usage_metrics: {
               createMany: {
                  skipDuplicates: true,
                  data: rightLandingGearMetrics,
               },
            },
         },
         create: {
            id: 'clz3kpvbn0005bnmx4f8m5t3r',
            customer_id: customerId,
            product_id: landingGearProduct.id,
            aircraft_id: aircraftId,
            show_on_aircraft: false,
            parent_id: airframeInventoryItem.id,
            number: 'INV-RIGHT-LANDING-GEAR-721AF',
            name: 'Right Landing Gear',
            serial_number: 'SN54321',
            description: 'Right Landing Gear for N721AF',
            current_usage: calculateCurrentUsage(rightLandingGearMetrics),
            usage_metrics: {
               createMany: {
                  skipDuplicates: true,
                  data: rightLandingGearMetrics,
               },
            },
         },
      });

   await seedScheduledMaintenanceN721AFRightLandingGear(
      prisma,
      rightLandingGearInventoryItem.id,
      aircraftId,
   );

   // Nose Landing Gear for N721AF
   console.log('Creating N721AF nose landing gear inventory and metrics...');
   const noseLandingGearMetrics = [
      {
         id: 'um023',
         metric_type: MetricType.LANDINGS,
         value: 1800,
         recorded_at: new Date('2024-07-01'),
      },
   ];

   const noseLandingGearInventoryItem =
      await prisma.physicalInventoryItem.upsert({
         where: { id: 'clzrtp5m90001wsx2edc3rfv4' },
         update: {
            aircraft_id: aircraftId,
            show_on_aircraft: false,
            parent_id: airframeInventoryItem.id,
            current_usage: calculateCurrentUsage(noseLandingGearMetrics),
            usage_metrics: {
               createMany: {
                  skipDuplicates: true,
                  data: noseLandingGearMetrics,
               },
            },
         },
         create: {
            id: 'clzrtp5m90001wsx2edc3rfv4',
            customer_id: customerId,
            product_id: landingGearProduct.id,
            aircraft_id: aircraftId,
            show_on_aircraft: false,
            parent_id: airframeInventoryItem.id,
            number: 'INV-NOSE-LANDING-GEAR-721AF',
            name: 'Nose Landing Gear',
            serial_number: 'SN54321',
            description: 'Nose Landing Gear for N721AF',
            current_usage: calculateCurrentUsage(noseLandingGearMetrics),
            usage_metrics: {
               createMany: {
                  skipDuplicates: true,
                  data: noseLandingGearMetrics,
               },
            },
         },
      });

   await seedScheduledMaintenanceN721AFNoseLandingGear(
      prisma,
      noseLandingGearInventoryItem.id,
      aircraftId,
   );
}
