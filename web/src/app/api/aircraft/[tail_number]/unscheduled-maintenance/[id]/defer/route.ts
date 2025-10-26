import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../../../prisma-client';

// todo: hardcoding the customer id for now for tenant isolation
const customerId = 'cm6sgh61g00070cjmh30y819q';

export async function POST(
   req: NextRequest,
   props: { params: Promise<{ tail_number: string; code: string }> },
) {
   const params = await props.params;
   try {
      const body = await req.json();
      const aircraft = await prisma.aircraft.findUnique({
         where: { tail_number: params.tail_number, customer_id: customerId },
      });

      if (!aircraft) {
         return NextResponse.json(
            { error: 'Aircraft not found' },
            { status: 404 },
         );
      }

      const unscheduledMaintenance =
         await prisma.unscheduledMaintenance.findFirst({
            where: {
               code: params.code,
            },
         });

      if (!unscheduledMaintenance) {
         return NextResponse.json(
            { error: 'Unscheduled maintenance not found' },
            { status: 404 },
         );
      }

      const newDeferral = await prisma.melCdlDeferral.create({
         data: {
            aircraft_id: aircraft.id,
            unscheduled_maintenance_id: unscheduledMaintenance.id,
            mel_reference_number: body.mel_reference_number,
            deferral_reason: body.deferral_reason,
            deferral_status: 'ACTIVE',
            deferral_approved_by: body.deferral_approved_by,
            mel_expiration_date: body.mel_expiration_date,
         },
      });

      return NextResponse.json(newDeferral);
   } catch (error) {
      console.error('Error resolving maintenance issue:', error);
      return NextResponse.json(
         { error: 'Error resolving maintenance issue' },
         { status: 500 },
      );
   }
}
