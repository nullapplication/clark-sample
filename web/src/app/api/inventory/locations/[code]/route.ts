import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../prisma-client';

// todo: hardcoding the customer id for now for tenant isolation
const customerId = 'cm6sgh61g00070cjmh30y819q';

export async function GET(req: NextRequest, props: { params: Promise<{ code: string }> }) {
   const params = await props.params;
   try {
      const url = new URL(req.url);
      const searchParams = url.searchParams;

      const page = parseInt(searchParams.get('page') || '1', 10);
      const limit = parseInt(searchParams.get('limit') || '10', 10);
      const sortBy = searchParams.get('sortBy') || 'name';
      const sortOrder =
         searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc';

      const locationCode = params.code;

      // Fetch location details
      const location = await prisma.inventoryLocation.findUnique({
         select: {
            name: true,
            description: true,
            code: true,
            base_of_operation: {
               select: {
                  name: true,
                  street1: true,
                  street2: true,
                  city: true,
                  state: true,
                  zip: true,
                  country: true,
               },
            },
         },
         where: {
            code: locationCode,
            customer_id: customerId,
            deleted: false,
         },
      });

      if (!location) {
         return NextResponse.json(
            { error: 'Location not found' },
            { status: 404 },
         );
      }

      // Fetch inventory items for the location
      const where = {
         inventory_location: {
            code: {
               equals: locationCode,
            },
         },
         customer_id: customerId,
         deleted: false,
      };

      const inventory = await prisma.physicalInventoryItem.findMany({
         select: {
            number: true,
            name: true,
            serial_number: true,
            lot_number: true,
            description: true,
            quantity: true,
            unit_of_measure: true,
         },
         where,
         orderBy: { [sortBy]: sortOrder },
         skip: (page - 1) * limit,
         take: limit,
      });

      const totalInventory = await prisma.physicalInventoryItem.count({
         where,
      });

      return NextResponse.json({
         page,
         limit,
         total: totalInventory,
         totalPages: Math.ceil(totalInventory / limit),
         data: { ...location, inventory },
      });
   } catch (error) {
      console.error('Error fetching location details:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
