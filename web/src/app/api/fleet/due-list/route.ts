import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../prisma-client';

// todo: hardcoding the customer id for now for tenant isolation
const customerId = 'cm6sgh61g00070cjmh30y819q';

export async function GET(req: NextRequest) {
   try {
      const url = new URL(req.url);
      const searchParams = url.searchParams;

      const defaultProjectedDueBy = new Date();
      defaultProjectedDueBy.setDate(defaultProjectedDueBy.getDate() + 4 * 7);
      const projected_due_by = searchParams.get('projected_due_by')
         ? new Date(searchParams.get('projected_due_by'))
         : defaultProjectedDueBy;
      const baseOfOperationId = searchParams.get('base_of_operation_id');

      // Fetch maintenance due projections
      const maintenanceDue = await prisma.maintenanceDueProjection.findMany({
         select: {
            id: true,
            aircraft_id: true,
            name: true,
            description: true,
            ata_code: true,
            task_number: true,
            status: true,
            priority: true,
            maintenance_type: true,
            next_due_date: true,
            days_remaining: true,
            is_overdue: true,
            due_reason: true,
            due_metrics: {
               select: {
                  interval_type: true,
                  metric_type: true,
                  interval_value: true,
                  tolerance_value: true,
                  last_performed_value: true,
                  last_performed_date: true,
                  next_due_value: true,
                  next_due_date: true,
                  remaining_value: true,
                  days_remaining: true,
                  is_overdue: true,
               },
            },
            aircraft: {
               select: {
                  tail_number: true,
               },
            },
            scheduled_maintenance: {
               select: {
                  id: true,
                  name: true,
                  description: true,
               },
            },
         },
         where: {
            aircraft: {
               customer_id: customerId,
               base_of_operation_id: baseOfOperationId
                  ? baseOfOperationId
                  : undefined,
            },
            next_due_date: { lt: projected_due_by },
            status: { not: 'INACTIVE' },
         },
      });

      return NextResponse.json({ data: maintenanceDue });
   } catch (error) {
      console.error('Error fetching due maintenance:', error.stack);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
