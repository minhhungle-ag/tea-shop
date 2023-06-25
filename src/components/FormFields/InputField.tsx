import { TextField, TextFieldProps } from '@mui/material'
import { InputHTMLAttributes } from 'react'
import { Control, useController } from 'react-hook-form'

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  control: Control<any>
  label?: string
  InputProps?: any
  multiline?: boolean
  rows?: number
  maxRows?: number
}

export function InputField({
  name,
  control,
  label,
  multiline = false,
  rows = 5,
  InputProps,
  InputLabelProps,
  ...inputProps
}: InputFieldProps & TextFieldProps) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  })

  return (
    <TextField
      fullWidth
      size="small"
      margin="normal"
      value={value || ''}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      label={label}
      variant="outlined"
      error={invalid}
      multiline={multiline}
      rows={rows}
      InputProps={InputProps}
      InputLabelProps={InputLabelProps}
      helperText={error?.message}
      inputProps={inputProps}
    />
  )
}
