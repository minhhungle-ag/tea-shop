import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment, TextField } from '@mui/material'

import React from 'react'
import debounce from 'lodash/debounce'

export interface SearchFieldProps {
  placeholder?: string
  onSearchChange?: (value?: string) => void
}

export function Search({
  placeholder = 'Search...',
  onSearchChange,
}: SearchFieldProps) {
  const handleSearchChange = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onSearchChange?.(e.target.value)
    },
    600
  )

  return (
    <TextField
      sx={{
        mr: 1,
        width: '100%',
      }}
      size="small"
      placeholder={placeholder}
      onChange={handleSearchChange}
      InputProps={{
        'aria-label': 'search',
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}
