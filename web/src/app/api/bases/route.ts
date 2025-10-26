import { NextResponse } from 'next/server';
import prisma from '../../prisma-client';

// todo: hardcoding the customer id for now for tenant isolation
const customerId = 'cm6sgh61g00070cjmh30y819q';

export async function GET() {
   try {
      const where: any = {
         deleted: false,
         customer_id: customerId,
      };

      const bases = await prisma.baseOfOperation.findMany({
         select: {
            id: true,
            name: true,
         },
         where,
      });

      return NextResponse.json({
         data: bases,
      });
   } catch (error) {
      console.error('Error fetching bases of operations data:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
