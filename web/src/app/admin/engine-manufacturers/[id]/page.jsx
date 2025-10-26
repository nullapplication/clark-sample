'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, CircularProgress } from '@mui/material';
import Link from 'next/link';
import { getEngineManufacturer, getEngineModels } from './actions';

export default function EngineManufacturerDetailPage() {
   const { id } = useParams();
   const [loading, setLoading] = useState(true);
   const [manufacturer, setManufacturer] = useState([]);
   const [models, setModels] = useState([]);

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      setLoading(true);

      const manufaturerData = await getEngineManufacturer(id);
      setManufacturer(manufaturerData);

      const modelsData = await getEngineModels(id);
      setModels(modelsData);

      setLoading(false);
   };

   const columns = [{ field: 'name', headerName: 'Model Name', flex: 1 }];

   return (
      <>
         <Typography variant="h4" gutterBottom>
            Engine Manufacturer Details
         </Typography>
         <Link
            href="/admin/engine-manufacturers"
            style={{ textDecoration: 'none', color: 'blue' }}
         >
            ← Back to Manufacturers
         </Link>

         {loading ? (
            <CircularProgress />
         ) : manufacturer ? (
            <>
               <Box sx={{ my: 3 }}>
                  <Typography variant="h6">
                     <strong>Name:</strong> {manufacturer.name}
                  </Typography>
                  <Typography variant="body1">
                     <strong>Created At:</strong>{' '}
                     {new Date(manufacturer.created_at).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body1">
                     <strong>Updated At:</strong>{' '}
                     {new Date(manufacturer.updated_at).toLocaleDateString()}
                  </Typography>
               </Box>

               <Typography variant="h5" gutterBottom>
                  Engine Models
               </Typography>
               <Box sx={{ height: 400, width: '100%', marginTop: 2 }}>
                  <DataGrid
                     sx={{ flex: 1, minWidth: '100%' }}
                     rows={models}
                     columns={columns}
                     checkboxSelection
                  />
               </Box>
            </>
         ) : (
            <Typography variant="h6" color="error">
               Manufacturer not found.
            </Typography>
         )}
      </>
   );
}
