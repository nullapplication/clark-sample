'use server';

import prisma from '../../../prisma-client';

export async function getEngineManufacturer(id) {
   try {
      const manufacturer = await prisma.aircraftEngineManufacturer.findUnique({
         where: { id },
      });

      return manufacturer;
   } catch (error) {
      console.error('Error fetching aircraft engine manufacturer:', error);
      return [];
   }
}

export async function getEngineModels(id) {
   try {
      const models = await prisma.aircraftEngineModel.findMany({
         where: { manufacturer_id: id, deleted: false },
         orderBy: { name: 'asc' },
      });

      return models;
   } catch (error) {
      console.error('Error fetching engine models:', error);
      return [];
   }
}
