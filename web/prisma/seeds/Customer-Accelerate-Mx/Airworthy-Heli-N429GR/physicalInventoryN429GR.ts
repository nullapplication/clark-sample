import { MetricType, PrismaClient } from '@prisma/client';
import { calculateCurrentUsage } from '../../utils';

export async function seedPhysicalInventoryN429GR(
   prisma: PrismaClient,
   customerId: string,
   aircraftId: string,
   baseOfOperationId: string,
) {
   // Create products with upsert and store IDs
   console.log('Creating Bell 429 products with upsert...');

   const airframeProduct = await prisma.product.upsert({
      where: { id: 'cm7km86rr000108l8ct6adys3' },
      update: {},
      create: {
         id: 'cm7km86rr000108l8ct6adys3',
         name: 'Bell 429 Airframe',
         description: 'Main airframe for Bell 429',
         part_number: 'BELL-429-AF',
         manufacturer: 'Bell',
         model: 'Bell 429',
         quantity_in_stock: 1,
         reorder_threshold: 0,
         category: 'Aircraft Components',
         sub_category: 'Airframe',
         unit_price: 1200000.0,
      },
   });

   const engineProduct = await prisma.product.upsert({
      where: { id: 'cm7km86rt000208l8ct6adyt4' },
      update: {},
      create: {
         id: 'cm7km86rt000208l8ct6adyt4',
         name: 'Pratt & Whitney PW207D1 Engine',
         description: 'Turboshaft Engine for Bell 429',
         part_number: 'PW207D1',
         manufacturer: 'Pratt & Whitney',
         model: 'PW207D1',
         quantity_in_stock: 2,
         reorder_threshold: 0,
         category: 'Aircraft Components',
         sub_category: 'Engines',
         unit_price: 500000.0,
      },
   });

   const rotorSystemProduct = await prisma.product.upsert({
      where: { id: 'cm7km86ru000308l8ct6adyu5' },
      update: {},
      create: {
         id: 'cm7km86ru000308l8ct6adyu5',
         name: 'Bell 429 Rotor System',
         description: 'Rotor System for Bell 429',
         part_number: 'BELL-429-RS',
         manufacturer: 'Bell',
         model: 'Bell 429',
         quantity_in_stock: 2,
         reorder_threshold: 0,
         category: 'Aircraft Components',
         sub_category: 'Rotor Systems',
         unit_price: 350000.0,
      },
   });

   console.log('Creating customer to product map N429GR...');
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
            product_id: rotorSystemProduct.id,
            base_of_operation_id: baseOfOperationId,
         },
      ],
   });

   console.log('Creating N429GR airframe inventory and metrics...');
   const airframeMetrics = [
      {
         metric_type: MetricType.FLIGHT_HOURS,
         value: 600,
         recorded_at: new Date('2024-03-01'),
      },
      {
         metric_type: MetricType.FLIGHT_HOURS,
         value: 600,
         recorded_at: new Date('2024-06-01'),
      },
      {
         metric_type: MetricType.LANDINGS,
         value: 1550,
         recorded_at: new Date('2024-03-01'),
      },
      {
         metric_type: MetricType.LANDINGS,
         value: 1550,
         recorded_at: new Date('2024-06-01'),
      },
   ];

   // Airframe for N429GR
   const airframeInventoryItem = await prisma.physicalInventoryItem.upsert({
      where: { id: 'clz4b429a0001asdf8b2r1q9n' },
      update: {
         aircraft_id: aircraftId,
         show_on_aircraft: true,
         current_usage: calculateCurrentUsage(airframeMetrics),
      },
      create: {
         id: 'clz4b429a0001asdf8b2r1q9n',
         customer_id: customerId,
         product_id: airframeProduct.id,
         aircraft_id: aircraftId,
         show_on_aircraft: true,
         number: 'INV-AIRFRAME-429GR',
         name: 'Bell 429 Airframe',
         serial_number: 'SN429001',
         description: 'Main airframe for Bell 429 N429GR',
         current_usage: calculateCurrentUsage(airframeMetrics),
      },
   });

   console.log('Creating N429GR engine 1 inventory and metrics...');
   const engine1Metrics = [
      {
         metric_type: MetricType.FLIGHT_HOURS,
         value: 600,
         recorded_at: new Date('2024-03-01'),
      },
      {
         metric_type: MetricType.FLIGHT_HOURS,
         value: 600,
         recorded_at: new Date('2024-06-01'),
      },
      {
         metric_type: MetricType.CYCLES,
         value: 1100,
         recorded_at: new Date('2024-03-01'),
      },
      {
         metric_type: MetricType.CYCLES,
         value: 1100,
         recorded_at: new Date('2024-06-01'),
      },
   ];

   await prisma.physicalInventoryItem.upsert({
      where: { id: 'clsf2yl0g000008l57zyf4lxt' },
      update: {
         aircraft_id: aircraftId,
         show_on_aircraft: true,
         parent_id: airframeInventoryItem.id,
         current_usage: calculateCurrentUsage(engine1Metrics),
      },
      create: {
         id: 'clsf2yl0g000008l57zyf4lxt',
         customer_id: customerId,
         product_id: engineProduct.id,
         aircraft_id: aircraftId,
         show_on_aircraft: true,
         parent_id: airframeInventoryItem.id,
         number: 'INV-ENG-429GR-1',
         name: 'Pratt & Whitney PW207D1 Engine 1',
         serial_number: 'PW207D1-001',
         description: 'Left engine for Bell 429 N429GR',
         current_usage: calculateCurrentUsage(engine1Metrics),
      },
   });

   console.log('Creating N429GR engine 2 inventory and metrics...');
   const engine2Metrics = [
      {
         metric_type: MetricType.FLIGHT_HOURS,
         value: 600,
         recorded_at: new Date('2024-03-01'),
      },
      {
         metric_type: MetricType.FLIGHT_HOURS,
         value: 600,
         recorded_at: new Date('2024-06-01'),
      },
      {
         metric_type: MetricType.CYCLES,
         value: 1100,
         recorded_at: new Date('2024-03-01'),
      },
      {
         metric_type: MetricType.CYCLES,
         value: 1100,
         recorded_at: new Date('2024-06-01'),
      },
   ];

   await prisma.physicalInventoryItem.upsert({
      where: { id: 'clsf2yl0g000108l5f8kr4qw3' },
      update: {
         aircraft_id: aircraftId,
         show_on_aircraft: true,
         parent_id: airframeInventoryItem.id,
         current_usage: calculateCurrentUsage(engine2Metrics),
      },
      create: {
         id: 'clsf2yl0g000108l5f8kr4qw3',
         customer_id: customerId,
         product_id: engineProduct.id,
         aircraft_id: aircraftId,
         show_on_aircraft: true,
         parent_id: airframeInventoryItem.id,
         number: 'INV-ENG-429GR-2',
         name: 'Pratt & Whitney PW207D1 Engine 2',
         serial_number: 'PW207D1-002',
         description: 'Right engine for Bell 429 N429GR',
         current_usage: calculateCurrentUsage(engine2Metrics),
      },
   });

   console.log('Creating N429GR main rotor system inventory and metrics...');
   const mainRotorMetrics = [
      {
         metric_type: MetricType.FLIGHT_HOURS,
         value: 600,
         recorded_at: new Date('2024-03-01'),
      },
      {
         metric_type: MetricType.FLIGHT_HOURS,
         value: 600,
         recorded_at: new Date('2024-06-01'),
      },
      {
         metric_type: MetricType.RIN,
         value: 270,
         recorded_at: new Date('2024-03-01'),
      },
      {
         metric_type: MetricType.RIN,
         value: 270,
         recorded_at: new Date('2024-06-01'),
      },
   ];

   await prisma.physicalInventoryItem.upsert({
      where: { id: 'clsf2yl0g000208l55mju8p2f' },
      update: {
         aircraft_id: aircraftId,
         show_on_aircraft: true,
         parent_id: airframeInventoryItem.id,
         current_usage: calculateCurrentUsage(mainRotorMetrics),
      },
      create: {
         id: 'clsf2yl0g000208l55mju8p2f',
         customer_id: customerId,
         product_id: rotorSystemProduct.id,
         aircraft_id: aircraftId,
         show_on_aircraft: true,
         parent_id: airframeInventoryItem.id,
         number: 'INV-ROTOR-MAIN-429GR',
         name: 'Bell 429 Main Rotor System',
         serial_number: 'MR429-001',
         description: 'Main rotor assembly for Bell 429 N429GR',
         current_usage: calculateCurrentUsage(mainRotorMetrics),
      },
   });

   console.log('Creating N429GR tail rotor system inventory and metrics...');
   const tailRotorMetrics = [
      {
         metric_type: MetricType.FLIGHT_HOURS,
         value: 600,
         recorded_at: new Date('2024-03-01'),
      },
      {
         metric_type: MetricType.FLIGHT_HOURS,
         value: 600,
         recorded_at: new Date('2024-06-01'),
      },
      {
         metric_type: MetricType.RIN,
         value: 270,
         recorded_at: new Date('2024-03-01'),
      },
      {
         metric_type: MetricType.RIN,
         value: 270,
         recorded_at: new Date('2024-06-01'),
      },
   ];

   await prisma.physicalInventoryItem.upsert({
      where: { id: 'clsf2yl0g000308l59kbn2lp4' },
      update: {
         aircraft_id: aircraftId,
         show_on_aircraft: true,
         parent_id: airframeInventoryItem.id,
         current_usage: calculateCurrentUsage(tailRotorMetrics),
      },
      create: {
         id: 'clsf2yl0g000308l59kbn2lp4',
         customer_id: customerId,
         product_id: rotorSystemProduct.id,
         aircraft_id: aircraftId,
         show_on_aircraft: true,
         parent_id: airframeInventoryItem.id,
         number: 'INV-ROTOR-TAIL-429GR',
         name: 'Bell 429 Tail Rotor System',
         serial_number: 'TR429-001',
         description: 'Tail rotor assembly for Bell 429 N429GR',
         current_usage: calculateCurrentUsage(tailRotorMetrics),
      },
   });
}
