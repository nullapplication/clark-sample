import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../prisma-client';

// todo: hardcoding the customer id for now for tenant isolation
const customerId = 'cm6sgh61g00070cjmh30y819q';

export async function POST(req: NextRequest, props: { params: Promise<{ tail_number: string }> }) {
   const params = await props.params;
   try {
      const tailNumber = params.tail_number.toUpperCase(); // Ensure uppercase for consistency

      // Parse request body
      const {
         scheduled_maintenance_id,
         work_description,
         performed_by,
         flight_hours_at_service,
         engine_cycles_at_service,
         landing_at_service,
      } = await req.json();

      // Find the aircraft
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

      // Record the performed work
      const work = await prisma.workPerformed.create({
         data: {
            aircraft_id: aircraft.id,
            scheduled_maintenance_id,
            work_description,
            performed_by,
            flight_hours_at_service,
            engine_cycles_at_service,
            landing_at_service,
         },
      });

      return NextResponse.json({ message: 'Work recorded successfully', work });
   } catch (error) {
      console.error('Error recording work:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
