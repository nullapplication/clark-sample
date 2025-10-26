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

      // Fetch physical inventory items installed on the aircraft with their usage metrics
      const inventoryWithUsage = await prisma.physicalInventoryItem.findMany({
         where: {
            aircraft_id: aircraft.id,
            deleted: false,
            show_on_aircraft: true,
         },
         select: {
            id: true,
            number: true,
            name: true,
            serial_number: true,
            description: true,
            current_usage: true,
            track_usage_with_parent: true,
            parent_id: true,
            product: {
               select: {
                  part_number: true,
                  manufacturer: true,
                  model: true,
               },
            },
         },
         orderBy: { number: 'asc' },
      });

      return NextResponse.json({ data: inventoryWithUsage });
   } catch (error) {
      console.error('Error fetching aircraft utilization history:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
