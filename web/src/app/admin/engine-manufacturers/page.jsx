'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import { getEngineManufacturers } from './actions';

export default function EngineManufacturerListPage() {
   const [manufacturers, setManufacturers] = useState([]);
   const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(1);
   const [limit, setLimit] = useState(10);
   const [sortBy, setSortBy] = useState('name');
   const [sortOrder, setSortOrder] = useState('asc');

   useEffect(() => {
      fetchManufacturers();
   }, []);

   const fetchManufacturers = async () => {
      setLoading(true);
      const data = await getEngineManufacturers(
         page,
         limit,
         sortBy,
         sortOrder,
      );
      setManufacturers(data);
      setLoading(false);
   };

   const columns = [
      {
         field: 'details',
         headerName: 'Details',
         width: 75,
         renderCell: (params) => (
            <Link
               href={`/admin/engine-manufacturers/${params.row.id}`}
               style={{ textDecoration: 'none', color: 'blue' }}
            >
               View
            </Link>
         ),
      },
      { field: 'name', headerName: 'Name', flex: 1 },
   ];

   return (
      <>
         <Typography variant="h4" gutterBottom>
            Engine Manufacturers
         </Typography>

         <Box sx={{ height: 500, width: '100%', marginTop: 2 }}>
            <DataGrid
               rows={manufacturers}
               columns={columns}
               loading={loading}
               checkboxSelection
            />
         </Box>
      </>
   );
}
