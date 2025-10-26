'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import { logger } from '../../logger';

export default function AircraftManufacturerListPage() {
   const [manufacturers, setManufacturers] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchManufacturers = async () => {
         try {
            const url = '../api/aircraft-manufacturers';
            const response = await fetch(url);
            const data = await response.json();
            setManufacturers(data?.data || []);
         } catch (error) {
            logger.error('Error fetching manufacturers:', error);
         } finally {
            setLoading(false);
         }
      };

      fetchManufacturers();
   }, []);

   const columns = [
      {
         field: 'details',
         headerName: 'Details',
         width: 75,
         renderCell: (params) => (
            <Link
               href={`/admin/aircraft-manufacturers/${params.row.id}`}
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
            Aircraft Manufacturers
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
