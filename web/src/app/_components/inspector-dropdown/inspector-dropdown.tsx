import { Autocomplete, TextField } from '@mui/material';

export default function InspectorDropdown({ id, value, onChange }) {
   const inspectors = [
      { name: 'John Doe', id: 1 },
      { name: 'Jane Smith', id: 2 },
      { name: 'Bob Johnson', id: 3 },
   ];

   return (
      <Autocomplete
         id={id}
         options={inspectors}
         getOptionLabel={(option) => option.name}
         getOptionKey={(option) => option.id}
         renderInput={(params) => (
            <TextField
               {...params}
               slotProps={{ inputLabel: { shrink: false } }}
               placeholder="Inspected by"
            />
         )}
         onChange={onChange}
         value={value}
      />
   );
}
