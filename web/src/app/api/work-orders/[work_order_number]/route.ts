import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../prisma-client';

// todo: hardcoding the customer id for now for tenant isolation
const customerId = 'cm6sgh61g00070cjmh30y819q';

export async function GET(
   req: NextRequest,
   props: { params: Promise<{ work_order_number: string }> },
) {
   const params = await props.params;
   try {
      const orderNumber = params.work_order_number.toLocaleUpperCase();

      const where = { work_order_number: orderNumber, customer_id: customerId };

      const order = await prisma.workOrder.findUnique({
         select: {
            aircraft_id: true,
            aircraft: {
               select: {
                  tail_number: true,
                  model: true,
                  manufacturer: true,
               },
            },
            base_of_operation_id: true,
            customer_id: true,
            customer: {
               select: {
                  name: true,
               },
            },
            created_at: true,
            completed_at: true,
            description: true,
            id: true,
            priority: true,
            status: true,
            assigned_to: true,
            work_order_number: true,
            line_items: {
               select: {
                  description: true,
                  actual_hours: true,
                  estimated_hours: true,
                  id: true,
                  labor_cost: true,
                  parts_cost: true,
                  scheduled_maintenance_id: true,
                  total_cost: true,
                  unscheduled_maintenance_id: true,
                  updated_at: true,
                  created_at: true,
               },
            },
         },
         where,
      });

      if (!order) {
         return NextResponse.json(
            { error: 'Work order not found' },
            { status: 404 },
         );
      }

      return NextResponse.json(order);
   } catch (error) {
      console.error('Error fetching work order:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
