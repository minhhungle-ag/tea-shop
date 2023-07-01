import { Box, Stack } from '@mui/material'
import { Search } from 'components/FormFields/Search'
import { SortField } from 'components/FormFields/SortField'
import { FilterParams } from 'models/Common'

export interface ProductFilterProps {
  filterParams?: FilterParams
  onFilterChange?: (params: FilterParams) => void
}

export function ShopFilter({
  filterParams,
  onFilterChange,
}: ProductFilterProps) {
  function handleSearchChange(searchKey?: string) {
    const newParams = {
      ...filterParams,
      searchKey: searchKey || '',
    } as FilterParams

    onFilterChange?.(newParams)
  }
  function handleSortChange(type?: string) {
    const newParams = {
      ...filterParams,
      type: type || '',
    } as FilterParams

    onFilterChange?.(newParams)
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      spacing={2}
    >
      <Box>
        <Search onSearchChange={handleSearchChange} />
      </Box>

      <Box flexGrow={1} />

      <Box>
        <SortField
          onChange={handleSortChange}
          label="Type"
          optionList={[
            {
              label: 'Tea',
              value: 'tea',
            },
            {
              label: 'Snack',
              value: 'snack',
            },
            {
              label: 'Accessories',
              value: 'accessories',
            },
          ]}
        />
      </Box>
    </Stack>
  )
}
