import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../prisma-client';
import { reportDiscrepancyInputSchema } from '@app/_schemas/unscheduled-maintenance';
import {
   FlightPhaseEnum,
   Prisma,
   SeverityEnum,
   UnscheduledMaintenanceStatusEnum,
} from '@prisma/client';

// todo: hardcoding the customer id for now for tenant isolation
const customerId = 'cm6sgh61g00070cjmh30y819q';

export async function GET(req: NextRequest) {
   try {
      const url = new URL(req.url);
      const searchParams = url.searchParams;

      const page = parseInt(searchParams.get('page') || '1', 10);
      const limit = parseInt(searchParams.get('limit') || '10', 10);
      const sortBy = searchParams.get('sortBy') || 'deferred_until';
      const sortOrder =
         searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc';

      // Fetch aircraft for the customer
      const aircraft = await prisma.aircraft.findMany({
         where: { customer_id: customerId },
      });

      if (!aircraft.length) {
         return NextResponse.json(
            { error: 'No access to aircraft' },
            { status: 401 },
         );
      }

      const where = { aircraft_id: { in: aircraft.map((a) => a.id) } };

      // Fetch unscheduled maintenance
      const maintenance = await prisma.unscheduledMaintenance.findMany({
         select: {
            aircraft: {
               select: {
                  tail_number: true,
               },
            },
            ata_code: true,
            title: true,
            description: true,
            deferred_until: true,
            status: true,
         },
         where,
         orderBy: { [sortBy]: sortOrder },
         skip: (page - 1) * limit,
         take: limit,
      });

      // Fetch total maintenance count
      const totalMaintenanceItems = await prisma.unscheduledMaintenance.count({
         where,
      });

      return NextResponse.json({
         page,
         limit,
         total: totalMaintenanceItems,
         totalPages: Math.ceil(totalMaintenanceItems / limit),
         data: maintenance,
      });
   } catch (error) {
      console.error('Error fetching unscheduled maintenance:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}

export async function POST(req: NextRequest) {
   try {
      const body = await req.json();
      const parsedBody = reportDiscrepancyInputSchema.safeParse(body);
      if (!parsedBody.success) {
         return NextResponse.json(
            { error: parsedBody.error.errors },
            { status: 400 },
         );
      }

      // todo: change this to be unique per customer and iterating
      const code = 'UM-' + Date.now().toString(36).toUpperCase();

      // todo: Adam - discuss this model with Nick and see if we need to adjust
      const data: Prisma.UnscheduledMaintenanceCreateInput = {
         aircraft: {
            connect: {
               id: parsedBody.data.aircraft_id,
            },
         },
         code,
         // physical_inventory: {} // todo: need to optional select part associated to mx issue
         title: parsedBody.data.title,
         description: parsedBody.data.description,
         ata_code: parsedBody.data.ata_code,
         severity: parsedBody.data.severity.toUpperCase() as SeverityEnum,
         flight_phase:
            parsedBody.data.flight_phase.toUpperCase() as FlightPhaseEnum,
         status:
            parsedBody.data.status.toUpperCase() as UnscheduledMaintenanceStatusEnum,
         reported_by: parsedBody.data.reported_by,
         reported_date: new Date(parsedBody.data.reported_date) || new Date(),
         // reported_location: null,  // todo: we are not currently collecting this, should we remove it from model?
         safety_impact: parsedBody.data.safety_impact,
         repeat_issue: parsedBody.data.repeat_issue,
         deferred_until: parsedBody.data.deferred_until
            ? new Date(parsedBody.data.deferred_until)
            : null,
         resolved_by: parsedBody.data.resolved_by,
         resolved_date: parsedBody.data.resolved_date
            ? new Date(parsedBody.data.resolved_date)
            : null,
         corrective_action: parsedBody.data.corrective_action,
         created_at: new Date(),
         assigned_to: null, // todo: we are not collecting this on create, should we?
         // aircraft_time  // todo: should this be adjusted to not be directly aircraft and flex for other models?
         // engine_cycles  // todo: should this be adjusted to not be directly aircraft and flex for other models?
         // landings  // todo: should this be adjusted to not be directly aircraft and flex for other models?
         // parts_used  // todo: this is json, is that how we want to store it?  What is schema we want to use if so?
         // mel_cdl_deferral_id  // todo: we are not yet collecting this or have populated the db with options - what should go in here?
      };

      // Create a new unscheduled maintenance record
      const newMaintenance = await prisma.unscheduledMaintenance.create({
         data,
      });

      return NextResponse.json(newMaintenance);
   } catch (error) {
      console.error('Error creating unscheduled maintenance:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
