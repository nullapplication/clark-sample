import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../prisma-client';

// todo: hardcoding the customer id for now for tenant isolation
const customerId = 'cm6sgh61g00070cjmh30y819q';

export async function GET(req: NextRequest) {
   try {
      const url = new URL(req.url);
      const searchParams = url.searchParams;

      const page = parseInt(searchParams.get('page') || '1', 10);
      const limit = parseInt(searchParams.get('limit') || '10', 10);
      const sortBy = searchParams.get('sortBy') || 'work_order_number';
      const sortOrder =
         searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc';

      const where = { customer_id: customerId };

      // Fetch paginated work orders
      const orders = await prisma.workOrder.findMany({
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
         },
         where,
         orderBy: { [sortBy]: sortOrder },
         skip: (page - 1) * limit,
         take: limit,
      });

      // Fetch total count of work orders
      const totalOrders = await prisma.workOrder.count({ where });

      return NextResponse.json({
         page,
         limit,
         total: totalOrders,
         totalPages: Math.ceil(totalOrders / limit),
         data: orders,
      });
   } catch (error) {
      console.error('Error fetching work orders:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
