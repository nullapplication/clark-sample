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

      // Fetch work history for the aircraft
      const workHistory = await prisma.workPerformed.findMany({
         select: {
            aircraft: {
               select: {
                  tail_number: true,
               },
            },
            scheduled_maintenance: {
               select: {
                  name: true,
                  description: true,
                  ata_code: true,
                  task_number: true,
               },
            },
            work_description: true,
            performed_at: true,
            performed_by: true,
            flight_hours_at_service: true,
            engine_cycles_at_service: true,
            landing_at_service: true,
            status: true,
            verified_at: true,
            verified_by: true,
            labor_hours: true,
            parts_used: true,
            total_cost: true,
            regulation_authority: true,
            regulation_reference: true,
            log_entry_reference: true,
            work_category: true,
            repeat_inspection_due: true,
            notes: true,
            logbook_entry: {
               select: {
                  entry_date: true,
                  entry_type: true,
                  entry_description: true,
               },
            },
         },
         where: { aircraft_id: aircraft.id },
         orderBy: { performed_at: 'desc' },
      });

      return NextResponse.json({ data: workHistory });
   } catch (error) {
      console.error('Error fetching work history:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
