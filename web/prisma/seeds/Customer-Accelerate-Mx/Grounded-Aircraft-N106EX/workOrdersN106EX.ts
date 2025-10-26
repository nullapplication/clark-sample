import { PrismaClient } from '@prisma/client';
import { SCHEDULED_MAINTENANCE_IDS } from './constants';

export async function seedWorkOrdersN106EX(
   prisma: PrismaClient,
   customerId: string,
   aircraftId: string,
   baseOfOperationId: string,
) {
   console.log('Creating work order 1 on N106EX...');
   const workOrder1 = await prisma.workOrder.upsert({
      where: { id: 'cm8g3mnqy00033j6j2dstjcxc' },
      update: {},
      create: {
         id: 'cm8g3mnqy00033j6j2dstjcxc',
         aircraft_id: aircraftId,
         customer_id: customerId,
         base_of_operation_id: baseOfOperationId,
         work_order_number: 'WO-001',
         description: 'Perform 100-hour inspection',
         status: 'OPEN',
         priority: 'MEDIUM',
      },
   });

   await prisma.workOrderLineItem.createMany({
      data: [
         {
            work_order_id: workOrder1.id,
            description: 'Hourly inspection',
            scheduled_maintenance_id: SCHEDULED_MAINTENANCE_IDS.HOUR_INSPECTION,
            estimated_hours: 6.0,
            labor_cost: 600.0,
            parts_cost: 200.0,
            total_cost: 800.0,
         },
         {
            work_order_id: workOrder1.id,
            description: 'Emergency lighting system check',
            scheduled_maintenance_id:
               SCHEDULED_MAINTENANCE_IDS.EMERGENCY_LIGHTING,
            estimated_hours: 1.5,
            labor_cost: 150.0,
            parts_cost: 50.0,
            total_cost: 200.0,
         },
         {
            work_order_id: workOrder1.id,
            description: 'Oxygen system check',
            scheduled_maintenance_id: SCHEDULED_MAINTENANCE_IDS.OXYGEN_SYSTEM,
            estimated_hours: 2.0,
            labor_cost: 200.0,
            parts_cost: 120.0,
            total_cost: 320.0,
         },
         {
            work_order_id: workOrder1.id,
            description: 'Flight control system check',
            scheduled_maintenance_id: SCHEDULED_MAINTENANCE_IDS.FLIGHT_CONTROL,
            estimated_hours: 3.0,
            labor_cost: 300.0,
            parts_cost: 0.0,
            total_cost: 300.0,
         },
      ],
   });

   console.log('Creating work order 2 on N106EX...');
   const workOrder2 = await prisma.workOrder.upsert({
      where: { id: 'cm8g3pibx00043j6jwvwkrond' },
      update: {},
      create: {
         id: 'cm8g3pibx00043j6jwvwkrond',
         aircraft_id: aircraftId,
         customer_id: customerId,
         base_of_operation_id: baseOfOperationId,
         work_order_number: 'WO-002',
         description: 'Perform 500-cycle inspection on left engine',
         status: 'OPEN',
         priority: 'HIGH',
      },
   });

   await prisma.workOrderLineItem.createMany({
      data: [
         {
            work_order_id: workOrder2.id,
            description: 'Engine inspection',
            scheduled_maintenance_id:
               SCHEDULED_MAINTENANCE_IDS.LEFT_HOT_SECTION,
            estimated_hours: 8.0,
            labor_cost: 800.0,
            parts_cost: 1500.0,
            total_cost: 2300.0,
         },
         {
            work_order_id: workOrder2.id,
            description: 'Engine oil change',
            scheduled_maintenance_id: SCHEDULED_MAINTENANCE_IDS.FUEL_SYSTEM,
            estimated_hours: 4.0,
            labor_cost: 400.0,
            parts_cost: 250.0,
            total_cost: 650.0,
         },
      ],
   });
}
