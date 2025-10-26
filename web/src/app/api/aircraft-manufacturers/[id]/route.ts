import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../prisma-client';

export async function GET(req: NextRequest, props) {
   const params = await props.params;
   try {
      const manufacturer = await prisma.aircraftManufacturer.findUnique({
         where: { id: params.id },
      });

      if (!manufacturer) {
         return NextResponse.json(
            { error: 'Manufacturer not found' },
            { status: 404 },
         );
      }

      return NextResponse.json({ data: manufacturer });
   } catch (error) {
      console.error('Error fetching aircraft manufacturer:', error);
      return NextResponse.json(
         { error: 'Internal Server Error' },
         { status: 500 },
      );
   }
}
