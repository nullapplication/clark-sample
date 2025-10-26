import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../prisma-client';

// todo: hardcoding the customer id for now for tenant isolation
const customerId = 'cm6sgh61g00070cjmh30y819q';

export async function POST(
   req: NextRequest,
   props: { params: Promise<{ tail_number: string }> },
) {
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

      const reported_date = new Date();

      const body = await req.json();

      const newReport = await prisma.$transaction(async (prisma) => {
         const customer = await prisma.customer.findUnique({
            select: {
               code: true,
               last_used_unscheduled_maintenance_number: true,
            },
            where: { id: customerId },
         });

         if (!customer) {
            throw new Error('Customer not found');
         }

         // Generate the next code for the unscheduled maintenance
         const unscheduledMaintenanceNumber =
            customer.last_used_unscheduled_maintenance_number + 1;
         await prisma.customer.update({
            where: { id: customerId },
            data: {
               last_used_unscheduled_maintenance_number:
                  unscheduledMaintenanceNumber,
            },
         });

         // Create the unscheduled maintenance report
         const data = {
            ...body,
            aircraft_id: aircraft.id,
            reported_date,
            code: `${customer.code}-${unscheduledMaintenanceNumber}`,
         };
         return await prisma.unscheduledMaintenance.create({
            data,
         });
      });

      return NextResponse.json(newReport, { status: 201 });
   } catch (error) {
      console.error('Error reporting maintenance issue:', error.stack);
      return NextResponse.json(
         { error: 'Error reporting maintenance issue' },
         { status: 500 },
      );
   }
}
