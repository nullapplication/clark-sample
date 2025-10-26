'use server';
import AdmZip from 'adm-zip';
import { Readable } from 'stream';
import csvParser from 'csv-parser';
import prisma from '../../../prisma-client';
import fs from 'fs/promises';
import { logger } from '../../../logger';

const fetchFaaData = async () => {
   try {
      logger.info('Fetching FAA aircraft data zip file...');
      const url = 'https://registry.faa.gov/database/ReleasableAircraft.zip';
      const response = await fetch(url);
      const updateAircraftManufacturers = true;
      const updateAircraftEngineManufacturers = true;
      const updateAircraft = false; // note: turned off for now

      if (!response.ok) {
         throw new Error(`Failed to fetch ZIP file: ${response.statusText}`);
      }

      logger.info('Saving file to temp folder...');
      const filePath = './public/temp/ReleasableAircraft.zip';
      await fs.writeFile(filePath, Buffer.from(await response.arrayBuffer()));
      logger.info('Saved file to temp folder.');

      logger.info('Extracting ZIP file...');
      const zip = new AdmZip(filePath);
      logger.info('Extracted ZIP file.');

      logger.info('Parsing ACFTREF.txt...');
      const manufacturerModels = await parseCsv(zip, 'ACFTREF.txt', (row) => ({
         code: row['CODE'],
         manufacturer: row['MFR'],
         model: row['MODEL'],
      }));

      if (updateAircraftManufacturers) {
         logger.info('Upserting FAA manufacturer models...');
         for (const row of manufacturerModels) {
            if (row.manufacturer) {
               let manufacturer = null;
               try {
                  logger.info('Upserting manufacturer:', row.manufacturer);
                  manufacturer = await prisma.aircraftManufacturer.upsert({
                     where: { name: row.manufacturer },
                     update: { name: row.manufacturer },
                     create: { name: row.manufacturer },
                  });
               } catch (error) {
                  logger.error(
                     'Error upserting manufacturer:',
                     row.manufacturer,
                     error,
                  );
               }

               if (row.model) {
                  try {
                     logger.info('Upserting model:', row.model);
                     await prisma.aircraftModel.upsert({
                        where: {
                           manufacturer_id_name: {
                              name: row.model,
                              manufacturer_id: manufacturer.id,
                           },
                        },
                        update: { name: row.model },
                        create: {
                           name: row.model,
                           manufacturer_id: manufacturer.id,
                        },
                     });
                  } catch (error) {
                     logger.error('Error upserting model:', row.model, error);
                  }
               }
            }
         }
      }

      logger.info('Parsing ENGINE.txt...');
      const faaEngines = await parseCsv(zip, 'ENGINE.txt', (row) => ({
         code: row['CODE'],
         manufacturer: row['MFR'],
         model: row['MODEL'],
      }));

      if (updateAircraftEngineManufacturers) {
         logger.info('Upserting FAA engine manufacturers...');
         for (const row of faaEngines) {
            let engineManufacturer = null;
            try {
               logger.info('Upserting engine manufacturer:', row.manufacturer);
               engineManufacturer =
                  await prisma.aircraftEngineManufacturer.upsert({
                     where: { name: row.manufacturer },
                     update: { name: row.manufacturer },
                     create: { name: row.manufacturer },
                  });
            } catch (error) {
               logger.error(
                  'Error upserting engine manufacturer:',
                  row.manufacturer,
                  error,
               );
            }

            try {
               logger.info('Upserting engine model:', row.model);
               await prisma.aircraftEngineModel.upsert({
                  where: {
                     manufacturer_id_name: {
                        name: row.model,
                        manufacturer_id: engineManufacturer.id,
                     },
                  },
                  update: { name: row.model },
                  create: {
                     name: row.model,
                     manufacturer_id: engineManufacturer.id,
                  },
               });
            } catch (error) {
               logger.error('Error upserting engine model:', row.model, error);
            }
         }
      }

      logger.info('Parsing MASTER.txt...');
      const aircraftData = await parseCsv(zip, 'MASTER.txt', (row) => ({
         tail_number: row['N-NUMBER'],
         serial_number: row['SERIAL NUMBER'],
         owner: row['NAME'],
         aircraftReferenceCode: row['MFR MDL CODE'],
         engineReferenceCode: row['ENG MFR MDL'],
         year_of_manufacture: row['YEAR MFR'],
      }));

      if (updateAircraft) {
         logger.info('Upserting FAA aircraft data...');
         for (const row of aircraftData) {
            const manufacturerModel =
               manufacturerModels.find(
                  (m) => m.code === row.aircraftReferenceCode,
               ) || {};

            const engineModel =
               faaEngines.find((e) => e.code === row.engineReferenceCode) || {};

            const upsertAircraft = {
               tail_number: row.tail_number,
               serial_number: row.serial_number,
               owner: row.owner,
               manufacturer: null,
               model: null,
               engine_manufacturer: null,
               engine_model: null,
               year_of_manufacture: null,
            };
            if (manufacturerModel && manufacturerModel.manufacturer) {
               upsertAircraft.manufacturer = manufacturerModel.manufacturer;
            }
            if (manufacturerModel && manufacturerModel.model) {
               upsertAircraft.model = manufacturerModel.model;
            }
            if (engineModel && engineModel.manufacturer) {
               upsertAircraft.engine_manufacturer = engineModel.manufacturer;
            }
            if (engineModel && engineModel.model) {
               upsertAircraft.engine_model = engineModel.model;
            }
            if (row.year_of_manufacture && !isNaN(row.year_of_manufacture)) {
               upsertAircraft.year_of_manufacture = parseInt(
                  row.year_of_manufacture,
               );
            }

            if (upsertAircraft && upsertAircraft.tail_number) {
               try {
                  logger.info(
                     'Upserting aircraft record:',
                     upsertAircraft.tail_number,
                  );
                  await prisma.aircraft.upsert({
                     where: { tail_number: upsertAircraft.tail_number },
                     update: upsertAircraft,
                     create: upsertAircraft,
                  });
               } catch (error) {
                  logger.error(
                     'Error upserting aircraft record:',
                     upsertAircraft, error,
                  );
               }
            }
         }
         logger.info('Finished upserting FAA aircraft data.');
      }
   } catch (error) {
      logger.error('Error processing FAA data:', error);
   }
};

async function parseCsv(zip, fileName, transformRow, maxRows = Infinity) {
   const file = zip.getEntry(fileName);
   if (!file) throw new Error(`${fileName} not found in ZIP file`);

   const csvData = file.getData().toString('utf8');
   const parsedRecords = [];

   await new Promise((resolve, reject) => {
      Readable.from(csvData)
         .pipe(csvParser({ separator: ',' }))
         .on('data', (row) => {
            if (parsedRecords.length < maxRows) {
               parsedRecords.push(transformRow(formatRowKeys(row)));
            }
         })
         .on('end', resolve)
         .on('error', reject);
   });

   return parsedRecords;
}

function formatRowKeys(row) {
   const formattedRow = {};
   Object.keys(row).forEach((key) => {
      formattedRow[key.trim().toUpperCase()] = row[key]?.trim() || null;
   });
   return formattedRow;
}

export { fetchFaaData };
