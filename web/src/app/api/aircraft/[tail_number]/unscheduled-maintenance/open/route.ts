import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../../prisma-client';

// todo: hardcoding the customer id for now for tenant isolation
const customerId = 'cm6sgh61g00070cjmh30y819q';

export async function GET(req: NextRequest, props: { params: Promise<{ tail_number: string }> }) {
   const params = await props.params;
   try {
      const tailNumber = params.tail_number.toUpperCase(); // Ensure uppercase for consistency

      // Fetch aircraft by tail number
      const aircraft = await prisma.aircraft.findUnique({
         where: { tail_number: tailNumber, customer_id: customerId },
      });

      if (!aircraft) {
         return NextResponse.json(
            { error: 'Aircraft not found' },
            { status: 404 },
         );
      }

      // Fetch open unscheduled maintenance issues
      const openIssues = await prisma.unscheduledMaintenance.findMany({
         where: {
            aircraft_id: aircraft.id,
            status: 'OPEN',
         },
      });

      return NextResponse.json(openIssues);
   } catch (error) {
      console.error('Error retrieving open issues:', error);
      return NextResponse.json(
         { error: 'Error retrieving open issues' },
         { status: 500 },
      );
   }
}
