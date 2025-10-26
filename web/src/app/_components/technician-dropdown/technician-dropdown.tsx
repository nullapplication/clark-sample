import { Autocomplete, TextField } from '@mui/material';

export default function TechnicianDropdown({ id, value, onChange }) {
   const technicians = [
      { name: 'Alice Brown', id: 4 },
      { name: 'Charlie Davis', id: 5 },
      { name: 'Eve Wilson', id: 6 },
      { name: 'Frank Miller', id: 7 },
      { name: 'Grace Lee', id: 8 },
      { name: 'Hank Thomas', id: 9 },
      { name: 'Ivy Garcia', id: 10 },
   ];

   return (
      <Autocomplete
         id={id}
         options={technicians}
         getOptionLabel={(option) => option.name}
         getOptionKey={(option) => option.id}
         renderInput={(params) => (
            <TextField
               {...params}
               slotProps={{ inputLabel: { shrink: false } }}
               placeholder="Performed by"
            />
         )}
         onChange={onChange}
         value={value}
      />
   );
}
