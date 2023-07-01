import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import * as React from 'react'

export interface RangeSliderFieldProps {
  max?: number
  onChange?: (value: number[]) => void
}

export default function RangeSliderField({
  max = 100,
  onChange,
}: RangeSliderFieldProps) {
  const [value, setValue] = React.useState<number[]>([0, max])

  const handleValueChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])
    onChange?.(value as number[])
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleValueChange}
        valueLabelDisplay="auto"
        max={max}
        marks={value.map((value) => ({
          value: value,
          label: value,
        }))}
      />
    </Box>
  )
}
