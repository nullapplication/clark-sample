import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../prisma-client';

// todo: hardcoding the customer id for now for tenant isolation
const customerId = 'cm6sgh61g00070cjmh30y819q';
const isAdmin = true; // todo: ensure is an admin user

export async function GET(req: NextRequest) {
   try {
      const { searchParams } = new URL(req.url);
      const page = parseInt(searchParams.get('page') || '1', 10);
      const limit = parseInt(searchParams.get('limit') || '10', 10);
      const regulationAuthority = searchParams.get('regulation_authority');
      const status = searchParams.get('status');
      const sortBy = searchParams.get('sortBy') || 'created_at';
      const sortOrder =
         searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc';
      const base_of_operation_id = searchParams.get('base_of_operation_id');

      // Define filters
      const where: any = {
         deleted: false,
         customer_id: customerId, // Ensure `customerId` is defined in your environment or session
         is_accelerated: true,
      };

      // Optionally add filters
      if (base_of_operation_id)
         where.base_of_operation_id = base_of_operation_id;
      if (regulationAuthority) where.regulation_authority = regulationAuthority;
      if (status) where.status = status;

      // Fetch data with filtering & pagination
      const aircraft = await prisma.aircraft.findMany({
         select: {
            id: true,
            tail_number: true,
            image_url: true,
            model: true,
            manufacturer: true,
            year_of_manufacture: true,
            serial_number: true,
            last_flight_date: true,
            status: true,
            status_reason: true,
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
         where,
         orderBy: { [sortBy]: sortOrder },
         skip: (page - 1) * limit,
         take: limit,
      });

      const totalAircraft = await prisma.aircraft.count({ where });

      return NextResponse.json({
         page,
         limit,
         total: totalAircraft,
         totalPages: Math.ceil(totalAircraft / limit),
         data: aircraft,
      });
   } catch (error) {
      console.error('Error fetching aircraft data:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}

export async function POST(req: NextRequest) {
   try {
      // Ensure user is an admin
      if (!isAdmin) {
         return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }

      // Parse request body
      const body = await req.json();

      const {
         tail_number,
         serial_number,
         model,
         manufacturer,
         year_of_manufacture,
         category,
         registration_country,
         base_of_operation_id,
         owner,
         operator,
         home_base_airport,
         last_flight_date,
         last_major_inspection,
         maintenance_program,
         next_inspection_due,
         max_takeoff_weight,
         max_fuel_capacity,
         engine_model,
         engine_manufacturer,
         number_of_engines,
         avionics_package,
         pressurization,
         is_ifr_certified,
         airworthiness_certificate_expiry,
         registration_expiry,
         insurance_policy_number,
         insurancy_expiry,
         leasing_status,
         leasing_company,
         lease_expiry,
         notes,
      } = body;

      // Create new aircraft entry
      const aircraft = await prisma.aircraft.create({
         data: {
            customer_id: customerId,
            tail_number,
            serial_number,
            model,
            manufacturer,
            year_of_manufacture,
            category,
            registration_country,
            base_of_operation_id,
            owner,
            operator,
            home_base_airport,
            last_flight_date: last_flight_date
               ? new Date(last_flight_date)
               : null,
            last_major_inspection: last_major_inspection
               ? new Date(last_major_inspection)
               : null,
            maintenance_program,
            next_inspection_due: next_inspection_due
               ? new Date(next_inspection_due)
               : null,
            max_takeoff_weight,
            max_fuel_capacity,
            engine_model,
            engine_manufacturer,
            number_of_engines,
            avionics_package,
            pressurization,
            is_ifr_certified,
            airworthiness_certificate_expiry: airworthiness_certificate_expiry
               ? new Date(airworthiness_certificate_expiry)
               : null,
            registration_expiry: registration_expiry
               ? new Date(registration_expiry)
               : null,
            insurance_policy_number,
            insurance_expiry: insurancy_expiry
               ? new Date(insurancy_expiry)
               : null,
            leasing_status,
            leasing_company,
            lease_expiry: lease_expiry ? new Date(lease_expiry) : null,
            notes,
         },
      });

      return NextResponse.json(aircraft);
   } catch (error) {
      console.error('Error creating aircraft:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
