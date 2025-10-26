import { PrismaClient } from '@prisma/client';

export async function seedScheduledMaintenanceN106EXAirframeFromManual(
   prisma: PrismaClient,
   physicalInventoryId: string,
   aircraftId: string,
) {
   console.log(
      'Seeding additional scheduled maintenance for Airframe of N106EX',
   );

   // Baggage Compartment Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm016' },
      update: {},
      create: {
         id: 'sm016',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '05',
         name: 'INSPECTION OF THE BAGGAGE COMPARTMENT',
         task_number: '05-32-72-200-802',
         description: 'INSPECTION OF THE BAGGAGE COMPARTMENT',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 800,
         intervals: {
            create: {
               id: 'smi016',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Passenger and Baggage Compartment Doors Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm017' },
      update: {},
      create: {
         id: 'sm017',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '05',
         name: 'GENERAL VISUAL INSPECTION OF THE PASSENGER, BAGGAGE COMPARTMENT, EMERGENCY EXIT AND SERVICING COMPARTMENT DOORS',
         task_number: '05-38-00-210-801-01',
         description:
            'GENERAL VISUAL INSPECTION OF THE PASSENGER, BAGGAGE COMPARTMENT, EMERGENCY EXIT AND SERVICING COMPARTMENT DOORS',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 6,
         estimated_cost: 1200,
         intervals: {
            create: {
               id: 'smi017',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Baggage Compartment Door Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm018' },
      update: {},
      create: {
         id: 'sm018',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '52',
         name: 'VISUAL INSPECTION OF THE BAGGAGE COMPARTMENT DOOR',
         task_number: '52-30-00-200-801-04',
         description:
            'VISUAL INSPECTION OF THE BAGGAGE COMPARTMENT DOOR - INSPECTION OF THE BAGGAGE COMPARTEMENT DOOR',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 800,
         intervals: {
            create: {
               id: 'smi018',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Skin at Stringer 15 Lower Seams Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm019' },
      update: {},
      create: {
         id: 'sm019',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'EDDY-CURRENT INSPECTION OF THE SKIN AT STRINGER 15 LOWER SEAMS',
         task_number: '53-00-00-280-801',
         description:
            'EDDY-CURRENT INSPECTION OF THE SKIN AT STRINGER 15 LOWER SEAMS',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi019',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4400,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // T12 Fuselage Fatigue Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm020' },
      update: {},
      create: {
         id: 'sm020',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'DETAILED FATIGUE INSPECTION OF T12 FUSELAGE',
         task_number: '53-10-00-200-809',
         description: 'DETAILED FATIGUE INSPECTION OF T12 FUSELAGE',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 12,
         estimated_cost: 2400,
         intervals: {
            create: {
               id: 'smi020',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Brackets and Stringers Fatigue Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm021' },
      update: {},
      create: {
         id: 'sm021',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'FATIGUE INSPECTION OF BRACKETS AND STRINGERS BETWEEN FRAME 9 TO 12',
         task_number: '53-10-00-200-816',
         description:
            'FATIGUE INSPECTION OF BRACKETS AND STRINGERS BETWEEN FRAME 9 TO 12',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 10,
         estimated_cost: 2000,
         intervals: {
            create: {
               id: 'smi021',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 8000,
               tolerance_value: 200,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Frame 9 Fasteners Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm022' },
      update: {},
      create: {
         id: 'sm022',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'SPECIAL DETAILED INSPECTION OF FASTENERS ON FRAME 9 OUTBOARD FLANGE',
         task_number: '53-10-00-280-801',
         description:
            'SPECIAL DETAILED INSPECTION OF FASTENERS ON FRAME 9 OUTBOARD FLANGE',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi022',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Windshield Retainers Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm023' },
      update: {},
      create: {
         id: 'sm023',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION (HFEC) FROM OUTSIDE OF THE TOP AND BOTTOM RADIUSES OF THE WINDSHIELD RETAINERS',
         task_number: '53-10-00-280-802',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION (HFEC) FROM OUTSIDE OF THE TOP AND BOTTOM RADIUSES OF THE WINDSHIELD RETAINERS AT THE LH AND RH REAR ARCHES',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 10,
         estimated_cost: 2000,
         intervals: {
            create: {
               id: 'smi023',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Frame 8 Fasteners Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm024' },
      update: {},
      create: {
         id: 'sm024',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION OF FASTENERS ON FRAME 8 OUTBOARD FLANGE',
         task_number: '53-10-00-280-804',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION OF FASTENERS ON FRAME 8 OUTBOARD FLANGE',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi024',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Frame 1 Fatigue Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm025' },
      update: {},
      create: {
         id: 'sm025',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'DETAILED FATIGUE INSPECTION OF FRAME 1 AT THE JUNCTION WITH AVIONIC FRONT RACK FITTINGS BEAMS AND STIFFENERS',
         task_number: '53-10-01-220-801',
         description:
            'DETAILED FATIGUE INSPECTION OF FRAME 1 AT THE JUNCTION WITH AVIONIC FRONT RACK FITTINGS BEAMS AND STIFFENERS',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 10,
         estimated_cost: 2000,
         intervals: {
            create: {
               id: 'smi025',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 8000,
               tolerance_value: 200,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Section T34 Inner Side Fatigue Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm026' },
      update: {},
      create: {
         id: 'sm026',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'FATIGUE INSPECTION OF SECTION T34 INNER SIDE',
         task_number: '53-30-00-200-804',
         description: 'FATIGUE INSPECTION OF SECTION T34 INNER SIDE',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi026',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Section T34 Outer Side Fatigue Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm027' },
      update: {},
      create: {
         id: 'sm027',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'FATIGUE INSPECTION OF SECTION T34 OUTER SIDE',
         task_number: '53-30-00-200-805',
         description: 'FATIGUE INSPECTION OF SECTION T34 OUTER SIDE',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi027',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Panel Outer Skin Fatigue Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm028' },
      update: {},
      create: {
         id: 'sm028',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'FATIGUE INSPECTION OF THE PANEL OUTER SKIN AT THE FOUR CUT-OUT CORNERS',
         task_number: '53-30-00-200-806',
         description:
            'FATIGUE INSPECTION OF THE PANEL OUTER SKIN AT THE FOUR CUT-OUT CORNERS',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi028',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Emergency Exit Surrounding Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm029' },
      update: {},
      create: {
         id: 'sm029',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION (HFEC) OF THE EMERGENCY EXIT SURROUNDING',
         task_number: '53-30-00-280-801',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION (HFEC) OF THE EMERGENCY EXIT SURROUNDING',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi029',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Center Wing Lower Panel Fatigue Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm030' },
      update: {},
      create: {
         id: 'sm030',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'FATIGUE INSPECTION OF THE CENTER WING LOWER PANEL FROM FR20 TO FR26',
         task_number: '53-40-00-200-810',
         description:
            'FATIGUE INSPECTION OF THE CENTER WING LOWER PANEL FROM FR20 TO FR26',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 12,
         estimated_cost: 2400,
         intervals: {
            create: {
               id: 'smi030',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Fuselage Lower Section Fatigue Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm031' },
      update: {},
      create: {
         id: 'sm031',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'DETAILED FATIGUE INSPECTION OF THE FUSELAGE LOWER SECTION- SPLICE AREA BETWEEN FRONT CENTER AND REAR LOWER PANELS',
         task_number: '53-40-00-220-803',
         description:
            'DETAILED FATIGUE INSPECTION OF THE FUSELAGE LOWER SECTION- SPLICE AREA BETWEEN FRONT CENTER AND REAR LOWER PANELS',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 10,
         estimated_cost: 2000,
         intervals: {
            create: {
               id: 'smi031',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Upper Panel Fatigue Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm032' },
      update: {},
      create: {
         id: 'sm032',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION OF UPPER PANEL BETWEEN FR26 AND FR28',
         task_number: '53-40-00-280-805-01',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION OF UPPER PANEL BETWEEN FR26 AND FR28 - SDI OF THE REAR FUEL TANK UPPER PANEL STIFFENERS TOPS AT FRAME 27',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 10,
         estimated_cost: 2000,
         intervals: {
            create: {
               id: 'smi032',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 8000,
               tolerance_value: 200,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Fuel Bay Upper Panel Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm033' },
      update: {},
      create: {
         id: 'sm033',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION (HFEC) OF THE FUEL BAY UPPER PANEL (FR 26)',
         task_number: '53-40-00-280-808',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION (HFEC) OF THE FUEL BAY UPPER PANEL (FR 26)',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi033',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Wing Root Bolt Recesses Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm034' },
      update: {},
      create: {
         id: 'sm034',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'DETAILED FATIGUE INSPECTION OF THE LOWER WING ROOT BOLT RECESSES',
         task_number: '53-41-00-220-802',
         description:
            'DETAILED FATIGUE INSPECTION OF THE LOWER WING ROOT BOLT RECESSES',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi034',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Baggage Compartment Skin Junction Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm035' },
      update: {},
      create: {
         id: 'sm035',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'INSPECTION OF THE JUNCTION BETWEEN INNER SHEET METAL AND BAGGAGE COMPARTMENT SKIN',
         task_number: '53-50-00-200-802',
         description:
            'INSPECTION OF THE JUNCTION BETWEEN INNER SHEET METAL AND BAGGAGE COMPARTMENT SKIN',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 6,
         estimated_cost: 1200,
         intervals: {
            create: {
               id: 'smi035',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Structural Part Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm036' },
      update: {},
      create: {
         id: 'sm036',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'INSPECTION OF STRUCTURAL PART BETWEEN FR33 AND FR41',
         task_number: '53-50-00-200-811-01',
         description: 'INSPECTION OF STRUCTURAL PART BETWEEN FR33 AND FR41',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi036',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // RH Skin Doubler Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm037' },
      update: {},
      create: {
         id: 'sm037',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'DETAILED INSPECTION OF THE RH SKIN DOUBLER OF BAGGAGE COMPARTMENT',
         task_number: '53-50-00-220-801',
         description:
            'DETAILED INSPECTION OF THE RH SKIN DOUBLER OF BAGGAGE COMPARTMENT',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi037',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 8000,
               tolerance_value: 200,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // S-Duct Fatigue Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm038' },
      update: {},
      create: {
         id: 'sm038',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION (LFEC) UNDER S-DUCT',
         task_number: '53-50-00-280-803',
         description: 'SPECIAL DETAILED FATIGUE INSPECTION (LFEC) UNDER S-DUCT',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi038',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Mandolin-Shaped Stub Junction Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm039' },
      update: {},
      create: {
         id: 'sm039',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION AT MANDOLIN-SHAPED STUB JUNCTION AND UNDER THE S-DUCT',
         task_number: '53-50-00-280-804',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION AT MANDOLIN-SHAPED STUB JUNCTION AND UNDER THE S-DUCT',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi039',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Baggage Compartment HFEC Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm040' },
      update: {},
      create: {
         id: 'sm040',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION (HFEC) INSIDE BAGGAGE COMPARTMENT',
         task_number: '53-50-00-280-806-01',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION (HFEC) INSIDE BAGGAGE COMPARTMENT',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi040',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 8000,
               tolerance_value: 200,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Structural Parts Fatigue Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm041' },
      update: {},
      create: {
         id: 'sm041',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION OF STRUCTURAL PARTS BETWEEN FR33 AND FR41',
         task_number: '53-50-00-280-808',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION OF STRUCTURAL PARTS BETWEEN FR33 AND FR41',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi041',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // FR36 and FR37 Gusset Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm042' },
      update: {},
      create: {
         id: 'sm042',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '53',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION (HFEC) OF FR36 FREE FLANGE AND FR37 GUSSET',
         task_number: '53-50-00-280-809',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION (HFEC) OF FR36 FREE FLANGE AND FR37 GUSSET',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi042',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Engine Pylons Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm043' },
      update: {},
      create: {
         id: 'sm043',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '54',
         name: 'INSPECTION OF THE ENGINE PYLONS LOWER AND UPPER SKIN AND FITTINGS',
         task_number: '54-50-00-200-801',
         description:
            'INSPECTION OF THE ENGINE PYLONS LOWER AND UPPER SKIN AND FITTINGS',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi043',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Fin Attachment Fittings Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm044' },
      update: {},
      create: {
         id: 'sm044',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '55',
         name: 'INSPECTION OF THE FIN ATTACHMENT FITTINGS',
         task_number: '55-30-00-200-803',
         description: 'INSPECTION OF THE FIN ATTACHMENT FITTINGS',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 6,
         estimated_cost: 1200,
         intervals: {
            create: {
               id: 'smi044',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Wing Lower Panels Fatigue Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm045' },
      update: {},
      create: {
         id: 'sm045',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'FATIGUE INSPECTION OF THE WING LOWER PANELS',
         task_number: '57-10-00-200-804',
         description: 'FATIGUE INSPECTION OF THE WING LOWER PANELS',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 12,
         estimated_cost: 2400,
         intervals: {
            create: {
               id: 'smi045',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Wing Lower Panels Longitudinal Splices Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm046' },
      update: {},
      create: {
         id: 'sm046',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'DETAILED FATIGUE INSPECTION OF THE WING LOWER PANELS LONGITUDINAL SPLICES',
         task_number: '57-10-00-220-802',
         description:
            'DETAILED FATIGUE INSPECTION OF THE WING LOWER PANELS LONGITUDINAL SPLICES',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 10,
         estimated_cost: 2000,
         intervals: {
            create: {
               id: 'smi046',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Wing Rear Spars Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm047' },
      update: {},
      create: {
         id: 'sm047',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'DETAILED INSPECTION OF THE WING REAR SPARS',
         task_number: '57-10-00-220-804',
         description: 'DETAILED INSPECTION OF THE WING REAR SPARS',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 10,
         estimated_cost: 2000,
         intervals: {
            create: {
               id: 'smi047',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Wing Lower Panels Tensile Splice Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm048' },
      update: {},
      create: {
         id: 'sm048',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'SPECIAL DETAILED INSPECTION (HFEC) OF THE TENSIBLE SPLICE BETWEEN THE MIDDLE AND THE REAR WING LOWER PANELS',
         task_number: '57-10-00-280-802',
         description:
            'SPECIAL DETAILED INSPECTION (HFEC) OF THE TENSIBLE SPLICE BETWEEN THE MIDDLE AND THE REAR WING LOWER PANELS',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 12,
         estimated_cost: 2400,
         intervals: {
            create: {
               id: 'smi048',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 12000,
               tolerance_value: 300,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Aileron Servoactuator Fitting Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm049' },
      update: {},
      create: {
         id: 'sm049',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'DETAILED INSPECTION OF THE AILERON SERVOACTUATOR FITTING',
         task_number: '57-10-05-220-801',
         description:
            'DETAILED INSPECTION OF THE AILERON SERVOACTUATOR FITTING',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 6,
         estimated_cost: 1200,
         intervals: {
            create: {
               id: 'smi049',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 3300,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Wing Front Spars Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm050' },
      update: {},
      create: {
         id: 'sm050',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'DETAILED INSPECTION OF THE WING FRONT SPARS',
         task_number: '57-40-00-220-801',
         description: 'DETAILED INSPECTION OF THE WING FRONT SPARS',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 10,
         estimated_cost: 2000,
         intervals: {
            create: {
               id: 'smi050',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Front Wing Spar Roller Support Fittings Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm051' },
      update: {},
      create: {
         id: 'sm051',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION (HFEC) ON FRONT WING SPAR AT ROLLER SUPPORT FITTINGS',
         task_number: '57-40-00-280-801',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION (HFEC) ON FRONT WING SPAR AT ROLLER SUPPORT FITTINGS',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi051',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Front Spar Fastener Holes Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm052' },
      update: {},
      create: {
         id: 'sm052',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION OF THE FASTENER HOLES AT THE FRONT SPAR / WING LOWER PANEL CONNECTIONS',
         task_number: '57-40-00-280-802-02',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION OF THE FASTENER HOLES AT THE FRONT SPAR / WING LOWER PANEL CONNECTIONS - LH INBOARD SPAR AT TRACK 5',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi052',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Passenger Oxygen System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm053' },
      update: {},
      create: {
         id: 'sm053',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '35',
         name: 'FUNCTIONAL TEST OF THE PASSENGER OXYGEN SYSTEM',
         task_number: '35-20-00-720-801',
         description: 'FUNCTIONAL TEST OF THE PASSENGER OXYGEN SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 800,
         intervals: {
            create: {
               id: 'smi053',
               interval_type: 'UsageBased',
               metric_type: 'FLIGHT_HOURS',
               interval_value: 1650,
               tolerance_value: 50,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Bleed Air System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm054' },
      update: {},
      create: {
         id: 'sm054',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '36',
         name: 'OPERATIONAL TEST OF THE DISTRIBUTION / BLEED AIR SYSTEM (MANIFOLD PRESSURE REGULATING AND SHUT-OFF VALVES)',
         task_number: '36-10-00-710-802',
         description:
            'OPERATIONAL TEST OF THE DISTRIBUTION / BLEED AIR SYSTEM (MANIFOLD PRESSURE REGULATING AND SHUT-OFF VALVES)',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 800,
         intervals: {
            create: {
               id: 'smi054',
               interval_type: 'UsageBased',
               metric_type: 'FLIGHT_HOURS',
               interval_value: 1850,
               tolerance_value: 50,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Shower Water Temperature Control System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm055' },
      update: {},
      create: {
         id: 'sm055',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '38',
         name: 'OPERATIONAL TEST OF THE OPTIONAL SHOWER WATER TEMPERATURE CONTROL SYSTEM',
         task_number: '38-16-00-710-801',
         description:
            'OPERATIONAL TEST OF THE OPTIONAL SHOWER WATER TEMPERATURE CONTROL SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 800,
         intervals: {
            create: {
               id: 'smi055',
               interval_type: 'UsageBased',
               metric_type: 'FLIGHT_HOURS',
               interval_value: 20000,
               tolerance_value: 500,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Shower Water Heater Contactors Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm056' },
      update: {},
      create: {
         id: 'sm056',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '38',
         name: 'OPERATIONAL TEST OF THE OPTIONAL SHOWER WATER HEATER CONTACTORS',
         task_number: '38-16-07-710-801',
         description:
            'OPERATIONAL TEST OF THE OPTIONAL SHOWER WATER HEATER CONTACTORS',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 800,
         intervals: {
            create: {
               id: 'smi056',
               interval_type: 'UsageBased',
               metric_type: 'FLIGHT_HOURS',
               interval_value: 650,
               tolerance_value: 25,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Baggage Compartment Door Locking Mechanism Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm057' },
      update: {},
      create: {
         id: 'sm057',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '52',
         name: 'VISUAL INSPECTION OF THE BAGGAGE COMPARTMENT DOOR - DETAILED INSPECTION OF THE LOCKING MECHANISM ASSEMBLY',
         task_number: '52-30-00-200-801-05',
         description:
            'VISUAL INSPECTION OF THE BAGGAGE COMPARTMENT DOOR - DETAILED INSPECTION OF THE LOCKING MECHANISM ASSEMBLY',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 800,
         intervals: {
            create: {
               id: 'smi057',
               interval_type: 'UsageBased',
               metric_type: 'FLIGHT_HOURS',
               interval_value: 20000,
               tolerance_value: 500,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Cabin/Baggage Compartment Door Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm058' },
      update: {},
      create: {
         id: 'sm058',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '52',
         name: 'GENERAL VISUAL INSPECTION OF THE CABIN / BAGGAGE COMPARTMENT DOOR',
         task_number: '52-53-00-210-801',
         description:
            'GENERAL VISUAL INSPECTION OF THE CABIN / BAGGAGE COMPARTMENT DOOR',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 800,
         intervals: {
            create: {
               id: 'smi058',
               interval_type: 'UsageBased',
               metric_type: 'FLIGHT_HOURS',
               interval_value: 20000,
               tolerance_value: 500,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Door Indicating System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm059' },
      update: {},
      create: {
         id: 'sm059',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '52',
         name: 'OPERATIONAL TEST OF THE DOOR INDICATING SYSTEM',
         task_number: '52-70-00-710-802',
         description: 'OPERATIONAL TEST OF THE DOOR INDICATING SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 800,
         intervals: {
            create: {
               id: 'smi059',
               interval_type: 'UsageBased',
               metric_type: 'FLIGHT_HOURS',
               interval_value: 20000,
               tolerance_value: 500,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // TR Accumulator System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm060' },
      update: {},
      create: {
         id: 'sm060',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '78',
         name: 'FUNCTIONAL TEST OF THE TR ACCUMULATOR SYSTEM',
         task_number: '78-30-00-720-802',
         description: 'FUNCTIONAL TEST OF THE TR ACCUMULATOR SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 800,
         intervals: {
            create: {
               id: 'smi060',
               interval_type: 'UsageBased',
               metric_type: 'FLIGHT_HOURS',
               interval_value: 2500,
               tolerance_value: 50,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Thrust Reverser Door Actuator Locks Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm061' },
      update: {},
      create: {
         id: 'sm061',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '78',
         name: 'OPERATIONAL TEST OF THE THRUST REVERSER DOOR ACTUATOR LOCKS',
         task_number: '78-31-13-710-801',
         description:
            'OPERATIONAL TEST OF THE THRUST REVERSER DOOR ACTUATOR LOCKS',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 800,
         intervals: {
            create: {
               id: 'smi061',
               interval_type: 'UsageBased',
               metric_type: 'FLIGHT_HOURS',
               interval_value: 2500,
               tolerance_value: 50,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Special Detailed Fastener Holes Inspection - LH Outboard Spar
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm062' },
      update: {},
      create: {
         id: 'sm062',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION OF THE FASTENER HOLES AT THE FRONT SPAR / WING LOWER PANEL CONNECTIONS - LH OUTBOARD SPAR AT SLAT CUT-OUT',
         task_number: '57-40-00-280-802-03',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION OF THE FASTENER HOLES AT THE FRONT SPAR / WING LOWER PANEL CONNECTIONS - LH OUTBOARD SPAR AT SLAT CUT-OUT',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi062',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Special Detailed Fastener Holes Inspection - RH Inboard Spar
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm063' },
      update: {},
      create: {
         id: 'sm063',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION OF THE FASTENER HOLES AT THE FRONT SPAR / WING LOWER PANEL CONNECTIONS - RH INBOARD SPAR AT TRACK 5',
         task_number: '57-40-00-280-802-05',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION OF THE FASTENER HOLES AT THE FRONT SPAR / WING LOWER PANEL CONNECTIONS - RH INBOARD SPAR AT TRACK 5',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi063',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Special Detailed Fastener Holes Inspection - RH Outboard Spar
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm064' },
      update: {},
      create: {
         id: 'sm064',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION OF THE FASTENER HOLES AT THE FRONT SPAR / WING LOWER PANEL CONNECTIONS - RH OUTBOARD SPAR AT SLAT CUT-OUT',
         task_number: '57-40-00-280-802-06',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION OF THE FASTENER HOLES AT THE FRONT SPAR / WING LOWER PANEL CONNECTIONS - RH OUTBOARD SPAR AT SLAT CUT-OUT',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi064',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Front Spar Fastener Holes at Roller Supports Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm065' },
      update: {},
      create: {
         id: 'sm065',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION OF THE FASTENER HOLES AT THE FRONT SPAR / WING LOWER PANEL CONNECTIONS AT ROLLER SUPPORTS 5 AND 7',
         task_number: '57-40-00-280-803',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION OF THE FASTENER HOLES AT THE FRONT SPAR / WING LOWER PANEL CONNECTIONS AT ROLLER SUPPORTS 5 AND 7',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi065',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Fastener Holes at Rib 26 Inspection (4000 cycles)
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm066' },
      update: {},
      create: {
         id: 'sm066',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION OF THE FASTENER HOLES AT THE FRONT SPAR / WING LOWER PANEL CONNECTIONS AT RIB 26',
         task_number: '57-40-00-280-804-01',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION OF THE FASTENER HOLES AT THE FRONT SPAR / WING LOWER PANEL CONNECTIONS AT RIB 26',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi066',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Fastener Holes at Rib 26 Inspection (12000 cycles)
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm067' },
      update: {},
      create: {
         id: 'sm067',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION OF THE FASTENER HOLES AT THE FRONT SPAR / WING LOWER PANEL CONNECTIONS AT RIB 26',
         task_number: '57-40-00-280-804-01-B',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION OF THE FASTENER HOLES AT THE FRONT SPAR / WING LOWER PANEL CONNECTIONS AT RIB 26',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi067',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 12000,
               tolerance_value: 300,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Fastener Holes at Rib 26 Inspection (2350 cycles)
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm068' },
      update: {},
      create: {
         id: 'sm068',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION OF THE FASTENER HOLES AT THE FRONT SPAR / WING LOWER PANEL CONNECTIONS AT RIB 26',
         task_number: '57-40-00-280-804-01-C',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION OF THE FASTENER HOLES AT THE FRONT SPAR / WING LOWER PANEL CONNECTIONS AT RIB 26',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 6,
         estimated_cost: 1200,
         intervals: {
            create: {
               id: 'smi068',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 2350,
               tolerance_value: 50,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Fastener Holes with Shouldered Bushings Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm069' },
      update: {},
      create: {
         id: 'sm069',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION OF THE FASTENER HOLES WITH SHOULDERED BUSHINGS AT THE FRONT SPAR / WING LOWER PANEL CONNECTIONS - INSPECTION OF THE FASTENER HOLES AT SPAR / WING LOWER PANEL CONNECTIONS',
         task_number: '57-40-00-280-805-01',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION OF THE FASTENER HOLES WITH SHOULDERED BUSHINGS AT THE FRONT SPAR / WING LOWER PANEL CONNECTIONS - INSPECTION OF THE FASTENER HOLES AT SPAR / WING LOWER PANEL CONNECTIONS',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi069',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 8000,
               tolerance_value: 200,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Fastener Holes with Shouldered Bushings at Roller Support Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm070' },
      update: {},
      create: {
         id: 'sm070',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION OF THE FASTENER HOLES WITH SHOULDERED BUSHINGS AT THE FRONT SPAR / WING LOWER PANEL CONNECTIONS - INSPECTION OF THE SPAR FASTENER HOLES AT THE ROLLER SUPPORT FITTING/SPAR/WING LOWER PANEL CONNECTIONS',
         task_number: '57-40-00-280-805-02',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION OF THE FASTENER HOLES WITH SHOULDERED BUSHINGS AT THE FRONT SPAR / WING LOWER PANEL CONNECTIONS - INSPECTION OF THE SPAR FASTENER HOLES AT THE ROLLER SUPPORT FITTING/SPAR/WING LOWER PANEL CONNECTIONS',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi070',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // LH Middle Slat Fatigue Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm071' },
      update: {},
      create: {
         id: 'sm071',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'FATIGUE INSPECTION OF THE SLATS - LH MIDDLE SLAT (L9501CM)',
         task_number: '57-45-00-200-801-02',
         description:
            'FATIGUE INSPECTION OF THE SLATS - LH MIDDLE SLAT (L9501CM)',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 6,
         estimated_cost: 1200,
         intervals: {
            create: {
               id: 'smi071',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 2500,
               tolerance_value: 50,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // RH Middle Slat Fatigue Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm072' },
      update: {},
      create: {
         id: 'sm072',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'FATIGUE INSPECTION OF THE SLATS - RH MIDDLE SLAT (R9501CM)',
         task_number: '57-45-00-200-801-05',
         description:
            'FATIGUE INSPECTION OF THE SLATS - RH MIDDLE SLAT (R9501CM)',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 6,
         estimated_cost: 1200,
         intervals: {
            create: {
               id: 'smi072',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 2500,
               tolerance_value: 50,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // LH Outboard Slat Tracks Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm073' },
      update: {},
      create: {
         id: 'sm073',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION OF THE SLAT TRACKS - LH OUTBOARD SLAT (L9502CM)',
         task_number: '57-45-00-280-803-01',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION OF THE SLAT TRACKS - LH OUTBOARD SLAT (L9502CM)',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi073',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // LH Middle Slat Tracks Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm074' },
      update: {},
      create: {
         id: 'sm074',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION OF THE SLAT TRACKS - LH MIDDLE SLAT (L9501CM)',
         task_number: '57-45-00-280-803-02',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION OF THE SLAT TRACKS - LH MIDDLE SLAT (L9501CM)',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi074',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // RH Middle Slat Tracks Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm075' },
      update: {},
      create: {
         id: 'sm075',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION OF THE SLAT TRACKS - RH MIDDLE SLAT (R9501CM)',
         task_number: '57-45-00-280-803-05',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION OF THE SLAT TRACKS - RH MIDDLE SLAT (R9501CM)',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi075',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // RH Outboard Slat Tracks Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm076' },
      update: {},
      create: {
         id: 'sm076',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION OF THE SLAT TRACKS - RH OUTBOARD SLAT (R9502CM)',
         task_number: '57-45-00-280-803-06',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION OF THE SLAT TRACKS - RH OUTBOARD SLAT (R9502CM)',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi076',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Track 15 Front Lug Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm077' },
      update: {},
      create: {
         id: 'sm077',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'SPECIAL DETAILED INSPECTION AT TRACK 15 FRONT LUG',
         task_number: '57-45-00-280-804',
         description: 'SPECIAL DETAILED INSPECTION AT TRACK 15 FRONT LUG',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi077',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 8000,
               tolerance_value: 200,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Inboard Slat Skin Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm078' },
      update: {},
      create: {
         id: 'sm078',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION (BORESCOPIC) OF THE INBOARD SLAT SKIN AT CONNECTION WITH SPAR MEDIAN FLANGE',
         task_number: '57-45-00-280-805',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION (BORESCOPIC) OF THE INBOARD SLAT SKIN AT CONNECTION WITH SPAR MEDIAN FLANGE',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi078',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 8000,
               tolerance_value: 200,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Flap Track Rib 2 and 4 Fatigue Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm079' },
      update: {},
      create: {
         id: 'sm079',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'FATIGUE INSPECTION OF THE FLAP TRACK RIB 2 AND 4',
         task_number: '57-50-00-200-803',
         description: 'FATIGUE INSPECTION OF THE FLAP TRACK RIB 2 AND 4',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi079',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 8000,
               tolerance_value: 200,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Flap Tracks 2 and 5 Fatigue Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm080' },
      update: {},
      create: {
         id: 'sm080',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION OF THE FLAP TRACKS 2 AND 5',
         task_number: '57-50-00-280-802',
         description:
            'SPECIAL DETAILED FATIGUE INSPECTION OF THE FLAP TRACKS 2 AND 5',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 8,
         estimated_cost: 1600,
         intervals: {
            create: {
               id: 'smi080',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 4000,
               tolerance_value: 100,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Flaps Fatigue Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm081' },
      update: {},
      create: {
         id: 'sm081',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '57',
         name: 'SPECIAL DETAILED FATIGUE INSPECTION OF THE FLAPS',
         task_number: '57-50-00-280-803',
         description: 'SPECIAL DETAILED FATIGUE INSPECTION OF THE FLAPS',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 10,
         estimated_cost: 2000,
         intervals: {
            create: {
               id: 'smi081',
               interval_type: 'UsageBased',
               metric_type: 'CYCLES',
               interval_value: 12000,
               tolerance_value: 300,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Passenger Oxygen System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm082' },
      update: {},
      create: {
         id: 'sm082',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '35',
         name: 'FUNCTIONAL TEST OF THE PASSENGER OXYGEN SYSTEM',
         task_number: '35-21-00-710-801',
         description: 'FUNCTIONAL TEST OF THE PASSENGER OXYGEN SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 800,
         intervals: {
            create: {
               id: 'smi082',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 36,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Distribution/Bleed Air System Operational Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm083' },
      update: {},
      create: {
         id: 'sm083',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '36',
         name: 'OPERATIONAL TEST OF THE DISTRIBUTION / BLEED AIR SYSTEM',
         task_number: '36-11-00-710-801',
         description: 'OPERATIONAL TEST OF THE DISTRIBUTION / BLEED AIR SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 800,
         intervals: {
            create: {
               id: 'smi083',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Wing Anti-Ice System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm084' },
      update: {},
      create: {
         id: 'sm084',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '30',
         name: 'OPERATIONAL TEST OF THE WING ANTI-ICE SYSTEM',
         task_number: '30-21-00-710-801',
         description: 'OPERATIONAL TEST OF THE WING ANTI-ICE SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi084',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Engine Anti-Ice System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm085' },
      update: {},
      create: {
         id: 'sm085',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '30',
         name: 'OPERATIONAL TEST OF THE ENGINE ANTI-ICE SYSTEM',
         task_number: '30-21-00-710-802',
         description: 'OPERATIONAL TEST OF THE ENGINE ANTI-ICE SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi085',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Pitot/Static System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm086' },
      update: {},
      create: {
         id: 'sm086',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '34',
         name: 'FUNCTIONAL TEST OF THE PITOT / STATIC SYSTEM',
         task_number: '34-11-00-710-801',
         description: 'FUNCTIONAL TEST OF THE PITOT / STATIC SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 800,
         intervals: {
            create: {
               id: 'smi086',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 24,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Stall Warning System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm087' },
      update: {},
      create: {
         id: 'sm087',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '27',
         name: 'FUNCTIONAL TEST OF THE STALL WARNING SYSTEM',
         task_number: '27-31-00-710-801',
         description: 'FUNCTIONAL TEST OF THE STALL WARNING SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 800,
         intervals: {
            create: {
               id: 'smi087',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Pressurization System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm088' },
      update: {},
      create: {
         id: 'sm088',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '21',
         name: 'OPERATIONAL TEST OF THE PRESSURIZATION SYSTEM',
         task_number: '21-31-00-710-801',
         description: 'OPERATIONAL TEST OF THE PRESSURIZATION SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 800,
         intervals: {
            create: {
               id: 'smi088',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Emergency Evacuation System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm089' },
      update: {},
      create: {
         id: 'sm089',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '25',
         name: 'OPERATIONAL TEST OF THE EMERGENCY EVACUATION SYSTEM',
         task_number: '25-60-00-710-801',
         description: 'OPERATIONAL TEST OF THE EMERGENCY EVACUATION SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi089',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // APU Fire Extinguisher Container Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm090' },
      update: {},
      create: {
         id: 'sm090',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '26',
         name: 'WEIGHT CHECK OF THE APU FIRE EXTINGUISHER CONTAINER',
         task_number: '26-20-00-900-801',
         description: 'WEIGHT CHECK OF THE APU FIRE EXTINGUISHER CONTAINER',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi090',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Cargo Fire Extinguishing System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm091' },
      update: {},
      create: {
         id: 'sm091',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '26',
         name: 'OPERATIONAL TEST OF THE CARGO COMPARTMENT FIRE EXTINGUISHING SYSTEM',
         task_number: '26-23-00-710-801',
         description:
            'OPERATIONAL TEST OF THE CARGO COMPARTMENT FIRE EXTINGUISHING SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi091',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Cargo Fire Detection System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm092' },
      update: {},
      create: {
         id: 'sm092',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '26',
         name: 'OPERATIONAL TEST OF THE CARGO COMPARTMENT FIRE DETECTION SYSTEM',
         task_number: '26-24-00-710-801',
         description:
            'OPERATIONAL TEST OF THE CARGO COMPARTMENT FIRE DETECTION SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi092',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // APU Fire Detection System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm093' },
      update: {},
      create: {
         id: 'sm093',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '26',
         name: 'OPERATIONAL TEST OF THE APU FIRE DETECTION SYSTEM',
         task_number: '26-15-00-710-801',
         description: 'OPERATIONAL TEST OF THE APU FIRE DETECTION SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi093',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Flight Control Operational Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm094' },
      update: {},
      create: {
         id: 'sm094',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '27',
         name: 'OPERATIONAL TEST OF THE FLIGHT CONTROLS',
         task_number: '27-00-00-710-801',
         description: 'OPERATIONAL TEST OF THE FLIGHT CONTROLS',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi094',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Hydraulic Power System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm095' },
      update: {},
      create: {
         id: 'sm095',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '29',
         name: 'OPERATIONAL TEST OF THE HYDRAULIC POWER SYSTEM',
         task_number: '29-10-00-710-801',
         description: 'OPERATIONAL TEST OF THE HYDRAULIC POWER SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 800,
         intervals: {
            create: {
               id: 'smi095',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Landing Gear Emergency Extension Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm096' },
      update: {},
      create: {
         id: 'sm096',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '32',
         name: 'OPERATIONAL TEST OF THE LANDING GEAR EMERGENCY EXTENSION SYSTEM',
         task_number: '32-30-00-710-801',
         description:
            'OPERATIONAL TEST OF THE LANDING GEAR EMERGENCY EXTENSION SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi096',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Landing Gear Retraction Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm097' },
      update: {},
      create: {
         id: 'sm097',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '32',
         name: 'OPERATIONAL TEST OF THE LANDING GEAR RETRACTION SYSTEM',
         task_number: '32-30-00-710-802',
         description: 'OPERATIONAL TEST OF THE LANDING GEAR RETRACTION SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi097',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Brake System Operational Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm098' },
      update: {},
      create: {
         id: 'sm098',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '32',
         name: 'OPERATIONAL TEST OF THE BRAKE SYSTEM',
         task_number: '32-40-00-710-801',
         description: 'OPERATIONAL TEST OF THE BRAKE SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi098',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Anti-Skid System Operational Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm099' },
      update: {},
      create: {
         id: 'sm099',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '32',
         name: 'OPERATIONAL TEST OF THE ANTI-SKID SYSTEM',
         task_number: '32-42-00-710-801',
         description: 'OPERATIONAL TEST OF THE ANTI-SKID SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi099',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Steering System Operational Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm100' },
      update: {},
      create: {
         id: 'sm100',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '32',
         name: 'OPERATIONAL TEST OF THE STEERING SYSTEM',
         task_number: '32-50-00-710-801',
         description: 'OPERATIONAL TEST OF THE STEERING SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi100',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Cockpit Windows Seal Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm101' },
      update: {},
      create: {
         id: 'sm101',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '56',
         name: 'GENERAL VISUAL INSPECTION OF THE COCKPIT WINDOWS SEAL',
         task_number: '56-11-00-200-801',
         description: 'GENERAL VISUAL INSPECTION OF THE COCKPIT WINDOWS SEAL',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 1,
         estimated_cost: 200,
         intervals: {
            create: {
               id: 'smi101',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Crew Oxygen Mask Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm102' },
      update: {},
      create: {
         id: 'sm102',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '35',
         name: 'GENERAL VISUAL INSPECTION OF THE CREW OXYGEN MASK',
         task_number: '35-11-00-200-801',
         description: 'GENERAL VISUAL INSPECTION OF THE CREW OXYGEN MASK',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 1,
         estimated_cost: 200,
         intervals: {
            create: {
               id: 'smi102',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Passenger Oxygen Mask Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm103' },
      update: {},
      create: {
         id: 'sm103',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '35',
         name: 'GENERAL VISUAL INSPECTION OF THE PASSENGER OXYGEN MASK',
         task_number: '35-21-00-200-801',
         description: 'GENERAL VISUAL INSPECTION OF THE PASSENGER OXYGEN MASK',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi103',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Oxygen Cylinder Hydrostatic Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm104' },
      update: {},
      create: {
         id: 'sm104',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '35',
         name: 'HYDROSTATIC TEST OF THE OXYGEN CYLINDER',
         task_number: '35-10-00-900-801',
         description: 'HYDROSTATIC TEST OF THE OXYGEN CYLINDER',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 800,
         intervals: {
            create: {
               id: 'smi104',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 60,
               tolerance_value: 3,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Escape Slide Inflation Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm105' },
      update: {},
      create: {
         id: 'sm105',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '25',
         name: 'INFLATION TEST OF THE ESCAPE SLIDE',
         task_number: '25-60-00-900-801',
         description: 'INFLATION TEST OF THE ESCAPE SLIDE',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 800,
         intervals: {
            create: {
               id: 'smi105',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 36,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Life Vest Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm106' },
      update: {},
      create: {
         id: 'sm106',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '25',
         name: 'GENERAL VISUAL INSPECTION OF THE LIFE VEST',
         task_number: '25-60-00-200-802',
         description: 'GENERAL VISUAL INSPECTION OF THE LIFE VEST',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi106',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Pitot Probe Heating Element Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm107' },
      update: {},
      create: {
         id: 'sm107',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '30',
         name: 'OPERATIONAL TEST OF THE PITOT PROBE HEATING ELEMENT',
         task_number: '30-31-00-710-801',
         description: 'OPERATIONAL TEST OF THE PITOT PROBE HEATING ELEMENT',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi107',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Static Port Heating Element Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm108' },
      update: {},
      create: {
         id: 'sm108',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '30',
         name: 'OPERATIONAL TEST OF THE STATIC PORT HEATING ELEMENT',
         task_number: '30-31-00-710-802',
         description: 'OPERATIONAL TEST OF THE STATIC PORT HEATING ELEMENT',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi108',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // AOA Probe Heating Element Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm109' },
      update: {},
      create: {
         id: 'sm109',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '30',
         name: 'OPERATIONAL TEST OF THE AOA PROBE HEATING ELEMENT',
         task_number: '30-31-00-710-803',
         description: 'OPERATIONAL TEST OF THE AOA PROBE HEATING ELEMENT',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi109',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Emergency Locator Transmitter Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm110' },
      update: {},
      create: {
         id: 'sm110',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '25',
         name: 'OPERATIONAL TEST OF THE EMERGENCY LOCATOR TRANSMITTER',
         task_number: '25-60-00-710-803',
         description: 'OPERATIONAL TEST OF THE EMERGENCY LOCATOR TRANSMITTER',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi110',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Emergency Locator Transmitter Battery Replacement
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm111' },
      update: {},
      create: {
         id: 'sm111',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '25',
         name: 'REPLACEMENT OF THE EMERGENCY LOCATOR TRANSMITTER BATTERY',
         task_number: '25-60-00-900-803',
         description:
            'REPLACEMENT OF THE EMERGENCY LOCATOR TRANSMITTER BATTERY',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi111',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 24,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // VHF Communication System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm112' },
      update: {},
      create: {
         id: 'sm112',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '23',
         name: 'OPERATIONAL TEST OF THE VHF COMMUNICATION SYSTEM',
         task_number: '23-11-00-710-801',
         description: 'OPERATIONAL TEST OF THE VHF COMMUNICATION SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi112',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // HF Communication System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm113' },
      update: {},
      create: {
         id: 'sm113',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '23',
         name: 'OPERATIONAL TEST OF THE HF COMMUNICATION SYSTEM',
         task_number: '23-12-00-710-801',
         description: 'OPERATIONAL TEST OF THE HF COMMUNICATION SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi113',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // SATCOM System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm114' },
      update: {},
      create: {
         id: 'sm114',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '23',
         name: 'OPERATIONAL TEST OF THE SATCOM SYSTEM',
         task_number: '23-13-00-710-801',
         description: 'OPERATIONAL TEST OF THE SATCOM SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi114',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // ATC Transponder System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm115' },
      update: {},
      create: {
         id: 'sm115',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '34',
         name: 'OPERATIONAL TEST OF THE ATC TRANSPONDER SYSTEM',
         task_number: '34-52-00-710-801',
         description: 'OPERATIONAL TEST OF THE ATC TRANSPONDER SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi115',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 24,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // TCAS System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm116' },
      update: {},
      create: {
         id: 'sm116',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '34',
         name: 'OPERATIONAL TEST OF THE TCAS SYSTEM',
         task_number: '34-45-00-710-801',
         description: 'OPERATIONAL TEST OF THE TCAS SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi116',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 24,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Weather Radar System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm117' },
      update: {},
      create: {
         id: 'sm117',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '34',
         name: 'OPERATIONAL TEST OF THE WEATHER RADAR SYSTEM',
         task_number: '34-41-00-710-801',
         description: 'OPERATIONAL TEST OF THE WEATHER RADAR SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi117',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // EGPWS System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm118' },
      update: {},
      create: {
         id: 'sm118',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '34',
         name: 'OPERATIONAL TEST OF THE EGPWS SYSTEM',
         task_number: '34-44-00-710-801',
         description: 'OPERATIONAL TEST OF THE EGPWS SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi118',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // GPS System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm119' },
      update: {},
      create: {
         id: 'sm119',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '34',
         name: 'OPERATIONAL TEST OF THE GPS SYSTEM',
         task_number: '34-42-00-710-801',
         description: 'OPERATIONAL TEST OF THE GPS SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi119',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // FMS System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm120' },
      update: {},
      create: {
         id: 'sm120',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '34',
         name: 'OPERATIONAL TEST OF THE FMS SYSTEM',
         task_number: '34-61-00-710-801',
         description: 'OPERATIONAL TEST OF THE FMS SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi120',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // IRS System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm121' },
      update: {},
      create: {
         id: 'sm121',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '34',
         name: 'OPERATIONAL TEST OF THE IRS SYSTEM',
         task_number: '34-43-00-710-801',
         description: 'OPERATIONAL TEST OF THE IRS SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi121',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // DME System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm122' },
      update: {},
      create: {
         id: 'sm122',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '34',
         name: 'OPERATIONAL TEST OF THE DME SYSTEM',
         task_number: '34-53-00-710-801',
         description: 'OPERATIONAL TEST OF THE DME SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi122',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // VOR System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm123' },
      update: {},
      create: {
         id: 'sm123',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '34',
         name: 'OPERATIONAL TEST OF THE VOR SYSTEM',
         task_number: '34-51-00-710-801',
         description: 'OPERATIONAL TEST OF THE VOR SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi123',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // ADF System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm124' },
      update: {},
      create: {
         id: 'sm124',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '34',
         name: 'OPERATIONAL TEST OF THE ADF SYSTEM',
         task_number: '34-54-00-710-801',
         description: 'OPERATIONAL TEST OF THE ADF SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi124',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Radio Altimeter System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm125' },
      update: {},
      create: {
         id: 'sm125',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '34',
         name: 'OPERATIONAL TEST OF THE RADIO ALTIMETER SYSTEM',
         task_number: '34-46-00-710-801',
         description: 'OPERATIONAL TEST OF THE RADIO ALTIMETER SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi125',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Cockpit Voice Recorder Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm126' },
      update: {},
      create: {
         id: 'sm126',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '23',
         name: 'OPERATIONAL TEST OF THE COCKPIT VOICE RECORDER',
         task_number: '23-71-00-710-801',
         description: 'OPERATIONAL TEST OF THE COCKPIT VOICE RECORDER',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi126',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Flight Data Recorder Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm127' },
      update: {},
      create: {
         id: 'sm127',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '31',
         name: 'OPERATIONAL TEST OF THE FLIGHT DATA RECORDER',
         task_number: '31-31-00-710-801',
         description: 'OPERATIONAL TEST OF THE FLIGHT DATA RECORDER',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi127',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Autopilot System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm128' },
      update: {},
      create: {
         id: 'sm128',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '22',
         name: 'OPERATIONAL TEST OF THE AUTOPILOT SYSTEM',
         task_number: '22-10-00-710-801',
         description: 'OPERATIONAL TEST OF THE AUTOPILOT SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi128',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Autothrottle System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm129' },
      update: {},
      create: {
         id: 'sm129',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '22',
         name: 'OPERATIONAL TEST OF THE AUTOTHROTTLE SYSTEM',
         task_number: '22-31-00-710-801',
         description: 'OPERATIONAL TEST OF THE AUTOTHROTTLE SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi129',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Flight Director System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm130' },
      update: {},
      create: {
         id: 'sm130',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '22',
         name: 'OPERATIONAL TEST OF THE FLIGHT DIRECTOR SYSTEM',
         task_number: '22-40-00-710-801',
         description: 'OPERATIONAL TEST OF THE FLIGHT DIRECTOR SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi130',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Yaw Damper System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm131' },
      update: {},
      create: {
         id: 'sm131',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '22',
         name: 'OPERATIONAL TEST OF THE YAW DAMPER SYSTEM',
         task_number: '22-11-00-710-801',
         description: 'OPERATIONAL TEST OF THE YAW DAMPER SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi131',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Mach Trim System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm132' },
      update: {},
      create: {
         id: 'sm132',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '22',
         name: 'OPERATIONAL TEST OF THE MACH TRIM SYSTEM',
         task_number: '22-12-00-710-801',
         description: 'OPERATIONAL TEST OF THE MACH TRIM SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi132',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Stall Barrier System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm133' },
      update: {},
      create: {
         id: 'sm133',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '27',
         name: 'OPERATIONAL TEST OF THE STALL BARRIER SYSTEM',
         task_number: '27-31-00-710-802',
         description: 'OPERATIONAL TEST OF THE STALL BARRIER SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi133',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Stick Pusher System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm134' },
      update: {},
      create: {
         id: 'sm134',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '27',
         name: 'OPERATIONAL TEST OF THE STICK PUSHER SYSTEM',
         task_number: '27-31-00-710-803',
         description: 'OPERATIONAL TEST OF THE STICK PUSHER SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi134',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Stick Shaker System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm135' },
      update: {},
      create: {
         id: 'sm135',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '27',
         name: 'OPERATIONAL TEST OF THE STICK SHAKER SYSTEM',
         task_number: '27-31-00-710-804',
         description: 'OPERATIONAL TEST OF THE STICK SHAKER SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi135',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Aileron Trim System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm136' },
      update: {},
      create: {
         id: 'sm136',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '27',
         name: 'OPERATIONAL TEST OF THE AILERON TRIM SYSTEM',
         task_number: '27-11-00-710-801',
         description: 'OPERATIONAL TEST OF THE AILERON TRIM SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi136',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Elevator Trim System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm137' },
      update: {},
      create: {
         id: 'sm137',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '27',
         name: 'OPERATIONAL TEST OF THE ELEVATOR TRIM SYSTEM',
         task_number: '27-21-00-710-801',
         description: 'OPERATIONAL TEST OF THE ELEVATOR TRIM SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi137',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Rudder Trim System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm138' },
      update: {},
      create: {
         id: 'sm138',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '27',
         name: 'OPERATIONAL TEST OF THE RUDDER TRIM SYSTEM',
         task_number: '27-22-00-710-801',
         description: 'OPERATIONAL TEST OF THE RUDDER TRIM SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi138',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Flap System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm139' },
      update: {},
      create: {
         id: 'sm139',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '27',
         name: 'OPERATIONAL TEST OF THE FLAP SYSTEM',
         task_number: '27-50-00-710-801',
         description: 'OPERATIONAL TEST OF THE FLAP SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi139',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Slat System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm140' },
      update: {},
      create: {
         id: 'sm140',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '27',
         name: 'OPERATIONAL TEST OF THE SLAT SYSTEM',
         task_number: '27-81-00-710-801',
         description: 'OPERATIONAL TEST OF THE SLAT SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi140',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Speed Brake System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm141' },
      update: {},
      create: {
         id: 'sm141',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '27',
         name: 'OPERATIONAL TEST OF THE SPEED BRAKE SYSTEM',
         task_number: '27-61-00-710-801',
         description: 'OPERATIONAL TEST OF THE SPEED BRAKE SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi141',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Ground Spoilers System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm142' },
      update: {},
      create: {
         id: 'sm142',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '27',
         name: 'OPERATIONAL TEST OF THE GROUND SPOILERS SYSTEM',
         task_number: '27-62-00-710-801',
         description: 'OPERATIONAL TEST OF THE GROUND SPOILERS SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi142',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Flight Spoilers System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm143' },
      update: {},
      create: {
         id: 'sm143',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '27',
         name: 'OPERATIONAL TEST OF THE FLIGHT SPOILERS SYSTEM',
         task_number: '27-63-00-710-801',
         description: 'OPERATIONAL TEST OF THE FLIGHT SPOILERS SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi143',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Horizontal Stabilizer System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm144' },
      update: {},
      create: {
         id: 'sm144',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '27',
         name: 'OPERATIONAL TEST OF THE HORIZONTAL STABILIZER SYSTEM',
         task_number: '27-41-00-710-801',
         description: 'OPERATIONAL TEST OF THE HORIZONTAL STABILIZER SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi144',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Air Data Computer Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm145' },
      update: {},
      create: {
         id: 'sm145',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '34',
         name: 'OPERATIONAL TEST OF THE AIR DATA COMPUTER',
         task_number: '34-11-00-710-802',
         description: 'OPERATIONAL TEST OF THE AIR DATA COMPUTER',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi145',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Flight Instrument System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm146' },
      update: {},
      create: {
         id: 'sm146',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '31',
         name: 'OPERATIONAL TEST OF THE FLIGHT INSTRUMENT SYSTEM',
         task_number: '31-30-00-710-801',
         description: 'OPERATIONAL TEST OF THE FLIGHT INSTRUMENT SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi146',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // ECAM System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm147' },
      update: {},
      create: {
         id: 'sm147',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '31',
         name: 'OPERATIONAL TEST OF THE ECAM SYSTEM',
         task_number: '31-33-00-710-801',
         description: 'OPERATIONAL TEST OF THE ECAM SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi147',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // EICAS System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm148' },
      update: {},
      create: {
         id: 'sm148',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '31',
         name: 'OPERATIONAL TEST OF THE EICAS SYSTEM',
         task_number: '31-34-00-710-801',
         description: 'OPERATIONAL TEST OF THE EICAS SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi148',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // EFIS System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm149' },
      update: {},
      create: {
         id: 'sm149',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '31',
         name: 'OPERATIONAL TEST OF THE EFIS SYSTEM',
         task_number: '31-32-00-710-801',
         description: 'OPERATIONAL TEST OF THE EFIS SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi149',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Central Computer System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm150' },
      update: {},
      create: {
         id: 'sm150',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '31',
         name: 'OPERATIONAL TEST OF THE CENTRAL COMPUTER SYSTEM',
         task_number: '31-10-00-710-801',
         description: 'OPERATIONAL TEST OF THE CENTRAL COMPUTER SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi150',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Electronic Flight Bag System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm151' },
      update: {},
      create: {
         id: 'sm151',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '46',
         name: 'OPERATIONAL TEST OF THE ELECTRONIC FLIGHT BAG SYSTEM',
         task_number: '46-20-00-710-801',
         description: 'OPERATIONAL TEST OF THE ELECTRONIC FLIGHT BAG SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 1,
         estimated_cost: 200,
         intervals: {
            create: {
               id: 'smi151',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Cabin Pressure Control System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm152' },
      update: {},
      create: {
         id: 'sm152',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '21',
         name: 'OPERATIONAL TEST OF THE CABIN PRESSURE CONTROL SYSTEM',
         task_number: '21-31-00-710-802',
         description: 'OPERATIONAL TEST OF THE CABIN PRESSURE CONTROL SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi152',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Air Conditioning System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm153' },
      update: {},
      create: {
         id: 'sm153',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '21',
         name: 'OPERATIONAL TEST OF THE AIR CONDITIONING SYSTEM',
         task_number: '21-51-00-710-801',
         description: 'OPERATIONAL TEST OF THE AIR CONDITIONING SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi153',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Outflow Valve Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm154' },
      update: {},
      create: {
         id: 'sm154',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '21',
         name: 'OPERATIONAL TEST OF THE OUTFLOW VALVE',
         task_number: '21-31-00-710-803',
         description: 'OPERATIONAL TEST OF THE OUTFLOW VALVE',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi154',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Cabin Temperature Control System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm155' },
      update: {},
      create: {
         id: 'sm155',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '21',
         name: 'OPERATIONAL TEST OF THE CABIN TEMPERATURE CONTROL SYSTEM',
         task_number: '21-53-00-710-801',
         description:
            'OPERATIONAL TEST OF THE CABIN TEMPERATURE CONTROL SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi155',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Flight Deck Temperature Control System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm156' },
      update: {},
      create: {
         id: 'sm156',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '21',
         name: 'OPERATIONAL TEST OF THE FLIGHT DECK TEMPERATURE CONTROL SYSTEM',
         task_number: '21-52-00-710-801',
         description:
            'OPERATIONAL TEST OF THE FLIGHT DECK TEMPERATURE CONTROL SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi156',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Fuel Quantity Indicating System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm157' },
      update: {},
      create: {
         id: 'sm157',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '28',
         name: 'OPERATIONAL TEST OF THE FUEL QUANTITY INDICATING SYSTEM',
         task_number: '28-41-00-710-801',
         description: 'OPERATIONAL TEST OF THE FUEL QUANTITY INDICATING SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi157',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Fuel Transfer System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm158' },
      update: {},
      create: {
         id: 'sm158',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '28',
         name: 'OPERATIONAL TEST OF THE FUEL TRANSFER SYSTEM',
         task_number: '28-20-00-710-801',
         description: 'OPERATIONAL TEST OF THE FUEL TRANSFER SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi158',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Main Landing Gear Doors Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm159' },
      update: {},
      create: {
         id: 'sm159',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '32',
         name: 'DETAILED INSPECTION OF THE MAIN LANDING GEAR DOORS',
         task_number: '32-30-00-210-801',
         description: 'DETAILED INSPECTION OF THE MAIN LANDING GEAR DOORS',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 4,
         estimated_cost: 800,
         intervals: {
            create: {
               id: 'smi159',
               interval_type: 'UsageBased',
               metric_type: 'FLIGHT_HOURS',
               interval_value: 1000,
               tolerance_value: 50,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Nose Landing Gear Doors Inspection
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm160' },
      update: {},
      create: {
         id: 'sm160',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '32',
         name: 'DETAILED INSPECTION OF THE NOSE LANDING GEAR DOORS',
         task_number: '32-20-00-210-801',
         description: 'DETAILED INSPECTION OF THE NOSE LANDING GEAR DOORS',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 3,
         estimated_cost: 600,
         intervals: {
            create: {
               id: 'smi160',
               interval_type: 'UsageBased',
               metric_type: 'FLIGHT_HOURS',
               interval_value: 1000,
               tolerance_value: 50,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Fuel Jettison System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm161' },
      update: {},
      create: {
         id: 'sm161',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '28',
         name: 'OPERATIONAL TEST OF THE FUEL JETTISON SYSTEM',
         task_number: '28-30-00-710-801',
         description: 'OPERATIONAL TEST OF THE FUEL JETTISON SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi161',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Fuel Crossfeed System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm162' },
      update: {},
      create: {
         id: 'sm162',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '28',
         name: 'OPERATIONAL TEST OF THE FUEL CROSSFEED SYSTEM',
         task_number: '28-20-00-710-802',
         description: 'OPERATIONAL TEST OF THE FUEL CROSSFEED SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi162',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Fuel Vent System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm163' },
      update: {},
      create: {
         id: 'sm163',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '28',
         name: 'OPERATIONAL TEST OF THE FUEL VENT SYSTEM',
         task_number: '28-10-00-710-801',
         description: 'OPERATIONAL TEST OF THE FUEL VENT SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi163',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Engine Fire Extinguisher Bottle Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm164' },
      update: {},
      create: {
         id: 'sm164',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '26',
         name: 'WEIGHT CHECK OF THE ENGINE FIRE EXTINGUISHER BOTTLE',
         task_number: '26-21-00-900-801',
         description: 'WEIGHT CHECK OF THE ENGINE FIRE EXTINGUISHER BOTTLE',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi164',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Engine Fire Detection System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm165' },
      update: {},
      create: {
         id: 'sm165',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '26',
         name: 'OPERATIONAL TEST OF THE ENGINE FIRE DETECTION SYSTEM',
         task_number: '26-11-00-710-801',
         description: 'OPERATIONAL TEST OF THE ENGINE FIRE DETECTION SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 2,
         estimated_cost: 400,
         intervals: {
            create: {
               id: 'smi165',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Passenger Address System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm166' },
      update: {},
      create: {
         id: 'sm166',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '23',
         name: 'OPERATIONAL TEST OF THE PASSENGER ADDRESS SYSTEM',
         task_number: '23-31-00-710-801',
         description: 'OPERATIONAL TEST OF THE PASSENGER ADDRESS SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 1,
         estimated_cost: 200,
         intervals: {
            create: {
               id: 'smi166',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Cabin Interphone System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm167' },
      update: {},
      create: {
         id: 'sm167',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '23',
         name: 'OPERATIONAL TEST OF THE CABIN INTERPHONE SYSTEM',
         task_number: '23-41-00-710-801',
         description: 'OPERATIONAL TEST OF THE CABIN INTERPHONE SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 1,
         estimated_cost: 200,
         intervals: {
            create: {
               id: 'smi167',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Flight Interphone System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm168' },
      update: {},
      create: {
         id: 'sm168',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '23',
         name: 'OPERATIONAL TEST OF THE FLIGHT INTERPHONE SYSTEM',
         task_number: '23-42-00-710-801',
         description: 'OPERATIONAL TEST OF THE FLIGHT INTERPHONE SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 1,
         estimated_cost: 200,
         intervals: {
            create: {
               id: 'smi168',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });

   // Crew Call System Test
   await prisma.scheduledMaintenance.upsert({
      where: { id: 'sm169' },
      update: {},
      create: {
         id: 'sm169',
         physical_inventory_id: physicalInventoryId,
         aircraft_id: aircraftId,
         ata_code: '23',
         name: 'OPERATIONAL TEST OF THE CREW CALL SYSTEM',
         task_number: '23-43-00-710-801',
         description: 'OPERATIONAL TEST OF THE CREW CALL SYSTEM',
         status: 'ACTIVE',
         regulation_authority: 'FAA',
         estimated_downtime_hours: 1,
         estimated_cost: 200,
         intervals: {
            create: {
               id: 'smi169',
               interval_type: 'TimeBased',
               metric_type: 'MONTHS',
               interval_value: 12,
               tolerance_value: 1,
               last_performed_value: 0,
               last_performed_date: new Date('2024-03-28'),
            },
         },
      },
   });
}
