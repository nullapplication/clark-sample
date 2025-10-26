import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../../prisma-client';

// todo: hardcoding the customer id for now for tenant isolation
const customerId = 'cm6sgh61g00070cjmh30y819q';

export async function GET(
   req: NextRequest,
   props: { params: Promise<{ tail_number: string; id: string }> },
) {
   const params = await props.params;
   try {
      const id = params.id;
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

      const scheduledMaintenance = await prisma.scheduledMaintenance.findUnique(
         {
            select: {
               id: true,
               physical_inventory_id: true,
               aircraft_id: true,
               name: true,
               description: true,
               standard_operating_procedure: true,
               ata_code: true,
               task_number: true,
               status: true,
               priority: true,
               regulation_authority: true,
               regulation_reference: true,
               maintenance_type: true,
               notes: true,
               intervals: {
                  select: {
                     id: true,
                     interval_type: true,
                     interval_value: true,
                     metric_type: true,
                  },
               },
            },
            where: {
               aircraft_id: aircraft.id,
               id: id,
            },
         },
      );

      return NextResponse.json(scheduledMaintenance);
   } catch (error) {
      console.error('Error fetching scheduled maintenance:', error.stack);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
