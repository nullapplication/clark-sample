import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../prisma-client';

// todo: hardcoding the customer id for now for tenant isolation
const customerId = 'cm6sgh61g00070cjmh30y819q';

export async function GET(req: NextRequest) {
   try {
      const url = new URL(req.url);
      const searchParams = url.searchParams;

      const page = parseInt(searchParams.get('page') || '1', 10);
      const limit = parseInt(searchParams.get('limit') || '10', 10);
      const sortBy = searchParams.get('sortBy') || 'order_number';
      const sortOrder =
         searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc';

      const where = { customer_id: customerId };

      // Fetch paginated purchase orders
      const orders = await prisma.purchaseOrder.findMany({
         select: {
            order_number: true,
            status: true,
            total_cost: true,
            ordered_by: true,
            approved_by: true,
            ordered_at: true,
            received_at: true,
            notes: true,
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
         orderBy: { [sortBy]: sortOrder },
         skip: (page - 1) * limit,
         take: limit,
      });

      // Fetch total count of purchase orders
      const totalOrders = await prisma.purchaseOrder.count({ where });

      return NextResponse.json({
         page,
         limit,
         total: totalOrders,
         totalPages: Math.ceil(totalOrders / limit),
         data: orders,
      });
   } catch (error) {
      console.error('Error fetching purchase orders:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
