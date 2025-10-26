import { PrismaClient } from '@prisma/client';
import { SCHEDULED_MAINTENANCE_IDS } from './constants';
import { seedScheduledMaintenanceN106EXAirframeFromManual } from './scheduledMaintenanceN106EXAirframeFromManual';

export async function seedScheduledMaintenanceN106EXAirframe(
   prisma: PrismaClient,
   physicalInventoryId: string,
   aircraftId: string,
) {
   console.log('Seeding scheduled maintenance for Airframe of N106EX');
   await prisma.scheduledMaintenance.upsert({
      where: { id: SCHEDULED_MAINTENANCE_IDS.EMERGENCY_LIGHTING },
      update: {
         standard_operating_procedure: 'SOP-33-001',
      },
      create: {
         id: SCHEDULED_MAINTENANCE_IDS.EMERGENCY_LIGHTING,
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '33',
         name: 'Emergency Lighting Check',
         task_number: 'FAL9X-33-001',
         description:
            'Test all emergency lighting systems for proper operation',
         standard_operating_procedure: 'SOP-33-001',
         status: 'OVERDUE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 300,
         intervals: {
            create: {
               id: 'smi009',
               interval_type: 'TimeBased',
               metric_type: 'FLIGHT_HOURS',
               interval_value: 90,
               tolerance_value: 5,
               last_performed_value: 0,
               last_performed_date: new Date('2024-02-15'),
            },
         },
      },
   });

   await prisma.scheduledMaintenance.upsert({
      where: { id: SCHEDULED_MAINTENANCE_IDS.OXYGEN_SYSTEM },
      update: {
         standard_operating_procedure: `Standard Operating Procedure
Title: Oxygen System Inspection & Cylinder Pressure Check
SOP Number: SOP-35-001
Revision: 1.0
Effective Date: 04/03/2025

1. Purpose
To ensure oxygen system components are in good working order and that cylinder pressure is within safe operating limits.

2. Scope
Applies to all portable and fixed oxygen systems used in [aircraft/facility/equipment name].

3. Responsibilities
Maintenance Personnel: Perform inspection and pressure check.

Supervisor: Verify inspections are completed and logged.

4. Procedure
Safety First

Wear appropriate PPE.

Ensure system is depressurized before handling components (if applicable).

Inspect Components

Check hoses, valves, regulators, and fittings for:

Leaks

Cracks or wear

Corrosion or damage

Ensure oxygen masks and connectors are clean and functional.

Check Cylinder Pressure

Read cylinder gauge:

Confirm pressure is within operational limits (e.g., 1800–2000 psi).

If pressure is below minimum threshold, tag for refill or replacement.

Document Findings

Record date, inspector name, pressure reading, and any defects found.

Report issues to supervisor for corrective action.

5. References
Manufacturer’s oxygen system manual

Applicable safety and regulatory guidelines (e.g., FAA, OSHA)`,
      },
      create: {
         id: SCHEDULED_MAINTENANCE_IDS.OXYGEN_SYSTEM,
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '35',
         name: 'Oxygen System Inspection',
         task_number: 'FAL9X-35-001',
         description:
            'Inspect oxygen system components and check cylinder pressure',
         standard_operating_procedure: `Standard Operating Procedure
Title: Oxygen System Inspection & Cylinder Pressure Check
SOP Number: SOP-35-001
Revision: 1.0
Effective Date: 04/03/2025

1. Purpose
To ensure oxygen system components are in good working order and that cylinder pressure is within safe operating limits.

2. Scope
Applies to all portable and fixed oxygen systems used in [aircraft/facility/equipment name].

3. Responsibilities
Maintenance Personnel: Perform inspection and pressure check.

Supervisor: Verify inspections are completed and logged.

4. Procedure
Safety First

Wear appropriate PPE.

Ensure system is depressurized before handling components (if applicable).

Inspect Components

Check hoses, valves, regulators, and fittings for:

Leaks

Cracks or wear

Corrosion or damage

Ensure oxygen masks and connectors are clean and functional.

Check Cylinder Pressure

Read cylinder gauge:

Confirm pressure is within operational limits (e.g., 1800–2000 psi).

If pressure is below minimum threshold, tag for refill or replacement.

Document Findings

Record date, inspector name, pressure reading, and any defects found.

Report issues to supervisor for corrective action.

5. References
Manufacturer’s oxygen system manual

Applicable safety and regulatory guidelines (e.g., FAA, OSHA)`,
         status: 'OVERDUE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi010',
               interval_type: 'TimeBased',
               metric_type: 'FLIGHT_HOURS',
               interval_value: 180,
               tolerance_value: 10,
               last_performed_value: 0,
               last_performed_date: new Date('2023-11-20'),
            },
         },
      },
   });

   await prisma.scheduledMaintenance.upsert({
      where: { id: SCHEDULED_MAINTENANCE_IDS.BATTERY_CAPACITY },
      update: {},
      create: {
         id: SCHEDULED_MAINTENANCE_IDS.BATTERY_CAPACITY,
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '24',
         name: 'Battery Capacity Check',
         task_number: 'FAL9X-24-001',
         description: 'Perform capacity check on main aircraft battery',
         status: 'DUESOON',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 350,
         intervals: {
            create: {
               id: 'smi011',
               interval_type: 'TimeBased',
               metric_type: 'FLIGHT_HOURS',
               interval_value: 180,
               tolerance_value: 15,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-20'),
            },
         },
      },
   });

   await prisma.scheduledMaintenance.upsert({
      where: { id: SCHEDULED_MAINTENANCE_IDS.FLIGHT_CONTROL },
      update: {},
      create: {
         id: SCHEDULED_MAINTENANCE_IDS.FLIGHT_CONTROL,
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '27',
         name: 'Flight Control Rigging Check',
         task_number: 'FAL9X-27-001',
         description: 'Verify proper rigging of all flight control surfaces',
         status: 'DUESOON',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 16,
         estimated_cost: 3500,
         intervals: {
            create: {
               id: 'smi005',
               interval_type: 'UsageBased',
               metric_type: 'FLIGHT_HOURS',
               interval_value: 500,
               tolerance_value: 25,
               last_performed_value: 100,
               last_performed_date: new Date('2023-12-10'),
            },
         },
      },
   });

   await prisma.scheduledMaintenance.upsert({
      where: { id: SCHEDULED_MAINTENANCE_IDS.LANDING_GEAR },
      update: {},
      create: {
         id: SCHEDULED_MAINTENANCE_IDS.LANDING_GEAR,
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '32',
         name: 'Landing Gear Overhaul',
         task_number: 'FAL9X-32-001',
         description:
            'Complete overhaul of main and nose landing gear assemblies',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 80,
         estimated_cost: 45000,
         intervals: {
            create: {
               id: 'smi002',
               interval_type: 'UsageBased',
               metric_type: 'FLIGHT_HOURS',
               interval_value: 3000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2020-08-15'),
            },
         },
      },
   });

   await prisma.scheduledMaintenance.upsert({
      where: { id: SCHEDULED_MAINTENANCE_IDS.FUEL_SYSTEM },
      update: {},
      create: {
         id: SCHEDULED_MAINTENANCE_IDS.FUEL_SYSTEM,
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '28',
         name: 'Fuel System Inspection',
         task_number: 'FAL9X-28-001',
         description: 'Inspect fuel system components and check for leaks',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1500,
         intervals: {
            create: {
               id: 'smi003',
               interval_type: 'UsageBased',
               metric_type: 'FLIGHT_HOURS',
               interval_value: 400,
               tolerance_value: 20,
               last_performed_value: 150,
               last_performed_date: new Date('2023-11-05'),
            },
         },
      },
   });

   await prisma.scheduledMaintenance.upsert({
      where: { id: SCHEDULED_MAINTENANCE_IDS.HOUR_INSPECTION },
      update: {},
      create: {
         id: SCHEDULED_MAINTENANCE_IDS.HOUR_INSPECTION,
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '05',
         name: '100-Hour Inspection',
         task_number: 'FAL9X-05-002',
         description:
            'Complete 100-hour inspection per manufacturer requirements',
         status: 'DUESOON',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 2000,
      },
   });

   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm014' },
      update: {},
      create: {
         id: 'sm014',
         physical_inventory_id: 'cm7kmf1000r08l87w2cz9xb',
         aircraft_id: 'cm6r01l3502dmj0nu3k4wgj78',
         ata_code: '32',
         name: 'Landing Gear Inspection',
         task_number: 'FAL9X-32-LDG1',
         description: 'Inspection based on number of landings',
         status: 'OVERDUE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 800,
      },
   });

   // Add annual inspection
   console.log('Creating annual inspection item...');
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm015' },
      update: {},
      create: {
         id: 'sm015',
         physical_inventory_id: 'cm7kmf1000r08l87w2cz9xb',
         aircraft_id: 'cm6r01l3502dmj0nu3k4wgj78',
         ata_code: '05',
         name: 'Annual Inspection',
         task_number: 'FAL9X-05-001',
         description:
            'Complete annual inspection per manufacturer requirements',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 24,
         estimated_cost: 5000,
      },
   });

   await seedScheduledMaintenanceN106EXAirframeFromManual(
      prisma,
      physicalInventoryId,
      aircraftId,
   );
}
