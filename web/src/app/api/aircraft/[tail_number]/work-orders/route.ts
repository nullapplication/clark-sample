import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../prisma-client';

// todo: hardcoding the customer id for now for tenant isolation
const customerId = 'cm6sgh61g00070cjmh30y819q';

export async function GET(
   req: NextRequest,
   props: { params: Promise<{ tail_number: string }> },
) {
   const params = await props.params;
   try {
      const url = new URL(req.url);
      const searchParams = url.searchParams;

      const page = parseInt(searchParams.get('page') || '1', 10);
      const limit = parseInt(searchParams.get('limit') || '10', 10);
      const sortBy = searchParams.get('sortBy') || 'work_order_number';
      const sortOrder =
         searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc';

      const tailNumber = params.tail_number.toUpperCase(); // Ensure uppercase for consistency

      // Fetch aircraft by tail number and customer ID
      const aircraft = await prisma.aircraft.findUnique({
         where: {
            tail_number: tailNumber,
            customer_id: customerId, // Ensure customer filtering
         },
      });

      if (!aircraft) {
         return NextResponse.json(
            { error: 'Aircraft not found' },
            { status: 404 },
         );
      }

      // Define inventory filtering
      const where = {
         aircraft_id: aircraft.id,
         deleted: false,
      };

      // Fetch paginated work orders
      const workOrders = await prisma.workOrder.findMany({
         select: {
            id: true,
            work_order_number: true,
            description: true,
            status: true,
            priority: true,
            created_at: true,
            completed_at: true,
            aircraft: {
               select: {
                  tail_number: true,
               },
            },
            customer: {
               select: {
                  name: true,
               },
            },
         },
         where,
         orderBy: { [sortBy]: sortOrder },
         skip: (page - 1) * limit,
         take: limit,
      });

      // Fetch work order count
      const totalWorkOrders = await prisma.workOrder.count({
         where,
      });

      return NextResponse.json({
         page,
         limit,
         total: totalWorkOrders,
         totalPages: Math.ceil(totalWorkOrders / limit),
         data: workOrders,
      });
   } catch (error) {
      console.error('Error fetching aircraft related work orders:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
