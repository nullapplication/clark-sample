import { MetricType, PrismaClient } from '@prisma/client';
import { calculateCurrentUsage } from '../../utils';
import { seedScheduledMaintenanceN450FXAirframe } from './scheduledMaintenanceN450FXAirframe';
import { seedScheduledMaintenanceN450FXApu } from './scheduledMaintenanceN450FXApu';
import { seedScheduledMaintenanceN450FXRightEngine } from './scheduledMaintenanceN450FXRightEngine';
import { seedScheduledMaintenanceN450FXLeftEngine } from './scheduledMaintenanceN450FXLeftEngine';
import { seedScheduledMaintenanceN450FXLeftLandingGear } from './scheduledMaintenanceN450FXLeftLandingGear';
import { seedScheduledMaintenanceN450FXRightLandingGear } from './scheduledMaintenanceN450FXRightLandingGear';
import { seedScheduledMaintenanceN450FXNoseLandingGear } from './scheduledMaintenanceN450FXNoseLandingGear';

export async function seedPhysicalInventoryN450FX(
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
         name: 'MD-88 Airframe',
         description: 'Main airframe for MD-88',
         part_number: 'MD-88-AF',
         manufacturer: 'McDonnell Douglas',
         model: 'MD-88',
         quantity_in_stock: 1,
         reorder_threshold: 0,
         category: 'Aircraft Components',
         sub_category: 'Airframe',
         unit_price: 2500000.0,
      },
   });

   const engineProduct = await prisma.product.upsert({
      where: { id: 'cm7km86rr000108l8ct6adys3' },
      update: {},
      create: {
         id: 'cm7km86rr000108l8ct6adys3',
         name: 'JT8D-219 Engine',
         description: 'Turbofan Engine for MD-88',
         part_number: 'JT8D-219',
         manufacturer: 'Pratt & Whitney',
         model: 'JT8D-219',
         quantity_in_stock: 2,
         reorder_threshold: 0,
         category: 'Aircraft Components',
         sub_category: 'Engines',
         unit_price: 850000.0,
      },
   });

   const landingGearProduct = await prisma.product.upsert({
      where: { id: 'cm7km86rr000208l8ct6adys4' },
      update: {},
      create: {
         id: 'cm7km86rr000208l8ct6adys4',
         name: 'MD-88 Landing Gear',
         description: 'Landing Gear Assembly for MD-88',
         part_number: 'MD-88-LG',
         manufacturer: 'McDonnell Douglas',
         model: 'MD-88',
         quantity_in_stock: 3,
         reorder_threshold: 0,
         category: 'Aircraft Components',
         sub_category: 'Landing Gear',
         unit_price: 450000.0,
      },
   });

   const apuProduct = await prisma.product.upsert({
      where: { id: 'cm7km86rr000308l8ct6adys5' },
      update: {},
      create: {
         id: 'cm7km86rr000308l8ct6adys5',
         name: 'GTCP85-129 APU',
         description: 'Auxiliary Power Unit for MD-88',
         part_number: 'GTCP85-129',
         manufacturer: 'Honeywell',
         model: 'GTCP85-129',
         quantity_in_stock: 1,
         reorder_threshold: 0,
         category: 'Aircraft Components',
         sub_category: 'APU',
         unit_price: 350000.0,
      },
   });

   console.log('Creating customer to product map N450FX...');
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
            product_id: apuProduct.id,
            base_of_operation_id: baseOfOperationId,
         },
      ],
   });

   console.log('Creating N450FX airframe inventory and metrics...');
   // Airframe metrics for N450FX
   const airframeMetrics = [
      {
         id: 'um011',
         metric_type: MetricType.FLIGHT_HOURS,
         value: 4000,
         recorded_at: new Date('2024-01-01'),
      },
      {
         id: 'um012',
         metric_type: MetricType.FLIGHT_HOURS,
         value: 800,
         recorded_at: new Date('2024-07-01'),
      },
      {
         id: 'um014',
         metric_type: MetricType.LANDINGS,
         value: 600,
         recorded_at: new Date('2024-07-01'),
      },
   ];

   // Physical Inventory for N450FX - Airframe
   const airframeInventoryItem = await prisma.physicalInventoryItem.upsert({
      where: { id: 'clzrtp9r50005yhn6uju7ikm8' },
      update: {
         current_usage: calculateCurrentUsage(airframeMetrics),
         usage_metrics: {
            createMany: {
               skipDuplicates: true,
               data: airframeMetrics,
            },
         },
      },
      create: {
         id: 'clzrtp9r50005yhn6uju7ikm8',
         customer_id: customerId,
         product_id: airframeProduct.id,
         aircraft_id: aircraftId,
         show_on_aircraft: true,
         number: 'INV-AIRFRAME-904DE',
         name: 'MD-88 Airframe',
         serial_number: 'SN90488',
         description: 'Main airframe for N450FX',
         current_usage: calculateCurrentUsage(airframeMetrics),
         usage_metrics: {
            createMany: {
               skipDuplicates: true,
               data: airframeMetrics,
            },
         },
      },
   });

   await seedScheduledMaintenanceN450FXAirframe(
      prisma,
      airframeInventoryItem.id,
      aircraftId,
   );

   console.log('Creating N450FX engine 1 inventory and metrics...');
   // Engine 1 metrics for N450FX
   const engine1Metrics = [
      {
         id: 'um015',
         metric_type: MetricType.FLIGHT_HOURS,
         value: 4800,
         recorded_at: new Date('2024-07-01'),
      },
      {
         id: 'um016',
         metric_type: MetricType.CYCLES,
         value: 600,
         recorded_at: new Date('2024-07-01'),
      },
   ];

   const engine1InventoryItem = await prisma.physicalInventoryItem.upsert({
      where: { id: 'clzrtpar40006uju7ikm8ol.9' },
      update: {
         current_usage: calculateCurrentUsage(engine1Metrics),
         usage_metrics: {
            createMany: {
               skipDuplicates: true,
               data: engine1Metrics,
            },
         },
      },
      create: {
         id: 'clzrtpar40006uju7ikm8ol.9',
         customer_id: customerId,
         product_id: engineProduct.id,
         aircraft_id: aircraftId,
         show_on_aircraft: true,
         parent_id: airframeInventoryItem.id,
         number: 'INV-ENGINE-904DE-1',
         name: 'JT8D-219 Engine 1',
         serial_number: 'SN22222',
         description: 'Left engine for N450FX',
         current_usage: calculateCurrentUsage(engine1Metrics),
         usage_metrics: {
            createMany: {
               skipDuplicates: true,
               data: engine1Metrics,
            },
         },
      },
   });

   await seedScheduledMaintenanceN450FXLeftEngine(
      prisma,
      engine1InventoryItem.id,
      aircraftId,
   );

   console.log('Creating N450FX engine 2 inventory and metrics...');
   // Engine 2 metrics for N450FX
   const engine2Metrics = [
      {
         id: 'um019',
         metric_type: MetricType.FLIGHT_HOURS,
         value: 4800,
         recorded_at: new Date('2024-05-01'),
      },
      {
         id: 'um020',
         metric_type: MetricType.CYCLES,
         value: 600,
         recorded_at: new Date('2024-07-01'),
      },
   ];

   const engine2InventoryItem = await prisma.physicalInventoryItem.upsert({
      where: { id: 'clzrtpbs30007ikm8ol.9p;0' },
      update: {
         current_usage: calculateCurrentUsage(engine2Metrics),
         usage_metrics: {
            createMany: {
               skipDuplicates: true,
               data: engine2Metrics,
            },
         },
      },
      create: {
         id: 'clzrtpbs30007ikm8ol.9p;0',
         customer_id: customerId,
         product_id: engineProduct.id,
         aircraft_id: aircraftId,
         show_on_aircraft: true,
         parent_id: airframeInventoryItem.id,
         number: 'INV-ENGINE-904DE-2',
         name: 'JT8D-219 Engine 2',
         serial_number: 'SN33333',
         description: 'Right engine for N450FX',
         current_usage: calculateCurrentUsage(engine2Metrics),
         usage_metrics: {
            createMany: {
               skipDuplicates: true,
               data: engine2Metrics,
            },
         },
      },
   });

   await seedScheduledMaintenanceN450FXRightEngine(
      prisma,
      engine2InventoryItem.id,
      aircraftId,
   );

   console.log('Creating N450FX landing gear left inventory and metrics...');
   // Landing Gear Left metrics for N450FX
   const landingGearLeftMetrics = [
      {
         id: 'um023',
         metric_type: MetricType.LANDINGS,
         value: 600,
         recorded_at: new Date('2024-05-01'),
      },
   ];

   const landingGearLeftInventoryItem =
      await prisma.physicalInventoryItem.upsert({
         where: { id: 'clzrtpct20008ol.9p;0a1s2' },
         update: {
            current_usage: calculateCurrentUsage(landingGearLeftMetrics),
            usage_metrics: {
               createMany: {
                  skipDuplicates: true,
                  data: landingGearLeftMetrics,
               },
            },
         },
         create: {
            id: 'clzrtpct20008ol.9p;0a1s2',
            customer_id: customerId,
            product_id: landingGearProduct.id,
            aircraft_id: aircraftId,
            show_on_aircraft: true,
            parent_id: airframeInventoryItem.id,
            number: 'INV-LGL-904DE-2',
            name: 'Landing Gear Left',
            serial_number: 'LGL_SN33333',
            description: 'Landing Gear Left',
            current_usage: calculateCurrentUsage(landingGearLeftMetrics),
            usage_metrics: {
               createMany: {
                  skipDuplicates: true,
                  data: landingGearLeftMetrics,
               },
            },
         },
      });

   await seedScheduledMaintenanceN450FXLeftLandingGear(
      prisma,
      landingGearLeftInventoryItem.id,
      aircraftId,
   );

   console.log('Creating N450FX landing gear right inventory and metrics...');
   // Landing Gear Right metrics for N450FX
   const landingGearRightMetrics = [
      {
         id: 'um024',
         metric_type: MetricType.LANDINGS,
         value: 600,
         recorded_at: new Date('2024-05-01'),
      },
   ];

   const landingGearRightInventoryItem =
      await prisma.physicalInventoryItem.upsert({
         where: { id: 'clzrtpdu10009p;0a1s2d3f4' },
         update: {
            current_usage: calculateCurrentUsage(landingGearRightMetrics),
            usage_metrics: {
               createMany: {
                  skipDuplicates: true,
                  data: landingGearRightMetrics,
               },
            },
         },
         create: {
            id: 'clzrtpdu10009p;0a1s2d3f4',
            customer_id: customerId,
            product_id: landingGearProduct.id,
            aircraft_id: aircraftId,
            show_on_aircraft: false,
            parent_id: airframeInventoryItem.id,
            number: 'INV-LGR-904DE-2',
            name: 'Landing Gear Right',
            serial_number: 'LGR_SN33333',
            description: 'Landing Gear Right',
            current_usage: calculateCurrentUsage(landingGearRightMetrics),
            usage_metrics: {
               createMany: {
                  skipDuplicates: true,
                  data: landingGearRightMetrics,
               },
            },
         },
      });

   await seedScheduledMaintenanceN450FXRightLandingGear(
      prisma,
      landingGearRightInventoryItem.id,
      aircraftId,
   );

   console.log('Creating N450FX landing gear nose inventory and metrics...');
   // Landing Gear Nose metrics for N450FX
   const landingGearNoseMetrics = [
      {
         id: 'um025',
         metric_type: MetricType.LANDINGS,
         value: 600,
         recorded_at: new Date('2024-05-01'),
      },
   ];

   const landingGearNoseInventoryItem =
      await prisma.physicalInventoryItem.upsert({
         where: { id: 'clzs93ei40001gb4rfasdqwe1' },
         update: {
            current_usage: calculateCurrentUsage(landingGearNoseMetrics),
            usage_metrics: {
               createMany: {
                  skipDuplicates: true,
                  data: landingGearNoseMetrics,
               },
            },
         },
         create: {
            id: 'clzs93ei40001gb4rfasdqwe1',
            customer_id: customerId,
            product_id: landingGearProduct.id,
            aircraft_id: aircraftId,
            show_on_aircraft: false,
            parent_id: airframeInventoryItem.id,
            number: 'INV-LGN-904DE-2',
            name: 'Landing Gear Nose',
            serial_number: 'LGN_SN33333',
            description: 'Landing Gear Nose',
            current_usage: calculateCurrentUsage(landingGearNoseMetrics),
            usage_metrics: {
               createMany: {
                  skipDuplicates: true,
                  data: landingGearNoseMetrics,
               },
            },
         },
      });

   await seedScheduledMaintenanceN450FXNoseLandingGear(
      prisma,
      landingGearNoseInventoryItem.id,
      aircraftId,
   );

   console.log('Creating N450FX APU inventory and metrics...');
   // APU metrics for N450FX
   const apuMetrics = [
      {
         id: 'um026',
         metric_type: MetricType.FLIGHT_HOURS,
         value: 5700,
         recorded_at: new Date('2024-07-01'),
      },
      {
         id: 'um027',
         metric_type: MetricType.CYCLES,
         value: 1000,
         recorded_at: new Date('2024-07-01'),
      },
   ];

   const apuInventoryItem = await prisma.physicalInventoryItem.upsert({
      where: { id: 'clzs93dh2000057gb91cxfrla' },
      update: {
         current_usage: calculateCurrentUsage(apuMetrics),
         usage_metrics: {
            createMany: {
               skipDuplicates: true,
               data: apuMetrics,
            },
         },
      },
      create: {
         id: 'clzs93dh2000057gb91cxfrla',
         customer_id: customerId,
         product_id: apuProduct.id,
         aircraft_id: aircraftId,
         show_on_aircraft: false,
         parent_id: airframeInventoryItem.id,
         number: 'INV-APU-904DE-2',
         name: 'APU',
         serial_number: 'APU_SN33333',
         description: 'Auxiliary Power Unit',
         current_usage: calculateCurrentUsage(apuMetrics),
         usage_metrics: {
            createMany: {
               skipDuplicates: true,
               data: apuMetrics,
            },
         },
      },
   });

   await seedScheduledMaintenanceN450FXApu(
      prisma,
      apuInventoryItem.id,
      aircraftId,
   );
}
