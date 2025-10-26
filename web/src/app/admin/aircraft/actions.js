'use server';

import prisma from '../../prisma-client';

export async function getAircraft(
   page = 1,
   limit = 10,
   sortBy = 'created_at',
   sortOrder = 'desc',
   search,
) {
   try {
      let where = { deleted: false };
      if (search) {
         where.OR = [
            { tail_number: { contains: search, mode: 'insensitive' } },
            { serial_number: { contains: search, mode: 'insensitive' } },
            { manufacturer: { contains: search, mode: 'insensitive' } },
            { model: { contains: search, mode: 'insensitive' } },
            { owner: { contains: search, mode: 'insensitive' } },
         ];
      }
      const aircraft = await prisma.aircraft.findMany({
         where,
         orderBy: {
            [sortBy]: sortOrder === 'asc' ? 'asc' : 'desc',
         },
         skip: (page - 1) * limit,
         take: limit,
      });

      return aircraft;
   } catch (error) {
      console.error('Error fetching aircraft:', error);
      return [];
   }
}
