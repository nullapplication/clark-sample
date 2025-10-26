import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../prisma-client';

// todo: hardcoding the customer id for now for tenant isolation
const customerId = 'cm6sgh61g00070cjmh30y819q';

export async function GET(req: NextRequest) {
   try {
      const url = new URL(req.url);
      const searchParams = url.searchParams;

      const page = parseInt(searchParams.get('page') || '1', 10);
      const limit = parseInt(searchParams.get('limit') || '10', 10);
      const sortBy = searchParams.get('sortBy') || 'name';
      const sortOrder =
         searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc';

      const where = {
         customer_to_supplier_map: {
            some: {
               customer_id: customerId,
            },
         },
      };

      // Fetch paginated suppliers
      const suppliers = await prisma.supplier.findMany({
         select: {
            name: true,
            contact_person: true,
            primary_phone: true,
            primary_email: true,
            services_provided: true,
            is_mro: true,
            rating: true,
            notes: true,
         },
         where,
         orderBy: { [sortBy]: sortOrder },
         skip: (page - 1) * limit,
         take: limit,
      });

      // Fetch total suppliers count
      const totalSuppliers = await prisma.supplier.count({ where });

      return NextResponse.json({
         page,
         limit,
         total: totalSuppliers,
         totalPages: Math.ceil(totalSuppliers / limit),
         data: suppliers,
      });
   } catch (error) {
      console.error('Error fetching suppliers:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
