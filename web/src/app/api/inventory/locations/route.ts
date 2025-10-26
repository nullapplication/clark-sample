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
      const sortBy = searchParams.get('sortBy') || 'name';
      const sortOrder =
         searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc';

      const where = { customer_id: customerId, deleted: false };

      // Fetch paginated locations
      const locations = await prisma.inventoryLocation.findMany({
         select: {
            name: true,
            description: true,
            code: true,
         },
         where,
         orderBy: { [sortBy]: sortOrder },
         skip: (page - 1) * limit,
         take: limit,
      });

      // Fetch total locations count
      const totalLocations = await prisma.inventoryLocation.count({ where });

      return NextResponse.json({
         page,
         limit,
         total: totalLocations,
         totalPages: Math.ceil(totalLocations / limit),
         data: locations,
      });
   } catch (error) {
      console.error('Error fetching locations:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
