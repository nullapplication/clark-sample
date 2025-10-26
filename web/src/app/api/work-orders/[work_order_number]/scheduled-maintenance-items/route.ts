import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../prisma-client';

// todo: hardcoding the customer id for now for tenant isolation
const customerId = 'cm6sgh61g00070cjmh30y819q';

export async function GET(
   req: NextRequest,
   props: { params: Promise<{ work_order_number: string }> },
) {
   const params = await props.params;
   try {
      const url = new URL(req.url);
      const searchParams = url.searchParams;

      const page = parseInt(searchParams.get('page') || '1', 10);
      const limit = parseInt(searchParams.get('limit') || '10', 10);
      const sortBy = searchParams.get('sortBy') || 'created_at';
      const sortOrder =
         searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc';

      const workOrderNumber = params.work_order_number.toUpperCase();

      // Fetch workOrder by number and customer ID
      const workOrder = await prisma.workOrder.findUnique({
         where: {
            work_order_number: workOrderNumber,
            customer_id: customerId,
         },
      });

      if (!workOrder) {
         return NextResponse.json(
            { error: 'Work order not found' },
            { status: 404 },
         );
      }

      // Define filtering
      const where = {
         work_order_line_items: {
            some: {
               work_order_id: workOrder.id,
            },
         },
         deleted: false,
      };

      // Fetch paginated related mx items
      const items = await prisma.scheduledMaintenance.findMany({
         select: {
            id: true,
            name: true,
            description: true,
         },
         where,
         orderBy: { [sortBy]: sortOrder },
         skip: (page - 1) * limit,
         take: limit,
      });

      // Fetch total scheduled maintenance count
      const totalItems = await prisma.scheduledMaintenance.count({
         where,
      });

      return NextResponse.json({
         page,
         limit,
         total: totalItems,
         totalPages: Math.ceil(totalItems / limit),
         data: items,
      });
   } catch (error) {
      console.error(
         'Error fetching work order related scheduled items:',
         error,
      );
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
