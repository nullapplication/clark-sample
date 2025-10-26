import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../../../prisma-client';

export async function POST(
   req: NextRequest,
   props: { params: Promise<{ code: string; tail_number: string }> },
) {
   const params = await props.params;
   try {
      const code = params.code;
      const body = await req.json();

      const resolvedRecord = await prisma.unscheduledMaintenance.update({
         where: {
            code: code,
         },
         data: {
            status: 'CLOSED',
            resolved_by: body.resolved_by,
            resolved_date: new Date(),
         },
      });

      return NextResponse.json(resolvedRecord);
   } catch (error) {
      console.error('Error resolving maintenance issue:', error);
      return NextResponse.json(
         { error: 'Error resolving maintenance issue' },
         { status: 500 },
      );
   }
}
