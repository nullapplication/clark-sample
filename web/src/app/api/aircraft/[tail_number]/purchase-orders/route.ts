import { NextRequest, NextResponse } from 'next/server';
import prisma from '@prisma-client';

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
      const sortBy = searchParams.get('sortBy') || 'order_number';
      const sortOrder =
         searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc';

      const tailNumber = params.tail_number.toUpperCase();

      const aircraft = await prisma.aircraft.findUnique({
         where: {
            tail_number: tailNumber,
            customer_id: customerId,
         },
      });

      if (!aircraft) {
         return NextResponse.json(
            { error: 'Aircraft not found' },
            { status: 404 },
         );
      }

      const where = {
         aircraft_id: aircraft.id,
         deleted: false,
      };

      const purchaseOrders = await prisma.purchaseOrder.findMany({
         select: {
            id: true,
            order_number: true,
            notes: true,
            ordered_at: true,
            ordered_by: true,
            received_at: true,
            total_cost: true,
            approved_by: true,
            supplier: {
               select: {
                  id: true,
                  name: true,
               },
            },
            status: true,
            created_at: true,
         },
         where,
         orderBy: { [sortBy]: sortOrder },
         skip: (page - 1) * limit,
         take: limit,
      });

      const totalPurchaseOrders = await prisma.purchaseOrder.count({
         where,
      });

      return NextResponse.json({
         page,
         limit,
         total: totalPurchaseOrders,
         totalPages: Math.ceil(totalPurchaseOrders / limit),
         data: purchaseOrders,
      });
   } catch (error) {
      console.error('Error fetching aircraft related purchase orders:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
