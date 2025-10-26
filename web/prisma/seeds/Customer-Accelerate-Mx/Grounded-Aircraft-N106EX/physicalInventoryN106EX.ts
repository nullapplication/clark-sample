import { MetricType, PrismaClient } from '@prisma/client';
import { calculateCurrentUsage } from '../../utils';
import { seedScheduledMaintenanceN106EXAirframe } from './scheduledMaintenanceN106EXAirframe';
import { seedScheduledMaintenanceN106EXLeftEngine } from './scheduledMaintenanceN106EXLeftEngine';
import { seedScheduledMaintenanceN106EXRightEngine } from './scheduledMaintenanceN106EXRightEngine';
import { seedUnscheduledMaintenanceN106EX } from './unscheduledMaintenanceN106EXAirframe';

export async function seedPhysicalInventoryN106EX(
   prisma: PrismaClient,
   customerId: string,
   aircraftId: string,
   baseOfOperationId: string,
) {
   // Create products with upsert and store IDs
   console.log('Creating Falcon 9X products with upsert...');

   const airframeProduct = await prisma.product.upsert({
      where: { id: 'cm7km80iv000008l82nzu3ipn' },
      update: {},
      create: {
         id: 'cm7km80iv000008l82nzu3ipn',
         name: 'Falcon 9X Airframe',
         description: 'Main airframe for Falcon 9X',
         part_number: 'FAL-9X-AF',
         manufacturer: 'Dassault',
         model: 'Falcon 9X',
         quantity_in_stock: 1,
         reorder_threshold: 0,
         category: 'Aircraft Components',
         sub_category: 'Airframe',
         unit_price: 1500000.0,
      },
   });

   const engineProduct = await prisma.product.upsert({
      where: { id: 'cm7km86rr000108l8ct6adys3' },
      update: {},
      create: {
         id: 'cm7km86rr000108l8ct6adys3',
         name: 'TFE731-60 Engine',
         description: 'Turbofan Engine for Falcon 9X',
         part_number: 'TFE731-60',
         manufacturer: 'Honeywell',
         model: 'TFE731-60',
         quantity_in_stock: 2,
         reorder_threshold: 0,
         category: 'Aircraft Components',
         sub_category: 'Engines',
         unit_price: 750000.0,
      },
   });

   console.log('Creating customer to product map N106EX...');
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
      ],
   });

   console.log('Creating N106EX airframe inventory and metrics...');
   const airframeMetrics = [
      {
         id: 'um001',
         metric_type: MetricType.FLIGHT_HOURS,
         value: 2000,
         recorded_at: new Date('2024-01-01'),
      },
      {
         id: 'um002',
         metric_type: MetricType.FLIGHT_HOURS,
         value: 500,
         recorded_at: new Date('2024-07-01'),
      },
      {
         id: 'um004',
         metric_type: MetricType.LANDINGS,
         value: 1300,
         recorded_at: new Date('2024-07-01'),
      },
   ];

   const airframeInventory = await prisma.physicalInventoryItem.upsert({
      where: { id: 'cm7kmf1000r08l87w2cz9xb' },
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
         id: 'cm7kmf1000r08l87w2cz9xb',
         customer_id: customerId,
         product_id: airframeProduct.id,
         aircraft_id: aircraftId,
         show_on_aircraft: true,
         number: 'INV-AIRFRAME-001',
         name: 'Falcon 9X Airframe',
         serial_number: 'SN12345',
         description: 'Main airframe for N106EX',
         current_usage: calculateCurrentUsage(airframeMetrics),
         usage_metrics: {
            createMany: {
               skipDuplicates: true,
               data: airframeMetrics,
            },
         },
      },
   });

   await seedScheduledMaintenanceN106EXAirframe(
      prisma,
      airframeInventory.id,
      aircraftId,
   );

   await seedUnscheduledMaintenanceN106EX(
      prisma,
      airframeInventory.id,
      aircraftId,
   );

   console.log('Creating N106EX left engine inventory and metrics...');
   const leftEngineMetrics = [
      {
         id: 'um005',
         metric_type: MetricType.FLIGHT_HOURS,
         value: 2200,
         recorded_at: new Date('2024-07-01'),
      },
      {
         id: 'um006',
         metric_type: MetricType.CYCLES,
         value: 1800,
         recorded_at: new Date('2024-07-01'),
      },
   ];

   const leftEngineInventory = await prisma.physicalInventoryItem.upsert({
      where: { id: 'cm7kmf2000s08l8d9hj4v7n' },
      update: {
         aircraft_id: aircraftId,
         show_on_aircraft: true,
         current_usage: calculateCurrentUsage(leftEngineMetrics),
         usage_metrics: {
            createMany: {
               skipDuplicates: true,
               data: leftEngineMetrics,
            },
         },
      },
      create: {
         id: 'cm7kmf2000s08l8d9hj4v7n',
         customer_id: customerId,
         product_id: engineProduct.id,
         aircraft_id: aircraftId,
         show_on_aircraft: true,
         number: 'INV-ENGINE-001',
         name: 'Left Engine',
         serial_number: 'SN67890',
         description: 'Left engine for N106EX',
         current_usage: calculateCurrentUsage(leftEngineMetrics),
         usage_metrics: {
            createMany: {
               skipDuplicates: true,
               data: leftEngineMetrics,
            },
         },
      },
   });

   await seedScheduledMaintenanceN106EXLeftEngine(
      prisma,
      leftEngineInventory.id,
      aircraftId,
   );

   console.log('Creating N106EX right engine inventory and metrics...');
   const rightEngineMetrics = [
      {
         id: 'um009',
         metric_type: MetricType.FLIGHT_HOURS,
         value: 2150,
         recorded_at: new Date('2024-07-01'),
      },
      {
         id: 'um010',
         metric_type: MetricType.CYCLES,
         value: 1750,
         recorded_at: new Date('2024-07-01'),
      },
   ];

   const rightEngineInventory = await prisma.physicalInventoryItem.upsert({
      where: { id: 'cm7kmf3000t08l8ixvnxvxn' },
      update: {
         aircraft_id: aircraftId,
         show_on_aircraft: true,
         current_usage: calculateCurrentUsage(rightEngineMetrics),
         usage_metrics: {
            createMany: {
               skipDuplicates: true,
               data: rightEngineMetrics,
            },
         },
      },
      create: {
         id: 'cm7kmf3000t08l8ixvnxvxn',
         customer_id: customerId,
         product_id: engineProduct.id,
         aircraft_id: aircraftId,
         show_on_aircraft: true,
         number: 'INV-ENGINE-002',
         name: 'Right Engine',
         serial_number: 'SN54321',
         description: 'Right engine for N106EX',
         current_usage: calculateCurrentUsage(rightEngineMetrics),
         usage_metrics: {
            createMany: {
               skipDuplicates: true,
               data: rightEngineMetrics,
            },
         },
      },
   });

   await seedScheduledMaintenanceN106EXRightEngine(
      prisma,
      rightEngineInventory.id,
      aircraftId,
   );
}
