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
      const sortBy = searchParams.get('sortBy') || 'projected_next_due';
      const sortOrder =
         searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc';

      // Fetch aircraft for the customer
      const aircraft = await prisma.aircraft.findMany({
         where: { customer_id: customerId },
      });

      if (!aircraft.length) {
         return NextResponse.json(
            { error: 'No access to aircraft' },
            { status: 401 },
         );
      }

      const where = { aircraft_id: { in: aircraft.map((a) => a.id) } };

      // Fetch scheduled maintenance
      const maintenance = await prisma.scheduledMaintenance.findMany({
         select: {
            aircraft: {
               select: {
                  tail_number: true,
               },
            },
            ata_code: true,
            task_number: true,
            name: true,
            description: true,
            standard_operating_procedure: true,
            status: true,
            priority: true,
            maintenance_type: true,
         },
         where,
         orderBy: { [sortBy]: sortOrder },
         skip: (page - 1) * limit,
         take: limit,
      });

      // Fetch total maintenance count
      const totalMaintenanceItems = await prisma.scheduledMaintenance.count({
         where,
      });

      return NextResponse.json({
         page,
         limit,
         total: totalMaintenanceItems,
         totalPages: Math.ceil(totalMaintenanceItems / limit),
         data: maintenance,
      });
   } catch (error) {
      console.error('Error fetching scheduled maintenance:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
