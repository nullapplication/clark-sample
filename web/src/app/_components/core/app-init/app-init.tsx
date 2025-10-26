'use client';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ReactNode } from 'react';

export function AppInit({ children }: { children: ReactNode }) {
   // This serves as the client-facing entry point for the application

   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         {children}
      </LocalizationProvider>
   );
}
