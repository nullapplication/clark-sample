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

      const parentPhysicalInventoryItemId = searchParams.get('parent_id');

      const page = parseInt(searchParams.get('page') || '1', 10);
      const limit = parseInt(searchParams.get('limit') || '10', 10);
      const sortBy = searchParams.get('sortBy') || 'name';
      const sortOrder =
         searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc';

      const tailNumber = params.tail_number.toUpperCase();

      // Fetch aircraft by tail number and customer ID
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

      // Define inventory filtering
      const where = {
         aircraft_id: aircraft.id,
         deleted: false,
         ...(parentPhysicalInventoryItemId !== null && {
            parent_id: parentPhysicalInventoryItemId,
         }),
      };
      console.log(JSON.stringify(where, null, 2));

      // Fetch paginated inventory data
      const inventory = await prisma.physicalInventoryItem.findMany({
         select: {
            number: true,
            name: true,
            serial_number: true,
            lot_number: true,
            description: true,
            inventory_location: true,
            quantity: true,
            unit_of_measure: true,
            product: {
               select: {
                  part_number: true,
                  manufacturer: true,
                  model: true,
               },
            },
         },
         where,
         orderBy: { [sortBy]: sortOrder },
         skip: (page - 1) * limit,
         take: limit,
      });

      // Fetch total inventory count
      const totalInventory = await prisma.physicalInventoryItem.count({
         where,
      });

      return NextResponse.json({
         page,
         limit,
         total: totalInventory,
         totalPages: Math.ceil(totalInventory / limit),
         data: inventory,
      });
   } catch (error) {
      console.error('Error fetching aircraft inventory:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
