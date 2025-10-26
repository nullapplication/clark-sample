'use server';

import prisma from '../../prisma-client.js';

export async function getCustomers() {
   try {
      const customers = await prisma.customer.findMany({
         where: { deleted: false },
         orderBy: { name: 'asc' },
      });

      return customers;
   } catch (error) {
      console.error('Error fetching customers:', error);
      return [];
   }
}
