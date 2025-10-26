import {
   Box,
   Card,
   CardContent,
   Typography,
   Grid2,
   Table,
   TableBody,
   TableRow,
   TableCell,
   TableHead,
   Chip,
   Button,
} from '@mui/material';
import Link from 'next/link';
import prisma from '../../../prisma-client';

export default async function AircraftDetailPage({ params }) {
   const { tail_number } = await params;

   // Fetch aircraft details with installed inventory items
   let aircraft = null;
   let installedInventory = [];
   
   try {
      aircraft = await prisma.aircraft.findUnique({
         where: { tail_number },
         include: {
            customer: true,
         }
      });
      
      if (aircraft) {
         // Fetch physical inventory items installed on this aircraft with show_on_aircraft = true
         installedInventory = await prisma.physicalInventoryItem.findMany({
            where: { 
               aircraft_id: aircraft.id,
               show_on_aircraft: true,
               deleted: false
            },
            include: {
               product: true,
            },
            orderBy: {
               name: 'asc'
            }
         });
      }
   } catch (error) {
      console.error('Error fetching aircraft details:', error);
   }

   if (!aircraft) {
      return (
         <Box sx={{ p: 4 }}>
            <Typography variant="h4">Aircraft Not Found</Typography>
            <Typography>No details available for this aircraft.</Typography>
         </Box>
      );
   }

   // Helper function to format dates
   const formatDate = (date) =>
      date ? new Date(date).toLocaleDateString() : 'N/A';

   return (
      <>
         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h4" sx={{ flexGrow: 0, mr: 2 }}>
               {aircraft.tail_number} - {aircraft.model}
            </Typography>
            <Box sx={{ flexShrink: 0 }}>
               <Link href="/admin/aircraft" style={{ textDecoration: 'none' }}>
                  <Button variant="outlined">Back to Aircraft List</Button>
               </Link>
            </Box>
         </Box>

         {/* General Info Card */}
         <Card sx={{ mb: 3 }}>
            <CardContent>
               <Typography variant="h6" gutterBottom>
                  General Information
               </Typography>
               <Grid2 container spacing={2}>
                  <Grid2 item xs={12} sm={6}>
                     <Typography>
                        <strong>Tail Number:</strong> {aircraft.tail_number}
                     </Typography>
                     <Typography>
                        <strong>Serial Number:</strong>{' '}
                        {aircraft.serial_number || 'N/A'}
                     </Typography>
                     <Typography>
                        <strong>Model:</strong> {aircraft.model || 'N/A'}
                     </Typography>
                     <Typography>
                        <strong>Manufacturer:</strong>{' '}
                        {aircraft.manufacturer || 'N/A'}
                     </Typography>
                     <Typography>
                        <strong>Year:</strong>{' '}
                        {aircraft.year_of_manufacture || 'N/A'}
                     </Typography>
                     <Typography>
                        <strong>Customer:</strong>{' '}
                        {aircraft.customer?.name || 'N/A'}
                     </Typography>
                  </Grid2>
                  <Grid2 item xs={12} sm={6}>
                     <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Typography component="span" sx={{ mr: 1 }}>
                           <strong>Status:</strong>
                        </Typography>
                        <Chip 
                           label={aircraft.status} 
                           color={aircraft.status === 'ACTIVE' ? 'success' : 'default'} 
                           size="small"
                        />
                     </Box>
                     <Typography>
                        <strong>Registration Country:</strong>{' '}
                        {aircraft.registration_country || 'N/A'}
                     </Typography>
                     <Typography>
                        <strong>Home Base Airport:</strong>{' '}
                        {aircraft.home_base_airport || 'N/A'}
                     </Typography>
                     <Typography>
                        <strong>Maintenance Program:</strong>{' '}
                        {aircraft.maintenance_program || 'N/A'}
                     </Typography>
                     <Typography>
                        <strong>IFR Certified:</strong>{' '}
                        {aircraft.is_ifr_certified ? 'Yes' : 'No'}
                     </Typography>
                     <Typography>
                        <strong>Number of Engines:</strong>{' '}
                        {aircraft.number_of_engines || 'N/A'}
                     </Typography>
                  </Grid2>
               </Grid2>
            </CardContent>
         </Card>

         {/* Maintenance Info */}
         <Card sx={{ mb: 3 }}>
            <CardContent>
               <Typography variant="h6" gutterBottom>
                  Maintenance Information
               </Typography>
               <Grid2 container spacing={2}>
                  <Grid2 item xs={12} sm={6}>
                     <Typography>
                        <strong>Next Inspection Due:</strong>{' '}
                        {formatDate(aircraft.next_inspection_due)}
                     </Typography>
                     <Typography>
                        <strong>Last 100-Hour Inspection:</strong>{' '}
                        {formatDate(aircraft.last_100_hour_inspection)}
                     </Typography>
                     <Typography>
                        <strong>Last Major Inspection:</strong>{' '}
                        {formatDate(aircraft.last_major_inspection)}
                     </Typography>
                  </Grid2>
                  <Grid2 item xs={12} sm={6}>
                     <Typography>
                        <strong>Airworthiness Expiry:</strong>{' '}
                        {formatDate(aircraft.airworthiness_certificate_expiry)}
                     </Typography>
                     <Typography>
                        <strong>Registration Expiry:</strong>{' '}
                        {formatDate(aircraft.registration_expiry)}
                     </Typography>
                     <Typography>
                        <strong>Insurance Expiry:</strong>{' '}
                        {formatDate(aircraft.insurance_expiry)}
                     </Typography>
                  </Grid2>
               </Grid2>
            </CardContent>
         </Card>

         {/* Installed Inventory Items */}
         <Card>
            <CardContent>
               <Typography variant="h6" gutterBottom>
                  Installed Components
               </Typography>
               {installedInventory.length > 0 ? (
                  <Table>
                     <TableHead>
                        <TableRow>
                           <TableCell><strong>Part Number</strong></TableCell>
                           <TableCell><strong>Name</strong></TableCell>
                           <TableCell><strong>Serial Number</strong></TableCell>
                           <TableCell><strong>Description</strong></TableCell>
                           <TableCell><strong>Current Usage</strong></TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {installedInventory.map((item) => (
                           <TableRow key={item.id}>
                              <TableCell>{item.number}</TableCell>
                              <TableCell>{item.name || (item.product?.name || 'N/A')}</TableCell>
                              <TableCell>{item.serial_number || 'N/A'}</TableCell>
                              <TableCell>{item.description || 'N/A'}</TableCell>
                              <TableCell>
                                 {item.current_usage ? (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                       {Object.entries(item.current_usage).map(([key, value], index) => (
                                          <Chip 
                                             key={index} 
                                             label={`${key}: ${typeof value === 'object' ? value.value : value}`} 
                                             color="primary" 
                                             variant="outlined" 
                                             size="small"
                                          />
                                       ))}
                                    </Box>
                                 ) : (
                                    'No usage data'
                                 )}
                              </TableCell>
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
               ) : (
                  <Typography>No components installed on this aircraft.</Typography>
               )}
            </CardContent>
         </Card>
      </>
   );
}
