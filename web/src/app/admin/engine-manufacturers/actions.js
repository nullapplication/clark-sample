'use server';

import prisma from '../../prisma-client';

export async function getEngineManufacturers(
   page = 1,
   limit = 10,
   sortBy = 'name',
   sortOrder = 'asc',
) {
   try {
      let where = { deleted: false };

      const manufacturers = await prisma.aircraftEngineManufacturer.findMany({
         where,
         orderBy: {
            [sortBy]: sortOrder === 'asc' ? 'asc' : 'desc',
         },
         skip: (page - 1) * limit,
         take: limit,
      });

      return manufacturers;
   } catch (error) {
      console.error('Error fetching aircraft engine manufacturers:', error);
      return [];
   }
}
