import { Autocomplete, Chip, TextField } from '@mui/material';

export function SimpleUncontrolledAutoComplete<TItem>({
   options,
   value,
   getOptionLabel,
   getOptionKey,
   onValueChange,
   disabled = false,
}: {
   options: TItem[];
   value: TItem | null;
   getOptionLabel: (option: TItem) => string;
   getOptionKey: (option: TItem | null) => string;
   onValueChange?: (newValue: TItem | null) => void;
   disabled?: boolean;
}) {
   return (
      <Autocomplete
         multiple={false}
         value={value || null}
         options={options}
         disabled={disabled}
         onChange={(...[, value]) => onValueChange?.(value as TItem | null)}
         getOptionKey={getOptionKey}
         getOptionLabel={getOptionLabel}
         isOptionEqualToValue={(option, value) =>
            option == value || getOptionKey(option) == getOptionKey(value)
         }
         renderOption={(props, option) => (
            <li {...props} key={getOptionKey(option)}>
               {getOptionLabel(option)}
            </li>
         )}
         renderTags={(tagValue, getTagProps) =>
            tagValue.map((option, index) => (
               <Chip
                  {...getTagProps({ index })}
                  key={getOptionKey(option)}
                  label={getOptionLabel(option)}
               />
            ))
         }
         renderInput={(params) => <TextField {...params} required />}
      />
   );
}
