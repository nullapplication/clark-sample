import {
   Control,
   Controller,
   FieldPath,
   FieldValues,
   PathValue,
} from 'react-hook-form';
import { Autocomplete, Chip, TextField } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { toMap } from '@utils/general-utils';

export function SimpleAutoComplete<
   T extends FieldValues,
   TName extends FieldPath<T>,
   TOptions extends PathValue<T, TName>[TName],
>({
   control,
   name,
   label,
   multiple = false,
   options,
   getOptionLabel = (opt) => (opt as unknown as any)?.name ?? opt,
   getOptionKey = (opt) => (opt as unknown as any)?.id ?? opt,
   placeholder = 'Select or begin typing',
   required = false,
   saveAsKey = false,
   memoize = false,
   onValueChanged,
   freeSolo = false,
   disabled = false,
}: {
   control: Control<T>;
   name: TName;
   label?: string;
   multiple?: boolean;
   options: TOptions;
   getOptionLabel?: (option: TOptions[number]) => string;
   getOptionKey?: (option: TOptions[number]) => string;
   placeholder?: string;
   required?: boolean;
   saveAsKey?: boolean;
   memoize?: boolean;
   onValueChanged?: (option: TOptions[number]) => void;
   freeSolo?: boolean;
   disabled?: boolean;
}) {
   const optionsMap = useMemo(
      () =>
         toMap(
            memoize ? options : [],
            (x) => getOptionKey(x)?.toString(),
            getOptionLabel,
         ),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [memoize, options],
   );

   const getMemoizedOptionLabel = useCallback(
      (option: TOptions[number]) => {
         const label = getOptionLabel(option);

         if (!memoize) {
            return label;
         }

         return optionsMap.get(getOptionKey(option)?.toString()) ?? label;
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [memoize, optionsMap],
   );

   return (
      <Controller
         control={control}
         name={name}
         render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Autocomplete
               multiple={multiple}
               freeSolo={freeSolo}
               value={value || null}
               getOptionLabel={getMemoizedOptionLabel}
               getOptionKey={getOptionKey}
               isOptionEqualToValue={(option, value) =>
                  getOptionKey(option) == getOptionKey(value) ||
                  getMemoizedOptionLabel(option) ==
                     getMemoizedOptionLabel(value)
               }
               options={options}
               onChange={(...[, values]) => {
                  const newValues =
                     saveAsKey && values !== null
                        ? Array.isArray(values)
                           ? values.map(getOptionKey)
                           : getOptionKey(values)
                        : values;

                  onChange(newValues);
                  onValueChanged?.(newValues);
               }}
               onInputChange={(...[, val]) => {
                  if (!freeSolo) {
                     return;
                  }

                  onChange(val);
               }}
               renderOption={(props, option) => (
                  <li {...props} key={getOptionKey(option)}>
                     {getMemoizedOptionLabel(option)}
                  </li>
               )}
               renderTags={(tagValue, getTagProps) =>
                  tagValue.map((option, index) => (
                     <Chip
                        {...getTagProps({ index })}
                        key={getOptionKey(option)}
                        label={getMemoizedOptionLabel(option)}
                     />
                  ))
               }
               renderInput={(params) => (
                  <TextField
                     {...params}
                     disabled={params.disabled || disabled}
                     placeholder={placeholder}
                     label={label}
                     helperText={error?.message}
                     error={!!error?.message}
                     required={required}
                  />
               )}
            />
         )}
      />
   );
}
