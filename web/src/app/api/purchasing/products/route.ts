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
      const sortBy = searchParams.get('sortBy') || 'part_number';
      const sortOrder =
         searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc';

      const where = {
         customer_to_product_map: {
            some: {
               customer_id: customerId,
            },
         },
      };

      // Fetch paginated products
      const products = await prisma.product.findMany({
         select: {
            name: true,
            description: true,
            part_number: true,
            manufacturer: true,
            model: true,
            quantity_in_stock: true,
            category: true,
            sub_category: true,
            unit_price: true,
         },
         where,
         orderBy: { [sortBy]: sortOrder },
         skip: (page - 1) * limit,
         take: limit,
      });

      // Fetch total products count
      const totalProducts = await prisma.product.count({ where });

      return NextResponse.json({
         page,
         limit,
         total: totalProducts,
         totalPages: Math.ceil(totalProducts / limit),
         data: products,
      });
   } catch (error) {
      console.error('Error fetching products:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
