import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../prisma-client';

// todo: hardcoding the customer id for now for tenant isolation
const customerId = 'cm6sgh61g00070cjmh30y819q';

export async function GET(
   req: NextRequest,
   props: { params: Promise<{ tail_number: string }> },
) {
   const params = await props.params;
   try {
      const tailNumber = params.tail_number.toUpperCase(); // Ensure uppercase for consistency

      const aircraft = await prisma.aircraft.findUnique({
         select: {
            id: true,
            tail_number: true,
            serial_number: true,
            image_url: true,
            model: true,
            manufacturer: true,
            year_of_manufacture: true,
            category: true,
            registration_country: true,
            owner: true,
            operator: true,
            home_base_airport: true,
            status: true,
            status_reason: true,
            last_flight_date: true,
            last_major_inspection: true,
            maintenance_program: true,
            max_takeoff_weight: true,
            max_fuel_capacity: true,
            engine_model: true,
            engine_manufacturer: true,
            number_of_engines: true,
            avionics_package: true,
            pressurization: true,
            is_ifr_certified: true,
            airworthiness_certificate_expiry: true,
            registration_expiry: true,
            insurance_policy_number: true,
            insurance_expiry: true,
            leasing_status: true,
            leasing_company: true,
            lease_expiry: true,
            notes: true,
            airframe_physical_inventory_id: true,
            customer: {
               select: {
                  name: true,
               },
            },
            installed_physical_inventory_items: {
               select: {
                  id: true,
                  name: true,
                  number: true,
                  serial_number: true,
                  current_usage: true,
               },
               where: {
                  show_on_aircraft: true,
               },
            },
         },
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

      return NextResponse.json(aircraft);
   } catch (error) {
      console.error('Error fetching aircraft:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
