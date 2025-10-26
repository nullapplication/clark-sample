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

      // Fetch maintenance requests for the aircraft
      const maintenanceRequests = await prisma.maintenanceRequest.findMany({
         select: {
            maintenance_type: true,
            description: true,
            recorded_by: true,
            recorded_at: true,
            status: true,
            aircraft: {
               select: {
                  tail_number: true,
               },
            },
            resolution_notes: true,
         },
         where: { aircraft_id: aircraft.id },
      });

      return NextResponse.json(maintenanceRequests);
   } catch (error) {
      console.error('Error fetching maintenance requests:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
