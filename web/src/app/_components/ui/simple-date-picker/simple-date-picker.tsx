import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';
import { Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

export function SimpleDatePicker<
   T extends FieldValues,
   TName extends FieldPath<T>,
>({
   control,
   name,
   label,
}: {
   control: Control<T>;
   name: TName;
   label?: string;
}) {
   return (
      <Controller
         control={control}
         name={name}
         render={({
            field: { value, onChange, disabled: fieldDisabled },
            fieldState: { error },
         }) => (
            <>
               <DatePicker
                  label={label}
                  value={value ? dayjs(value) : null}
                  onChange={(data) => onChange(data?.toDate() ?? null)}
                  disabled={fieldDisabled}
               />
               {error && (
                  <Typography color="error" variant="body2">
                     {error.message}
                  </Typography>
               )}
            </>
         )}
      />
   );
}
