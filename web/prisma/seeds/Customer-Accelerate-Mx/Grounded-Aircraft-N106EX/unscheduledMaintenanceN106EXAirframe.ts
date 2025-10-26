import { PrismaClient } from '@prisma/client';

export async function seedUnscheduledMaintenanceN106EX(
   prisma: PrismaClient,
   physicalInventoryId: string,
   aircraftId: string,
) {
   await prisma.unscheduledMaintenance.upsert({
      where: { id: 'cm7kmj7nd000v08l84wy5f7wc' },
      update: {
         code: 'AMX-4',
      },
      create: {
         id: 'cm7kmj7nd000v08l84wy5f7wc',
         aircraft_id: aircraftId,
         physical_inventory_id: physicalInventoryId,
         reported_by: 'fa_567',
         reported_location: 'LAX Airport',
         code: 'AMX-4',
         title: 'Emergency Exit Light Inoperative',
         description: 'The exit sign light above Door 2L is not illuminated.',
         ata_code: '33-21',
         severity: 'LOW',
         safety_impact: false,
         repeat_issue: false,
         flight_phase: 'PREFLIGHT',
         aircraft_time: 22000,
         engine_cycles: 1750,
         landings: 1200,
         status: 'DEFERRED',
         assigned_to: 'maintenance_tech_333',
         deferred_until: new Date(
            new Date().getTime() + 3 * 24 * 60 * 60 * 1000,
         ), // 3 days from now
      },
   });

   await prisma.unscheduledMaintenance.upsert({
      where: { id: 'cm7kmjbhi000w08l8dhiagxk4' },
      update: {
         code: 'AMX-5',
      },
      create: {
         id: 'cm7kmjbhi000w08l8dhiagxk4',
         aircraft_id: aircraftId,
         physical_inventory_id: physicalInventoryId,
         reported_by: 'pilot_555',
         reported_location: 'MIA Airport',
         code: 'AMX-5',
         title: 'Fuel Quantity Indicator Failure',
         description: 'Fuel gauge reads zero despite fuel onboard.',
         ata_code: '28-42',
         severity: 'GROUNDED',
         safety_impact: true,
         repeat_issue: false,
         flight_phase: 'PREFLIGHT',
         aircraft_time: 25000,
         engine_cycles: 1900,
         landings: 1300,
         status: 'OPEN',
         assigned_to: 'maintenance_tech_777',
      },
   });
}
