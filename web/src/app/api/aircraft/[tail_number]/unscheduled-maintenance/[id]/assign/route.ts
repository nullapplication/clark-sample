import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../../../prisma-client';

// todo: hardcoding the customer id for now for tenant isolation
const customerId = 'cm6sgh61g00070cjmh30y819q';

export async function POST(
   req: NextRequest,
   props: { params: Promise<{ code: string; tail_number: string }> },
) {
   const params = await props.params;
   try {
      const code = params.code;
      const body = await req.json();

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

      const updatedRecord = await prisma.unscheduledMaintenance.update({
         where: {
            code: code,
         },
         data: { assigned_to: body.assigned_to },
      });

      return NextResponse.json(updatedRecord);
   } catch (error) {
      console.error('Error assigning maintenance task:', error);
      return NextResponse.json(
         { error: 'Error assigning maintenance task' },
         { status: 500 },
      );
   }
}
