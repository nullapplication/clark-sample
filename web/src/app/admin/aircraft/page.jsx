'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { getAircraft } from './actions';
import debounce from 'lodash/debounce';

export default function AircraftListPage() {
   const [aircraft, setAircraft] = useState([]);
   const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(1);
   const [limit, setLimit] = useState(10);
   const [sortBy, setSortBy] = useState('created_at');
   const [sortOrder, setSortOrder] = useState('desc');
   const [search, setSearch] = useState('');

   useEffect(() => {
      fetchAircraft(search);
   }, []);

   const fetchAircraft = async (searchTerm) => {
      setLoading(true);
      const data = await getAircraft(
         page,
         limit,
         sortBy,
         sortOrder,
         searchTerm,
      );

      setAircraft(data);
      setLoading(false);
   };

   const debouncedFetchAircraft = useCallback(
      debounce((searchTerm) => {
         fetchAircraft(searchTerm);
      }, 500), // Adjust the debounce delay (in ms) as needed
      [page, limit, sortBy, sortOrder],
   );

   const handleSearch = (event) => {
      const value = event.target.value;
      setSearch(value);
      debouncedFetchAircraft(value);
   };

   const columns = [
      {
         field: 'details',
         headerName: 'Details',
         width: 75,
         renderCell: (params) => (
            <Link
               href={`/admin/aircraft/${params.row.tail_number}`}
               style={{ textDecoration: 'none', color: 'blue' }}
            >
               View
            </Link>
         ),
      },
      { field: 'tail_number', headerName: 'Tail Number', width: 100 },
      {
         field: 'is_accelerated',
         headerName: 'Accelerated?',
         width: 110,
         type: 'boolean',
      },
      { field: 'serial_number', headerName: 'Serial Number', width: 160 },
      { field: 'manufacturer', headerName: 'Manufacturer', width: 160 },
      { field: 'model', headerName: 'Model', width: 140 },
      { field: 'owner', headerName: 'Owner', width: 180 },
      { field: 'status', headerName: 'Status', width: 120 },
      {
         field: 'total_flight_hours',
         headerName: 'Total Flight Hours',
         type: 'number',
         width: 160,
      },
      {
         field: 'engine_cycles',
         headerName: 'Engine Cycles',
         type: 'number',
         width: 140,
      },
      {
         field: 'engine_hours',
         headerName: 'Engine Hours',
         type: 'number',
         width: 140,
      },
      { field: 'landings', headerName: 'Landings', type: 'number', width: 120 },
      {
         field: 'last_flight_date',
         headerName: 'Last Flight Date',
         width: 160,
         renderCell: (params) => {
            const dateValue = params.value;

            // Ensure the date exists and is valid
            if (!dateValue || isNaN(new Date(dateValue).getTime())) {
               return 'N/A';
            }

            return new Date(dateValue).toLocaleDateString();
         },
      },
   ];

   return (
      <main>
         <h2>Aircraft</h2>
         <p>
            <Link href="/admin/aircraft/fetch-faa-aircraft">
               Fetch FAA Aircraft
            </Link>
         </p>

         <form>
            <input type="text" placeholder="Search" onChange={handleSearch} />
         </form>
         <Box sx={{ height: 500, width: '100%', marginTop: 2 }}>
            <DataGrid
               rows={aircraft}
               columns={columns}
               getRowId={(row) => row.tail_number}
               loading={loading}
               checkboxSelection
            />
         </Box>
      </main>
   );
}
