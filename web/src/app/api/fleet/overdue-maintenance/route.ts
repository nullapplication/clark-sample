import { NextResponse } from 'next/server';
import prisma from '../../../prisma-client';

// todo: hardcoding the customer id for now for tenant isolation
const customerId = 'cm6sgh61g00070cjmh30y819q';

export async function GET() {
   try {
      const maintenance = await prisma.$queryRaw`
          SELECT 
            'Scheduled' AS maintenance_type, 
            sm.id AS maintenance_id,
            sm.aircraft_id,
            sm.name AS title,
            sm.description,
            sm.ata_code,
            sm.task_number,
            sm.interval_hours,
            sm.interval_cycles,
            sm.interval_landings,
            sm.interval_days,
            sm.last_performed_at,
            sm.last_performed_hours,
            sm.last_performed_cycles,
            sm.last_performed_landings,
            sm.next_due_cycles,
            sm.next_due_hours,
            sm.next_due_landings,
            sm.next_due_date,
            sm.projected_next_due,
            sm.status::TEXT AS status, -- Cast to TEXT to align with unscheduled maintenance
            sm.priority::TEXT as priority, -- Cast to TEXT to align with unscheduled maintenance
            sm.notes,
            a.total_flight_hours, 
            a.engine_cycles, 
            a.landings
        FROM scheduled_maintenance sm
        JOIN Aircraft a ON sm.aircraft_id = a.id
        WHERE a.customer_id = ${customerId}
        AND (
            sm.next_due_hours < a.total_flight_hours 
            OR sm.next_due_cycles < a.engine_cycles
            OR sm.next_due_landings < a.landings
            OR sm.next_due_date < NOW()
        )
  
        UNION ALL
  
        SELECT 
            'Unscheduled' AS maintenance_type, 
            um.id AS maintenance_id,
            um.aircraft_id,
            um.title,
            um.description,
            um.ata_code,
            NULL AS task_number,
            NULL AS interval_hours,
            NULL AS interval_cycles,
            NULL AS interval_landings,
            NULL AS interval_days,
            NULL AS last_performed_at,
            NULL AS last_performed_hours,
            NULL AS last_performed_cycles,
            NULL AS last_performed_landings,
            NULL AS next_due_cycles,
            NULL AS next_due_hours,
            NULL AS next_due_landings,
            um.deferred_until AS next_due_date,
            um.deferred_until AS projected_next_due,
            um.status::TEXT as status, -- Cast to TEXT to align with scheduled maintenance
            um.severity::TEXT AS priority, -- Cast to TEXT to align with scheduled maintenance
            NULL AS notes,
            a.total_flight_hours, 
            a.engine_cycles, 
            a.landings
        FROM unscheduled_maintenance um
        JOIN Aircraft a ON um.aircraft_id = a.id
        WHERE a.customer_id = ${customerId}
        AND um.status IN ('OPEN', 'DEFERRED')
        AND um.deferred_until IS NOT NULL
        AND um.deferred_until < NOW()
        ORDER BY next_due_date ASC;
        `;

      return NextResponse.json(maintenance, { status: 201 });
   } catch (error) {
      console.error('Error retrieving open issues:', error);
      return NextResponse.json(
         { error: 'Error retrieving open issues' },
         { status: 500 },
      );
   }
}
