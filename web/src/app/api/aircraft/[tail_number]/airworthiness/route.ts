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

      // Check for overdue maintenance using MaintenanceDueProjection
      const hasOverdueMaintenance =
         await prisma.maintenanceDueProjection.findFirst({
            where: {
               aircraft_id: aircraft.id,
               is_overdue: true,
            },
         });

      // Determine airworthiness
      const airworthy = !hasOverdueMaintenance;

      return NextResponse.json({
         aircraft_id: aircraft.id,
         tail_number: tailNumber,
         airworthy,
         message: airworthy
            ? 'Aircraft is airworthy'
            : 'Aircraft has overdue maintenance',
      });
   } catch (error) {
      console.error('Error fetching aircraft airworthiness:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
