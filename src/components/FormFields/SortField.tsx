import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { SelectOption } from 'models/Common'
import { useState } from 'react'

export interface SelectedFieldProps {
  optionList?: SelectOption[]
  label?: string
  hideOptionAll?: boolean
  defaultValue?: string
  onChange?: (value?: string) => void
}

export function SortField({
  label,
  optionList,
  hideOptionAll = false,
  defaultValue = '',
  onChange,
}: SelectedFieldProps) {
  const [value, setValue] = useState(defaultValue)

  function handleChange(e: SelectChangeEvent) {
    onChange?.(e.target.value)
    setValue(e.target.value)
  }

  return (
    <FormControl fullWidth size="small" sx={{ minWidth: 200 }}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={handleChange}>
        {!hideOptionAll && <MenuItem value="">All</MenuItem>}
        {optionList?.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
