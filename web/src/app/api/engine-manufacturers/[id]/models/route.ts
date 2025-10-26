import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../prisma-client';

export async function GET(req: NextRequest, props) {
   const params = await props.params;
   try {
      const manufacturerId = params.id;

      if (!manufacturerId) {
         return NextResponse.json(
            { error: 'Manufacturer ID is required.' },
            { status: 400 },
         );
      }

      const models = await prisma.aircraftEngineModel.findMany({
         where: { manufacturer_id: manufacturerId, deleted: false },
         orderBy: { name: 'asc' },
      });

      return NextResponse.json({ data: models });
   } catch (error) {
      console.error('Error fetching aircraft engine models:', error);
      return NextResponse.json(
         { error: 'Internal Server Error' },
         { status: 500 },
      );
   }
}
