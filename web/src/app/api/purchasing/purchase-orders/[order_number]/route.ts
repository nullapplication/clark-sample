import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../prisma-client';

// todo: hardcoding the customer id for now for tenant isolation
const customerId = 'cm6sgh61g00070cjmh30y819q';

export async function GET(
   req: NextRequest,
   props: { params: Promise<{ order_number: string }> },
) {
   const params = await props.params;
   try {
      const orderNumber = params.order_number;

      const where = { order_number: orderNumber, customer_id: customerId };

      const order = await prisma.purchaseOrder.findUnique({
         select: {
            order_number: true,
            status: true,
            total_cost: true,
            ordered_by: true,
            approved_by: true,
            ordered_at: true,
            received_at: true,
            notes: true,
            created_at: true,
            updated_at: true,
            base_of_operation: {
               select: {
                  name: true,
               },
            },
            supplier: {
               select: {
                  name: true,
               },
            },
            line_items: {
               select: {
                  product: {
                     select: {
                        part_number: true,
                        name: true,
                     },
                  },
                  quantity: true,
                  unit_price: true,
                  total_price: true,
               },
            },
         },
         where,
      });

      if (!order) {
         return NextResponse.json(
            { error: 'Purchase order not found' },
            { status: 404 },
         );
      }

      return NextResponse.json(order);
   } catch (error) {
      console.error('Error fetching purchase order:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
