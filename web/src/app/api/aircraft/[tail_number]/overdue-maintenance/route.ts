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

      // Fetch overdue scheduled maintenance using MaintenanceDueProjection
      const overdueMaintenance = await prisma.maintenanceDueProjection.findMany(
         {
            select: {
               id: true,
               aircraft_id: true,
               name: true,
               description: true,
               ata_code: true,
               task_number: true,
               status: true,
               priority: true,
               maintenance_type: true,
               next_due_date: true,
               days_remaining: true,
               is_overdue: true,
               due_reason: true,
               due_metrics: {
                  select: {
                     interval_type: true,
                     metric_type: true,
                     interval_value: true,
                     tolerance_value: true,
                     last_performed_value: true,
                     last_performed_date: true,
                     next_due_value: true,
                     next_due_date: true,
                     remaining_value: true,
                     days_remaining: true,
                     is_overdue: true,
                  },
               },
            },
            where: {
               aircraft_id: aircraft.id,
               is_overdue: true,
            },
         },
      );

      return NextResponse.json({ data: overdueMaintenance });
   } catch (error) {
      console.error('Error fetching overdue maintenance:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
