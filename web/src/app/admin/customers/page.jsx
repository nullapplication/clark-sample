'use client';

import { useState, useEffect } from 'react';
import { getCustomers } from './actions';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, CircularProgress } from '@mui/material';

export default function AdminCustomersPage() {
   const [customers, setCustomers] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchCustomers = async () => {
         const data = await getCustomers();
         setCustomers(data);
         setLoading(false);
      };

      fetchCustomers();
   }, []);

   const columns = [
      { field: 'name', headerName: 'Customer Name', flex: 1 },
      { field: 'primary_email', headerName: 'Email', flex: 1 },
      { field: 'primary_phone', headerName: 'Phone', flex: 1 },
      { field: 'primary_city', headerName: 'City', width: 150 },
      { field: 'primary_state', headerName: 'State', width: 120 },
      { field: 'primary_country', headerName: 'Country', width: 150 },
   ];

   return (
      <>
         <Typography variant="h4" gutterBottom>
            Manage Customers
         </Typography>

         {loading ? (
            <CircularProgress />
         ) : (
            <Box sx={{ height: 500, width: '100%', marginTop: 2 }}>
               <DataGrid
                  sx={{ flex: 1, minWidth: '100%' }}
                  rows={customers}
                  columns={columns}
                  checkboxSelection
               />
            </Box>
         )}
      </>
   );
}
