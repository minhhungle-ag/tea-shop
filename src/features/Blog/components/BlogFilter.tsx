import { Box, Stack } from '@mui/material'
import { Search } from 'components/FormFields/Search'
import { FilterParams } from 'models/Common'

export interface BlogFilterProps {
  filterParams?: FilterParams
  onFilterChange?: (params: FilterParams) => void
}

export function BlogFilter({ filterParams, onFilterChange }: BlogFilterProps) {
  function handleSearchChange(searchKey?: string) {
    const newParams = {
      ...filterParams,
      searchKey,
      page: 1,
    } as FilterParams

    onFilterChange?.(newParams)
  }

  return (
    <Stack flexDirection="row" alignItems="center">
      <Box width="100%">
        <Search onSearchChange={handleSearchChange} />
      </Box>
    </Stack>
  )
}
