'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, CircularProgress } from '@mui/material';
import Link from 'next/link';

export default function AircraftManufacturerDetailPage() {
   const { id } = useParams();
   const [manufacturer, setManufacturer] = useState(null);
   const [models, setModels] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchManufacturerDetails = async () => {
         try {
            const [manufacturerResponse, modelsResponse] = await Promise.all([
               fetch(`../../api/aircraft-manufacturers/${id}`),
               fetch(`../../api/aircraft-manufacturers/${id}/models`),
            ]);

            const manufacturerData = await manufacturerResponse.json();
            const modelsData = await modelsResponse.json();

            setManufacturer(manufacturerData?.data || null);
            setModels(modelsData?.data || []);
         } catch (error) {
            console.error('Error fetching manufacturer details:', error);
         } finally {
            setLoading(false);
         }
      };

      fetchManufacturerDetails();
   }, [id]);

   const columns = [{ field: 'name', headerName: 'Model Name', flex: 1 }];

   return (
      <>
         <Typography variant="h4" gutterBottom>
            Aircraft Manufacturer Details
         </Typography>
         <Link
            href="/admin/aircraft-manufacturers"
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
                  Aircraft Models
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
