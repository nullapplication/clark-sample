import { NextResponse } from 'next/server';
import prisma from '../../prisma-client';

export async function GET() {
   try {
      const codes = await prisma.ataCode.findMany({
         select: {
            chapter: true,
            code: true,
            section: true,
         },
         orderBy: { code: 'asc' },
      });

      return NextResponse.json({
         data: codes,
      });
   } catch (error) {
      console.error('Error fetching ATA codes:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
