import { NextRequest, NextResponse } from 'next/server';
import prisma from '@prisma-client';

// todo: hardcoding the customer id for now for tenant isolation
const customerId = 'cm6sgh61g00070cjmh30y819q';

export async function GET(
   req: NextRequest,
   props: { params: Promise<{ id: string }> },
) {
   const params = await props.params;
   try {
      const id = params.id;

      const dueListItem = await prisma.maintenanceDueProjection.findUnique({
         select: {
            id: true,
            physical_inventory_id: true,
            aircraft_id: true,
            name: true,
            description: true,
            ata_code: true,
            task_number: true,
            status: true,
            priority: true,
            maintenance_type: true,
            due_reason: true,
            next_due_date: true,
            days_remaining: true,
            scheduled_maintenance: {
               select: {
                  name: true,
                  description: true,
               },
            },
         },
         where: {
            aircraft: {
               customer_id: customerId,
            },
            id: id,
         },
      });

      return NextResponse.json(dueListItem);
   } catch (error) {
      console.error('Error fetching due list item:', error.stack);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
