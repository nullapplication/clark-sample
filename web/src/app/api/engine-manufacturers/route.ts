import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../prisma-client';

export async function GET(req: NextRequest) {
   try {
      const { searchParams } = new URL(req.url);
      const page = parseInt(searchParams.get('page') || '1', 10);
      const limit = parseInt(searchParams.get('limit') || '10', 10);
      const sortBy = searchParams.get('sortBy') || 'name';
      const sortOrder =
         searchParams.get('sortOrder') === 'desc' ? 'desc' : 'asc';

      const where = { deleted: false };

      const manufacturers = await prisma.aircraftEngineManufacturer.findMany({
         where,
         orderBy: { [sortBy]: sortOrder },
         skip: (page - 1) * limit,
         take: limit,
      });

      const totalManufacturers = await prisma.aircraftEngineManufacturer.count({
         where,
      });

      return NextResponse.json({
         page,
         limit,
         total: totalManufacturers,
         totalPages: Math.ceil(totalManufacturers / limit),
         data: manufacturers,
      });
   } catch (error) {
      console.error('Error fetching aircraft engine manufacturers:', error);
      return NextResponse.json(
         { error: 'Internal Server Error' },
         { status: 500 },
      );
   }
}
