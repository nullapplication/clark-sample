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
      const sortBy = searchParams.get('sortBy') || 'created_at';
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

      // Define maintenance filtering
      const where = {
         aircraft_id: aircraft.id,
         deleted: false,
      };

      // Fetch paginated scheduled maintenance data with intervals
      const scheduledMaintenance = await prisma.scheduledMaintenance.findMany({
         select: {
            id: true,
            name: true,
            description: true,
            ata_code: true,
            task_number: true,
            status: true,
            priority: true,
            maintenance_type: true,
            notes: true,
            created_at: true,
            updated_at: true,
            intervals: {
               select: {
                  id: true,
                  interval_type: true,
                  metric_type: true,
                  interval_value: true,
                  tolerance_value: true,
                  adjusted_interval_value: true,
                  last_performed_value: true,
                  last_performed_date: true,
                  recurrence_pattern: true,
                  recurrence_days: true,
                  recurrence_months: true,
                  recurrence_interval: true,
               },
            },
         },
         where,
         orderBy: { [sortBy]: sortOrder },
         skip: (page - 1) * limit,
         take: limit,
      });

      // Fetch total scheduled maintenance count
      const totalMaintenanceItems = await prisma.scheduledMaintenance.count({
         where,
      });

      return NextResponse.json({
         page,
         limit,
         total: totalMaintenanceItems,
         totalPages: Math.ceil(totalMaintenanceItems / limit),
         data: scheduledMaintenance,
      });
   } catch (error) {
      console.error('Error fetching scheduled maintenance:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
