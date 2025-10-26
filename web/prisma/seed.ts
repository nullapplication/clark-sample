import { PrismaClient } from '@prisma/client';
import { seedCustomer } from './seeds/Customer-Accelerate-Mx/customer';

const prisma = new PrismaClient();

async function main() {
   try {
      // Seed aircraft manufacturers
      console.log('Seeding aircraft manufacturers...');
      await prisma.aircraftManufacturer.createMany({
         skipDuplicates: true,
         data: [
            {
               id: 'cm7kn1a0v000108l8h3jk4p2n',
               name: 'Airbus',
            },
            {
               id: 'cm7kn1b0w000208l8f5gj2m1p',
               name: 'Boeing',
            },
            {
               id: 'cm7kn1c0x000308l8d7hk3n2q',
               name: 'Bombardier',
            },
            {
               id: 'cm7kn1d0y000408l8b9gj1m3r',
               name: 'Cessna',
            },
            {
               id: 'cm7kn1e0z000508l8a1hk2n4s',
               name: 'Dassault',
            },
            {
               id: 'cm7kn1f10000608l889gj3m5t',
               name: 'Embraer',
            },
            {
               id: 'cm7kn1g11000708l867hk4n6u',
               name: 'Gulfstream',
            },
            {
               id: 'cm7kn1h12000808l845gj5m7v',
               name: 'Pilatus',
            },
            {
               id: 'cm7kn1i13000908l823hk6n8w',
               name: 'Piper',
            },
            {
               id: 'cm7kn1j14001008l801gj7m9x',
               name: 'Textron Aviation',
            },
         ],
      });

      // Seed aircraft engine manufacturers
      console.log('Seeding aircraft engine manufacturers...');
      await prisma.aircraftEngineManufacturer.createMany({
         skipDuplicates: true,
         data: [
            {
               id: 'cm7kn1k15001108l8z9hk8n0y',
               name: 'CFM International',
            },
            {
               id: 'cm7kn1l16001208l8x7gj9m1z',
               name: 'GE Aviation',
            },
            {
               id: 'cm7kn1m17001308l8v5hk0n2a',
               name: 'Honeywell',
            },
            {
               id: 'cm7kn1n18001408l8t3gj1m3b',
               name: 'Pratt & Whitney',
            },
            {
               id: 'cm7kn1o19001508l8r1hk2n4c',
               name: 'Rolls-Royce',
            },
            {
               id: 'cm7kn1p1a001608l8p9gj3m5d',
               name: 'Safran Aircraft Engines',
            },
            {
               id: 'cm7kn1q1b001708l8n7hk4n6e',
               name: 'Williams International',
            },
            {
               id: 'cm7kn1r1c001808l8l5gj5m7f',
               name: 'Lycoming',
            },
            {
               id: 'cm7kn1s1d001908l8j3hk6n8g',
               name: 'Continental Aerospace Technologies',
            },
            {
               id: 'cm7kn1t1e002008l8h1gj7m9h',
               name: 'PBS Aerospace',
            },
         ],
      });

      // Seed aircraft models
      console.log('Seeding aircraft models...');
      await prisma.aircraftModel.createMany({
         skipDuplicates: true,
         data: [
            // Airbus models
            {
               id: 'cm7kn2a1f002108l8f9gj8m0i',
               manufacturer_id: 'cm7kn1a0v000108l8h3jk4p2n', // Airbus
               name: 'A320',
            },
            {
               id: 'cm7kn2b1g002208l8d7hk9n1j',
               manufacturer_id: 'cm7kn1a0v000108l8h3jk4p2n', // Airbus
               name: 'A330',
            },
            {
               id: 'cm7kn2c1h002308l8b5gj0m2k',
               manufacturer_id: 'cm7kn1a0v000108l8h3jk4p2n', // Airbus
               name: 'A350',
            },

            // Boeing models
            {
               id: 'cm7kn2d1i002408l8a3hk1n3l',
               manufacturer_id: 'cm7kn1b0w000208l8f5gj2m1p', // Boeing
               name: '737',
            },
            {
               id: 'cm7kn2e1j002508l881gj2m4m',
               manufacturer_id: 'cm7kn1b0w000208l8f5gj2m1p', // Boeing
               name: '747',
            },
            {
               id: 'cm7kn2f1k002608l869hk3n5n',
               manufacturer_id: 'cm7kn1b0w000208l8f5gj2m1p', // Boeing
               name: '787 Dreamliner',
            },

            // Bombardier models
            {
               id: 'cm7kn2g1l002708l847gj4m6o',
               manufacturer_id: 'cm7kn1c0x000308l8d7hk3n2q', // Bombardier
               name: 'Global 7500',
            },
            {
               id: 'cm7kn2h1m002808l825hk5n7p',
               manufacturer_id: 'cm7kn1c0x000308l8d7hk3n2q', // Bombardier
               name: 'Challenger 350',
            },

            // Cessna models
            {
               id: 'cm7kn2i1n002908l803gj6m8q',
               manufacturer_id: 'cm7kn1d0y000408l8b9gj1m3r', // Cessna
               name: 'Citation X',
            },
            {
               id: 'cm7kn2j1o003008l8z1hk7n9r',
               manufacturer_id: 'cm7kn1d0y000408l8b9gj1m3r', // Cessna
               name: 'Citation Latitude',
            },
            {
               id: 'cm7kn2k1p003108l8x9gj8m0s',
               manufacturer_id: 'cm7kn1d0y000408l8b9gj1m3r', // Cessna
               name: 'Skyhawk 172',
            },

            // Dassault models
            {
               id: 'cm7kn2l1q003208l8v7hk9n1t',
               manufacturer_id: 'cm7kn1e0z000508l8a1hk2n4s', // Dassault
               name: 'Falcon 7X',
            },
            {
               id: 'cm7kn2m1r003308l8t5gj0m2u',
               manufacturer_id: 'cm7kn1e0z000508l8a1hk2n4s', // Dassault
               name: 'Falcon 8X',
            },
            {
               id: 'cm7kn2n1s003408l8r3hk1n3v',
               manufacturer_id: 'cm7kn1e0z000508l8a1hk2n4s', // Dassault
               name: 'Falcon 9X',
            },

            // Embraer models
            {
               id: 'cm7kn2o1t003508l8p1gj2m4w',
               manufacturer_id: 'cm7kn1f10000608l889gj3m5t', // Embraer
               name: 'Phenom 300',
            },
            {
               id: 'cm7kn2p1u003608l8n9hk3n5x',
               manufacturer_id: 'cm7kn1f10000608l889gj3m5t', // Embraer
               name: 'Legacy 500',
            },

            // Gulfstream models
            {
               id: 'cm7kn2q1v003708l8l7gj4m6y',
               manufacturer_id: 'cm7kn1g11000708l867hk4n6u', // Gulfstream
               name: 'G550',
            },
            {
               id: 'cm7kn2r1w003808l8j5hk5n7z',
               manufacturer_id: 'cm7kn1g11000708l867hk4n6u', // Gulfstream
               name: 'G650',
            },
            {
               id: 'cm7kn2s1x003908l8h3gj6m8a',
               manufacturer_id: 'cm7kn1g11000708l867hk4n6u', // Gulfstream
               name: 'G700',
            },

            // Pilatus models
            {
               id: 'cm7kn2t1y004008l8f1hk7n9b',
               manufacturer_id: 'cm7kn1h12000808l845gj5m7v', // Pilatus
               name: 'PC-12',
            },
            {
               id: 'cm7kn2u1z004108l8d9gj8m0c',
               manufacturer_id: 'cm7kn1h12000808l845gj5m7v', // Pilatus
               name: 'PC-24',
            },

            // Piper models
            {
               id: 'cm7kn2v20004208l8b7hk9n1d',
               manufacturer_id: 'cm7kn1i13000908l823hk6n8w', // Piper
               name: 'PA-28 Cherokee',
            },
            {
               id: 'cm7kn2w21004308l8a5gj0m2e',
               manufacturer_id: 'cm7kn1i13000908l823hk6n8w', // Piper
               name: 'PA-46 Meridian',
            },

            // Textron Aviation models
            {
               id: 'cm7kn2x22004408l883hk1n3f',
               manufacturer_id: 'cm7kn1j14001008l801gj7m9x', // Textron Aviation
               name: 'Beechcraft King Air 350',
            },
            {
               id: 'cm7kn2y23004508l861gj2m4g',
               manufacturer_id: 'cm7kn1j14001008l801gj7m9x', // Textron Aviation
               name: 'Beechcraft Bonanza G36',
            },
         ],
      });

      // Seed aircraft engine models
      console.log('Seeding aircraft engine models...');
      await prisma.aircraftEngineModel.createMany({
         skipDuplicates: true,
         data: [
            // CFM International models
            {
               id: 'cm7kn3a24004608l849hk3n5h',
               manufacturer_id: 'cm7kn1k15001108l8z9hk8n0y', // CFM International
               name: 'CFM56',
            },
            {
               id: 'cm7kn3b25004708l827gj4m6i',
               manufacturer_id: 'cm7kn1k15001108l8z9hk8n0y', // CFM International
               name: 'LEAP-1A',
            },
            {
               id: 'cm7kn3c26004808l805hk5n7j',
               manufacturer_id: 'cm7kn1k15001108l8z9hk8n0y', // CFM International
               name: 'LEAP-1B',
            },

            // GE Aviation models
            {
               id: 'cm7kn3d27004908l8z3gj6m8k',
               manufacturer_id: 'cm7kn1l16001208l8x7gj9m1z', // GE Aviation
               name: 'GE90',
            },
            {
               id: 'cm7kn3e28005008l8x1hk7n9l',
               manufacturer_id: 'cm7kn1l16001208l8x7gj9m1z', // GE Aviation
               name: 'GEnx',
            },
            {
               id: 'cm7kn3f29005108l8v9gj8m0m',
               manufacturer_id: 'cm7kn1l16001208l8x7gj9m1z', // GE Aviation
               name: 'Passport',
            },

            // Honeywell models
            {
               id: 'cm7kn3g2a005208l8t7hk9n1n',
               manufacturer_id: 'cm7kn1m17001308l8v5hk0n2a', // Honeywell
               name: 'TFE731',
            },
            {
               id: 'cm7kn3h2b005308l8r5gj0m2o',
               manufacturer_id: 'cm7kn1m17001308l8v5hk0n2a', // Honeywell
               name: 'HTF7000',
            },
            {
               id: 'cm7kn3i2c005408l8p3hk1n3p',
               manufacturer_id: 'cm7kn1m17001308l8v5hk0n2a', // Honeywell
               name: 'TPE331',
            },

            // Pratt & Whitney models
            {
               id: 'cm7kn3j2d005508l8n1gj2m4q',
               manufacturer_id: 'cm7kn1n18001408l8t3gj1m3b', // Pratt & Whitney
               name: 'PW1000G',
            },
            {
               id: 'cm7kn3k2e005608l8l9hk3n5r',
               manufacturer_id: 'cm7kn1n18001408l8t3gj1m3b', // Pratt & Whitney
               name: 'PT6A',
            },
            {
               id: 'cm7kn3l2f005708l8j7gj4m6s',
               manufacturer_id: 'cm7kn1n18001408l8t3gj1m3b', // Pratt & Whitney
               name: 'PW800',
            },

            // Rolls-Royce models
            {
               id: 'cm7kn3m2g005808l8h5hk5n7t',
               manufacturer_id: 'cm7kn1o19001508l8r1hk2n4c', // Rolls-Royce
               name: 'Trent 1000',
            },
            {
               id: 'cm7kn3n2h005908l8f3gj6m8u',
               manufacturer_id: 'cm7kn1o19001508l8r1hk2n4c', // Rolls-Royce
               name: 'Trent XWB',
            },
            {
               id: 'cm7kn3o2i006008l8d1hk7n9v',
               manufacturer_id: 'cm7kn1o19001508l8r1hk2n4c', // Rolls-Royce
               name: 'BR700',
            },

            // Safran Aircraft Engines models
            {
               id: 'cm7kn3p2j006108l8b9gj8m0w',
               manufacturer_id: 'cm7kn1p1a001608l8p9gj3m5d', // Safran Aircraft Engines
               name: 'Silvercrest',
            },
            {
               id: 'cm7kn3q2k006208l8a7hk9n1x',
               manufacturer_id: 'cm7kn1p1a001608l8p9gj3m5d', // Safran Aircraft Engines
               name: 'SaM146',
            },

            // Williams International models
            {
               id: 'cm7kn3r2l006308l885gj0m2y',
               manufacturer_id: 'cm7kn1q1b001708l8n7hk4n6e', // Williams International
               name: 'FJ44',
            },
            {
               id: 'cm7kn3s2m006408l863hk1n3z',
               manufacturer_id: 'cm7kn1q1b001708l8n7hk4n6e', // Williams International
               name: 'FJ33',
            },

            // Lycoming models
            {
               id: 'cm7kn3t2n006508l841gj2m4a',
               manufacturer_id: 'cm7kn1r1c001808l8l5gj5m7f', // Lycoming
               name: 'O-320',
            },
            {
               id: 'cm7kn3u2o006608l829hk3n5b',
               manufacturer_id: 'cm7kn1r1c001808l8l5gj5m7f', // Lycoming
               name: 'IO-360',
            },
            {
               id: 'cm7kn3v2p006708l807gj4m6c',
               manufacturer_id: 'cm7kn1r1c001808l8l5gj5m7f', // Lycoming
               name: 'IO-540',
            },

            // Continental Aerospace Technologies models
            {
               id: 'cm7kn3w2q006808l8z5hk5n7d',
               manufacturer_id: 'cm7kn1s1d001908l8j3hk6n8g', // Continental Aerospace Technologies
               name: 'IO-550',
            },
            {
               id: 'cm7kn3x2r006908l8x3gj6m8e',
               manufacturer_id: 'cm7kn1s1d001908l8j3hk6n8g', // Continental Aerospace Technologies
               name: 'TSIO-550',
            },

            // PBS Aerospace models
            {
               id: 'cm7kn3y2s007008l8v1hk7n9f',
               manufacturer_id: 'cm7kn1t1e002008l8h1gj7m9h', // PBS Aerospace
               name: 'TJ100',
            },
            {
               id: 'cm7kn3z2t007108l8t9gj8m0g',
               manufacturer_id: 'cm7kn1t1e002008l8h1gj7m9h', // PBS Aerospace
               name: 'TP100',
            },
         ],
      });

      // Create ATA codes with createMany and skipDuplicates
      console.log('Creating ATA codes...');
      await prisma.ataCode.createMany({
         skipDuplicates: true,
         data: [
            // Aircraft General section
            { code: '00', chapter: 'GENERAL', section: 'Aircraft General' },
            {
               code: '01',
               chapter: 'MAINTENANCE POLICY',
               section: 'Aircraft General',
            },
            { code: '02', chapter: 'OPERATIONS', section: 'Aircraft General' },
            { code: '03', chapter: 'SUPPORT', section: 'Aircraft General' },
            {
               code: '04',
               chapter: 'AIRWORTHINESS LIMITATIONS',
               section: 'Aircraft General',
            },
            {
               code: '05',
               chapter: 'TIME LIMITS/MAINTENANCE CHECKS',
               section: 'Aircraft General',
            },
            {
               code: '06',
               chapter: 'DIMENSIONS AND AREAS',
               section: 'Aircraft General',
            },
            {
               code: '07',
               chapter: 'LIFTING AND SHORING',
               section: 'Aircraft General',
            },
            {
               code: '08',
               chapter: 'LEVELING AND WEIGHING',
               section: 'Aircraft General',
            },
            {
               code: '09',
               chapter: 'TOWING AND TAXIING',
               section: 'Aircraft General',
            },
            {
               code: '10',
               chapter: 'PARKING, MOORING, STORAGE AND RETURN TO SERVICE',
               section: 'Aircraft General',
            },
            {
               code: '11',
               chapter: 'PLACARDS AND MARKINGS',
               section: 'Aircraft General',
            },
            { code: '12', chapter: 'SERVICING', section: 'Aircraft General' },
            {
               code: '13',
               chapter: 'HARDWARE AND GENERAL TOOLS',
               section: 'Aircraft General',
            },
            {
               code: '15',
               chapter: 'AIRCREW INFORMATION',
               section: 'Aircraft General',
            },
            {
               code: '16',
               chapter: 'CHANGE OF ROLE',
               section: 'Aircraft General',
            },
            {
               code: '18',
               chapter: 'VIBRATION AND NOISE ANALYSIS (HELICOPTER ONLY)',
               section: 'Aircraft General',
            },

            // Aircraft Systems section
            {
               code: '20',
               chapter: 'STANDARD PRACTICES- AIRFRAME',
               section: 'Aircraft Systems',
            },
            {
               code: '21',
               chapter: 'AIR CONDITIONING AND PRESSURIZATION',
               section: 'Aircraft Systems',
            },
            { code: '22', chapter: 'AUTO FLIGHT', section: 'Aircraft Systems' },
            {
               code: '23',
               chapter: 'COMMUNICATIONS',
               section: 'Aircraft Systems',
            },
            {
               code: '24',
               chapter: 'ELECTRICAL POWER',
               section: 'Aircraft Systems',
            },
            {
               code: '25',
               chapter: 'EQUIPMENT / FURNISHINGS',
               section: 'Aircraft Systems',
            },
            {
               code: '26',
               chapter: 'FIRE PROTECTION',
               section: 'Aircraft Systems',
            },
            {
               code: '27',
               chapter: 'FLIGHT CONTROLS',
               section: 'Aircraft Systems',
            },
            { code: '28', chapter: 'FUEL', section: 'Aircraft Systems' },
            {
               code: '29',
               chapter: 'HYDRAULIC POWER',
               section: 'Aircraft Systems',
            },
            {
               code: '30',
               chapter: 'ICE AND RAIN PROTECTION',
               section: 'Aircraft Systems',
            },
            {
               code: '31',
               chapter: 'INDICATING / RECORDING SYSTEM',
               section: 'Aircraft Systems',
            },
            {
               code: '32',
               chapter: 'LANDING GEAR',
               section: 'Aircraft Systems',
            },
            { code: '33', chapter: 'LIGHTS', section: 'Aircraft Systems' },
            { code: '34', chapter: 'NAVIGATION', section: 'Aircraft Systems' },
            { code: '35', chapter: 'OXYGEN', section: 'Aircraft Systems' },
            { code: '36', chapter: 'PNEUMATIC', section: 'Aircraft Systems' },
            { code: '37', chapter: 'VACUUM', section: 'Aircraft Systems' },
            {
               code: '38',
               chapter: 'WATER / WASTE',
               section: 'Aircraft Systems',
            },
            {
               code: '39',
               chapter:
                  'ELECTRICAL - ELECTRONIC PANELS AND MULTIPURPOSE COMPONENTS',
               section: 'Aircraft Systems',
            },
            { code: '40', chapter: 'MULTISYSTEM', section: 'Aircraft Systems' },
            {
               code: '41',
               chapter: 'WATER BALLAST',
               section: 'Aircraft Systems',
            },
            {
               code: '42',
               chapter: 'INTEGRATED MODULAR AVIONICS',
               section: 'Aircraft Systems',
            },
            {
               code: '43',
               chapter: 'EMERGENCY SOLAR PANEL SYSTEM (ESPS)',
               section: 'Aircraft Systems',
            },
            {
               code: '44',
               chapter: 'CABIN SYSTEMS',
               section: 'Aircraft Systems',
            },
            {
               code: '45',
               chapter: 'ONBOARD MAINTENANCE SYSTEMS (OMS)',
               section: 'Aircraft Systems',
            },
            {
               code: '46',
               chapter: 'INFORMATION SYSTEMS',
               section: 'Aircraft Systems',
            },
            {
               code: '47',
               chapter: 'INERT GAS SYSTEM',
               section: 'Aircraft Systems',
            },
            {
               code: '48',
               chapter: 'IN FLIGHT FUEL DISPENSING',
               section: 'Aircraft Systems',
            },
            {
               code: '49',
               chapter: '(AIRBORNE) AUXILIARY POWER UNIT',
               section: 'Aircraft Systems',
            },
            {
               code: '50',
               chapter: 'CARGO AND ACCESSORY COMPARTMENTS',
               section: 'Aircraft Systems',
            },

            // Structure section
            {
               code: '51',
               chapter: 'STANDARD PRACTICES AND STRUCTURES - GENERAL',
               section: 'Structures',
            },
            { code: '52', chapter: 'DOORS', section: 'Structures' },
            { code: '53', chapter: 'FUSELAGE', section: 'Structures' },
            { code: '54', chapter: 'NACELLES / PYLONS', section: 'Structures' },
            { code: '55', chapter: 'STABILIZERS', section: 'Structures' },
            { code: '56', chapter: 'WINDOWS', section: 'Structures' },
            { code: '57', chapter: 'WINGS', section: 'Structures' },

            // Propeller/Rotor section
            {
               code: '60',
               chapter: 'STANDARD PRACTICES - PROP./ROTOR',
               section: 'Propeller/Rotor',
            },
            {
               code: '61',
               chapter: 'PROPELLER / PROPULSORS',
               section: 'Propeller/Rotor',
            },
            {
               code: '62',
               chapter: 'MAIN ROTOR(S)',
               section: 'Propeller/Rotor',
            },
            {
               code: '63',
               chapter: 'MAIN ROTOR DRIVE(S)',
               section: 'Propeller/Rotor',
            },
            { code: '64', chapter: 'TAIL ROTOR', section: 'Propeller/Rotor' },
            {
               code: '65',
               chapter: 'TAIL ROTOR DRIVE',
               section: 'Propeller/Rotor',
            },
            {
               code: '66',
               chapter: 'FOLDING BLADES/PYLON',
               section: 'Propeller/Rotor',
            },
            {
               code: '67',
               chapter: 'ROTORS AND FLIGHT CONTROLS',
               section: 'Propeller/Rotor',
            },

            // Power Plant section
            {
               code: '70',
               chapter: 'STANDARD PRACTICES - ENGINE',
               section: 'Power Plant',
            },
            { code: '71', chapter: 'POWER PLANT', section: 'Power Plant' },
            { code: '72', chapter: 'ENGINE', section: 'Power Plant' },
            {
               code: '72T',
               chapter: 'ENGINE - TURBINE/TURBOPROP, DUCTED FAN/UNDUCTED FAN',
               section: 'Power Plant',
            },
            {
               code: '72R',
               chapter: 'ENGINE - RECIPROCATING',
               section: 'Power Plant',
            },
            {
               code: '73',
               chapter: 'ENGINE - FUEL AND CONTROL',
               section: 'Power Plant',
            },
            { code: '74', chapter: 'IGNITION', section: 'Power Plant' },
            { code: '75', chapter: 'BLEED AIR', section: 'Power Plant' },
            { code: '76', chapter: 'ENGINE CONTROLS', section: 'Power Plant' },
            {
               code: '77',
               chapter: 'ENGINE INDICATING',
               section: 'Power Plant',
            },
            { code: '78', chapter: 'EXHAUST', section: 'Power Plant' },
            { code: '79', chapter: 'OIL', section: 'Power Plant' },
            { code: '80', chapter: 'STARTING', section: 'Power Plant' },
            {
               code: '81',
               chapter: 'TURBINES (RECIPROCATING ENGINES)',
               section: 'Power Plant',
            },
            { code: '82', chapter: 'WATER INJECTION', section: 'Power Plant' },
            {
               code: '83',
               chapter: 'ACCESSORY GEAR BOX (ENGINE DRIVEN)',
               section: 'Power Plant',
            },
            {
               code: '84',
               chapter: 'PROPULSION AUGMENTATION',
               section: 'Power Plant',
            },
            {
               code: '85',
               chapter: 'FUEL CELL SYSTEMS',
               section: 'Power Plant',
            },

            // Miscellaneous section
            { code: '91', chapter: 'CHARTS', section: 'Miscellaneous' },
            {
               code: '97',
               chapter: 'WIRING REPORTING',
               section: 'Miscellaneous',
            },
            {
               code: '115',
               chapter: 'FLIGHT SIMULATOR SYSTEMS',
               section: 'Miscellaneous',
            },
            {
               code: '116',
               chapter: 'FLIGHT SIMULATOR CUEING SYSTEM',
               section: 'Miscellaneous',
            },

            // Peculiar Military section
            {
               code: '92',
               chapter: 'ELECTRICAL POWER MULTIPLEXING',
               section: 'Peculiar Military',
            },
            {
               code: '93',
               chapter: 'SURVEILLANCE',
               section: 'Peculiar Military',
            },
            {
               code: '94',
               chapter: 'WEAPON SYSTEM',
               section: 'Peculiar Military',
            },
            {
               code: '95',
               chapter: 'CREW ESCAPE AND SAFETY',
               section: 'Peculiar Military',
            },
            {
               code: '96',
               chapter: 'MISSILES, DRONES AND TELEMETRY',
               section: 'Peculiar Military',
            },
            {
               code: '98',
               chapter: 'METEOROLOGICAL AND ATMOSPHERIC RESEARCH',
               section: 'Peculiar Military',
            },
            {
               code: '99',
               chapter: 'ELECTRONIC WARFARE SYSTEM',
               section: 'Peculiar Military',
            },
         ],
      });

      await seedCustomer(prisma);

      // Temporary: Create maintenance due projections (to be moved to a calculation)
      console.log('Creating maintenance due projections...');

      // Airframe 100-hour inspection
      await prisma.maintenanceDueProjection.upsert({
         where: { id: 'mdp001' },
         update: {
            scheduled_maintenance_id: 'sm008',
            physical_inventory_id: 'cm7kmf1000r08l87w2cz9xb',
            aircraft_id: 'cm6r01l3502dmj0nu3k4wgj78',
            tail_number: 'N106EX',
            name: '100-Hour Inspection',
            description: 'FAA required 100-hour inspection',
            ata_code: '05-20',
            task_number: 'INSP-100HR',
            status: 'ACTIVE',
            priority: 1,
            maintenance_type: 'Inspection',
            next_due_date: new Date('2024-07-15'),
            days_remaining: 30,
            is_overdue: false,
            due_reason: 'Due in 100 flight hours',
         },
         create: {
            id: 'mdp001',
            scheduled_maintenance_id: 'sm008',
            physical_inventory_id: 'cm7kmf1000r08l87w2cz9xb',
            aircraft_id: 'cm6r01l3502dmj0nu3k4wgj78',
            tail_number: 'N106EX',
            name: '100-Hour Inspection',
            description: 'FAA required 100-hour inspection',
            ata_code: '05-20',
            task_number: 'INSP-100HR',
            status: 'ACTIVE',
            priority: 1,
            maintenance_type: 'Inspection',
            next_due_date: new Date('2024-07-15'),
            days_remaining: 30,
            is_overdue: false,
            due_reason: 'Due in 100 flight hours',
         },
      });

      // Engine 500-cycle inspection - Left
      await prisma.maintenanceDueProjection.upsert({
         where: { id: 'mdp002' },
         update: {
            scheduled_maintenance_id: 'sm012',
            physical_inventory_id: 'cm7kmf2000s08l8d9hj4v7n',
            aircraft_id: 'cm6r01l3502dmj0nu3k4wgj78',
            tail_number: 'N106EX',
            name: 'Engine Cycle Inspection - Left',
            description: 'Manufacturer required 500-cycle inspection',
            ata_code: '72-00',
            task_number: 'ENG-500CYC-L',
            status: 'ACTIVE',
            priority: 2,
            maintenance_type: 'Inspection',
            next_due_date: new Date('2024-09-15'),
            days_remaining: 75,
            is_overdue: false,
            due_reason: 'Due in 200 cycles',
         },
         create: {
            id: 'mdp002',
            scheduled_maintenance_id: 'sm012',
            physical_inventory_id: 'cm7kmf2000s08l8d9hj4v7n',
            aircraft_id: 'cm6r01l3502dmj0nu3k4wgj78',
            tail_number: 'N106EX',
            name: 'Engine Cycle Inspection - Left',
            description: 'Manufacturer required 500-cycle inspection',
            ata_code: '72-00',
            task_number: 'ENG-500CYC-L',
            status: 'ACTIVE',
            priority: 2,
            maintenance_type: 'Inspection',
            next_due_date: new Date('2024-09-15'),
            days_remaining: 75,
            is_overdue: false,
            due_reason: 'Due in 200 cycles',
         },
      });

      // Annual inspection
      await prisma.maintenanceDueProjection.upsert({
         where: { id: 'mdp003' },
         update: {
            scheduled_maintenance_id: 'sm003',
            physical_inventory_id: 'cm7kmf1000r08l87w2cz9xb',
            aircraft_id: 'cm6r01l3502dmj0nu3k4wgj78',
            tail_number: 'N106EX',
            name: 'Annual Inspection',
            description: 'FAA required annual inspection',
            ata_code: '05-10',
            task_number: 'INSP-ANNUAL',
            status: 'ACTIVE',
            priority: 1,
            maintenance_type: 'Inspection',
            next_due_date: new Date('2024-08-15'),
            days_remaining: 45,
            is_overdue: false,
            due_reason: 'Due on calendar date (annual)',
         },
         create: {
            id: 'mdp003',
            scheduled_maintenance_id: 'sm003',
            physical_inventory_id: 'cm7kmf1000r08l87w2cz9xb',
            aircraft_id: 'cm6r01l3502dmj0nu3k4wgj78',
            tail_number: 'N106EX',
            name: 'Annual Inspection',
            description: 'FAA required annual inspection',
            ata_code: '05-10',
            task_number: 'INSP-ANNUAL',
            status: 'ACTIVE',
            priority: 1,
            maintenance_type: 'Inspection',
            next_due_date: new Date('2024-08-15'),
            days_remaining: 45,
            is_overdue: false,
            due_reason: 'Due on calendar date (annual)',
         },
      });

      // Weekly inspection
      await prisma.maintenanceDueProjection.upsert({
         where: { id: 'mdp004' },
         update: {
            scheduled_maintenance_id: 'sm015',
            physical_inventory_id: 'cm7kmf1000r08l87w2cz9xb',
            aircraft_id: 'cm6r01l3502dmj0nu3k4wgj78',
            tail_number: 'N106EX',
            name: 'Weekly Inspection',
            description: 'Required weekly inspection (every Friday)',
            ata_code: '05-30',
            task_number: 'INSP-WEEKLY',
            status: 'ACTIVE',
            priority: 2,
            maintenance_type: 'Inspection',
            next_due_date: new Date('2024-07-05'),
            days_remaining: 4,
            is_overdue: false,
            due_reason: 'Due on Friday (weekly)',
         },
         create: {
            id: 'mdp004',
            scheduled_maintenance_id: 'sm015',
            physical_inventory_id: 'cm7kmf1000r08l87w2cz9xb',
            aircraft_id: 'cm6r01l3502dmj0nu3k4wgj78',
            tail_number: 'N106EX',
            name: 'Weekly Inspection',
            description: 'Required weekly inspection (every Friday)',
            ata_code: '05-30',
            task_number: 'INSP-WEEKLY',
            status: 'ACTIVE',
            priority: 2,
            maintenance_type: 'Inspection',
            next_due_date: new Date('2024-07-05'),
            days_remaining: 4,
            is_overdue: false,
            due_reason: 'Due on Friday (weekly)',
         },
      });

      // Monthly inspection
      await prisma.maintenanceDueProjection.upsert({
         where: { id: 'mdp005' },
         update: {
            scheduled_maintenance_id: 'sm005',
            physical_inventory_id: 'cm7kmf1000r08l87w2cz9xb',
            aircraft_id: 'cm6r01l3502dmj0nu3k4wgj78',
            tail_number: 'N106EX',
            name: 'Monthly Inspection',
            description: 'Required monthly inspection (first Monday)',
            ata_code: '05-40',
            task_number: 'INSP-MONTHLY',
            status: 'ACTIVE',
            priority: 2,
            maintenance_type: 'Inspection',
            next_due_date: new Date('2024-07-01'),
            days_remaining: 0,
            is_overdue: false,
            due_reason: 'Due on first Monday of month',
         },
         create: {
            id: 'mdp005',
            scheduled_maintenance_id: 'sm005',
            physical_inventory_id: 'cm7kmf1000r08l87w2cz9xb',
            aircraft_id: 'cm6r01l3502dmj0nu3k4wgj78',
            tail_number: 'N106EX',
            name: 'Monthly Inspection',
            description: 'Required monthly inspection (first Monday)',
            ata_code: '05-40',
            task_number: 'INSP-MONTHLY',
            status: 'ACTIVE',
            priority: 2,
            maintenance_type: 'Inspection',
            next_due_date: new Date('2024-07-01'),
            days_remaining: 0,
            is_overdue: false,
            due_reason: 'Due on first Monday of month',
         },
      });

      // Landing Gear Inspection
      await prisma.maintenanceDueProjection.upsert({
         where: { id: 'mdp006' },
         update: {
            scheduled_maintenance_id: 'sm014',
            physical_inventory_id: 'cm7kmf1000r08l87w2cz9xb',
            aircraft_id: 'cm6r01l3502dmj0nu3k4wgj78',
            tail_number: 'N106EX',
            name: 'Landing Gear Inspection',
            description: 'Required every 5 landings',
            ata_code: '32-00',
            task_number: 'INSP-LDG-5',
            status: 'ACTIVE',
            priority: 2,
            maintenance_type: 'Inspection',
            next_due_date: new Date('2024-07-02'),
            days_remaining: 1,
            is_overdue: false,
            due_reason: 'Due after 5 landings',
         },
         create: {
            id: 'mdp006',
            scheduled_maintenance_id: 'sm014',
            physical_inventory_id: 'cm7kmf1000r08l87w2cz9xb',
            aircraft_id: 'cm6r01l3502dmj0nu3k4wgj78',
            tail_number: 'N106EX',
            name: 'Landing Gear Inspection',
            description: 'Required every 5 landings',
            ata_code: '32-00',
            task_number: 'INSP-LDG-5',
            status: 'ACTIVE',
            priority: 2,
            maintenance_type: 'Inspection',
            next_due_date: new Date('2024-07-02'),
            days_remaining: 1,
            is_overdue: false,
            due_reason: 'Due after 5 landings',
         },
      });

      // Annual Inspection (Calendar)
      await prisma.maintenanceDueProjection.upsert({
         where: { id: 'mdp007' },
         update: {
            scheduled_maintenance_id: 'sm015',
            physical_inventory_id: 'cm7kmf1000r08l87w2cz9xb',
            aircraft_id: 'cm6r01l3502dmj0nu3k4wgj78',
            tail_number: 'N106EX',
            name: 'Annual Inspection (Calendar)',
            description: 'FAA required annual inspection - Calendar Based',
            ata_code: '05-10',
            task_number: 'INSP-ANNUAL',
            status: 'ACTIVE',
            priority: 1,
            maintenance_type: 'Inspection',
            next_due_date: new Date('2024-08-15'),
            days_remaining: 45,
            is_overdue: false,
            due_reason: 'Due on calendar date (annual)',
         },
         create: {
            id: 'mdp007',
            scheduled_maintenance_id: 'sm015',
            physical_inventory_id: 'cm7kmf1000r08l87w2cz9xb',
            aircraft_id: 'cm6r01l3502dmj0nu3k4wgj78',
            tail_number: 'N106EX',
            name: 'Annual Inspection (Calendar)',
            description: 'FAA required annual inspection - Calendar Based',
            ata_code: '05-10',
            task_number: 'INSP-ANNUAL',
            status: 'ACTIVE',
            priority: 1,
            maintenance_type: 'Inspection',
            next_due_date: new Date('2024-08-15'),
            days_remaining: 45,
            is_overdue: false,
            due_reason: 'Due on calendar date (annual)',
         },
      });

      // Annual Inspection (Hours)
      await prisma.maintenanceDueProjection.upsert({
         where: { id: 'mdp008' },
         update: {
            scheduled_maintenance_id: 'sm015',
            physical_inventory_id: 'cm7kmf1000r08l87w2cz9xb',
            aircraft_id: 'cm6r01l3502dmj0nu3k4wgj78',
            tail_number: 'N106EX',
            name: 'Annual Inspection (Hours)',
            description: 'FAA required annual inspection - Hours Based',
            ata_code: '05-10',
            task_number: 'INSP-ANNUAL',
            status: 'ACTIVE',
            priority: 1,
            maintenance_type: 'Inspection',
            next_due_date: new Date('2024-10-15'),
            days_remaining: 105,
            is_overdue: false,
            due_reason: 'Due at 3500 flight hours',
         },
         create: {
            id: 'mdp008',
            scheduled_maintenance_id: 'sm015',
            physical_inventory_id: 'cm7kmf1000r08l87w2cz9xb',
            aircraft_id: 'cm6r01l3502dmj0nu3k4wgj78',
            tail_number: 'N106EX',
            name: 'Annual Inspection (Hours)',
            description: 'FAA required annual inspection - Hours Based',
            ata_code: '05-10',
            task_number: 'INSP-ANNUAL',
            status: 'ACTIVE',
            priority: 1,
            maintenance_type: 'Inspection',
            next_due_date: new Date('2024-10-15'),
            days_remaining: 105,
            is_overdue: false,
            due_reason: 'Due at 3500 flight hours',
         },
      });

      // Now create the maintenance due metrics
      console.log('Creating maintenance due metrics...');

      // 100-hour inspection - flight hours metric
      await prisma.maintenanceDueMetric.upsert({
         where: { id: 'mdm001' },
         update: {
            maintenance_due_projection_id: 'mdp001',
            interval_type: 'UsageBased',
            metric_type: 'FLIGHT_HOURS',
            interval_value: 100,
            tolerance_value: 10,
            last_performed_value: 2400,
            last_performed_date: new Date('2024-06-15'),
            next_due_value: 2500,
            next_due_date: new Date('2024-07-15'),
            remaining_value: 100,
            days_remaining: 30,
            is_overdue: false,
         },
         create: {
            id: 'mdm001',
            maintenance_due_projection_id: 'mdp001',
            interval_type: 'UsageBased',
            metric_type: 'FLIGHT_HOURS',
            interval_value: 100,
            tolerance_value: 10,
            last_performed_value: 2400,
            last_performed_date: new Date('2024-06-15'),
            next_due_value: 2500,
            next_due_date: new Date('2024-07-15'),
            remaining_value: 100,
            days_remaining: 30,
            is_overdue: false,
         },
      });

      // Engine 500-cycle inspection - cycles metric
      await prisma.maintenanceDueMetric.upsert({
         where: { id: 'mdm002' },
         update: {
            maintenance_due_projection_id: 'mdp002',
            interval_type: 'UsageBased',
            metric_type: 'CYCLES',
            interval_value: 500,
            tolerance_value: 25,
            last_performed_value: 300,
            last_performed_date: new Date('2023-10-15'),
            next_due_value: 800,
            next_due_date: new Date('2024-09-15'),
            remaining_value: 200,
            days_remaining: 75,
            is_overdue: false,
         },
         create: {
            id: 'mdm002',
            maintenance_due_projection_id: 'mdp002',
            interval_type: 'UsageBased',
            metric_type: 'CYCLES',
            interval_value: 500,
            tolerance_value: 25,
            last_performed_value: 300,
            last_performed_date: new Date('2023-10-15'),
            next_due_value: 800,
            next_due_date: new Date('2024-09-15'),
            remaining_value: 200,
            days_remaining: 75,
            is_overdue: false,
         },
      });

      // Annual inspection - calendar metric
      await prisma.maintenanceDueMetric.upsert({
         where: { id: 'mdm003' },
         update: {
            maintenance_due_projection_id: 'mdp003',
            interval_type: 'TimeBased',
            metric_type: 'FLIGHT_HOURS',
            interval_value: 0,
            tolerance_value: 0,
            last_performed_value: 0,
            last_performed_date: new Date('2023-08-15'),
            next_due_value: 0,
            next_due_date: new Date('2024-08-15'),
            remaining_value: 0,
            days_remaining: 45,
            is_overdue: false,
         },
         create: {
            id: 'mdm003',
            maintenance_due_projection_id: 'mdp003',
            interval_type: 'TimeBased',
            metric_type: 'FLIGHT_HOURS',
            interval_value: 0,
            tolerance_value: 0,
            last_performed_value: 0,
            last_performed_date: new Date('2023-08-15'),
            next_due_value: 0,
            next_due_date: new Date('2024-08-15'),
            remaining_value: 0,
            days_remaining: 45,
            is_overdue: false,
         },
      });

      // Annual inspection - flight hours metric
      await prisma.maintenanceDueMetric.upsert({
         where: { id: 'mdm004' },
         update: {
            maintenance_due_projection_id: 'mdp003',
            interval_type: 'UsageBased',
            metric_type: 'FLIGHT_HOURS',
            interval_value: 2000,
            tolerance_value: 50,
            last_performed_value: 1500,
            last_performed_date: new Date('2023-08-15'),
            next_due_value: 3500,
            next_due_date: new Date('2024-10-15'),
            remaining_value: 1000,
            days_remaining: 105,
            is_overdue: false,
         },
         create: {
            id: 'mdm004',
            maintenance_due_projection_id: 'mdp003',
            interval_type: 'UsageBased',
            metric_type: 'FLIGHT_HOURS',
            interval_value: 2000,
            tolerance_value: 50,
            last_performed_value: 1500,
            last_performed_date: new Date('2023-08-15'),
            next_due_value: 3500,
            next_due_date: new Date('2024-10-15'),
            remaining_value: 1000,
            days_remaining: 105,
            is_overdue: false,
         },
      });

      // Weekly inspection metric
      await prisma.maintenanceDueMetric.upsert({
         where: { id: 'mdm005' },
         update: {
            maintenance_due_projection_id: 'mdp004',
            interval_type: 'TimeBased',
            metric_type: 'FLIGHT_HOURS',
            interval_value: 0,
            tolerance_value: 0,
            last_performed_value: 0,
            last_performed_date: new Date('2024-06-28'),
            next_due_value: 0,
            next_due_date: new Date('2024-07-05'),
            remaining_value: 0,
            days_remaining: 4,
            is_overdue: false,
         },
         create: {
            id: 'mdm005',
            maintenance_due_projection_id: 'mdp004',
            interval_type: 'TimeBased',
            metric_type: 'FLIGHT_HOURS',
            interval_value: 0,
            tolerance_value: 0,
            last_performed_value: 0,
            last_performed_date: new Date('2024-06-28'),
            next_due_value: 0,
            next_due_date: new Date('2024-07-05'),
            remaining_value: 0,
            days_remaining: 4,
            is_overdue: false,
         },
      });

      // Monthly inspection metric
      await prisma.maintenanceDueMetric.upsert({
         where: { id: 'mdm006' },
         update: {
            maintenance_due_projection_id: 'mdp005',
            interval_type: 'TimeBased',
            metric_type: 'FLIGHT_HOURS',
            interval_value: 0,
            tolerance_value: 0,
            last_performed_value: 0,
            last_performed_date: new Date('2024-06-03'),
            next_due_value: 0,
            next_due_date: new Date('2024-07-01'),
            remaining_value: 0,
            days_remaining: 0,
            is_overdue: false,
         },
         create: {
            id: 'mdm006',
            maintenance_due_projection_id: 'mdp005',
            interval_type: 'TimeBased',
            metric_type: 'FLIGHT_HOURS',
            interval_value: 0,
            tolerance_value: 0,
            last_performed_value: 0,
            last_performed_date: new Date('2024-06-03'),
            next_due_value: 0,
            next_due_date: new Date('2024-07-01'),
            remaining_value: 0,
            days_remaining: 0,
            is_overdue: false,
         },
      });

      // Landing Gear Inspection metric
      await prisma.maintenanceDueMetric.upsert({
         where: { id: 'mdm007' },
         update: {
            maintenance_due_projection_id: 'mdp006',
            interval_type: 'UsageBased',
            metric_type: 'LANDINGS',
            interval_value: 5,
            tolerance_value: 0,
            last_performed_value: 1295,
            last_performed_date: new Date('2024-07-01'),
            next_due_value: 1300,
            next_due_date: new Date('2024-07-02'),
            remaining_value: 5,
            days_remaining: 1,
            is_overdue: false,
         },
         create: {
            id: 'mdm007',
            maintenance_due_projection_id: 'mdp006',
            interval_type: 'UsageBased',
            metric_type: 'LANDINGS',
            interval_value: 5,
            tolerance_value: 0,
            last_performed_value: 1295,
            last_performed_date: new Date('2024-07-01'),
            next_due_value: 1300,
            next_due_date: new Date('2024-07-02'),
            remaining_value: 5,
            days_remaining: 1,
            is_overdue: false,
         },
      });

      // Annual inspection (Calendar) metric
      await prisma.maintenanceDueMetric.upsert({
         where: { id: 'mdm008' },
         update: {
            maintenance_due_projection_id: 'mdp007',
            interval_type: 'TimeBased',
            metric_type: 'FLIGHT_HOURS',
            interval_value: 0,
            tolerance_value: 0,
            last_performed_value: 0,
            last_performed_date: new Date('2023-08-15'),
            next_due_value: 0,
            next_due_date: new Date('2024-08-15'),
            remaining_value: 0,
            days_remaining: 45,
            is_overdue: false,
         },
         create: {
            id: 'mdm008',
            maintenance_due_projection_id: 'mdp007',
            interval_type: 'TimeBased',
            metric_type: 'FLIGHT_HOURS',
            interval_value: 0,
            tolerance_value: 0,
            last_performed_value: 0,
            last_performed_date: new Date('2023-08-15'),
            next_due_value: 0,
            next_due_date: new Date('2024-08-15'),
            remaining_value: 0,
            days_remaining: 45,
            is_overdue: false,
         },
      });

      // Annual inspection (Hours) metric
      await prisma.maintenanceDueMetric.upsert({
         where: { id: 'mdm009' },
         update: {
            maintenance_due_projection_id: 'mdp008',
            interval_type: 'UsageBased',
            metric_type: 'FLIGHT_HOURS',
            interval_value: 2000,
            tolerance_value: 50,
            last_performed_value: 1500,
            last_performed_date: new Date('2023-08-15'),
            next_due_value: 3500,
            next_due_date: new Date('2024-10-15'),
            remaining_value: 1000,
            days_remaining: 105,
            is_overdue: false,
         },
         create: {
            id: 'mdm009',
            maintenance_due_projection_id: 'mdp008',
            interval_type: 'UsageBased',
            metric_type: 'FLIGHT_HOURS',
            interval_value: 2000,
            tolerance_value: 50,
            last_performed_value: 1500,
            last_performed_date: new Date('2023-08-15'),
            next_due_value: 3500,
            next_due_date: new Date('2024-10-15'),
            remaining_value: 1000,
            days_remaining: 105,
            is_overdue: false,
         },
      });

      console.log('Seed data created successfully!');
   } catch (error) {
      console.error('Error seeding database:', error);
      throw error;
   }
}

main()
   .catch((e) => {
      console.error(e);
      process.exit(1);
   })
   .finally(async () => {
      await prisma.$disconnect();
   });
