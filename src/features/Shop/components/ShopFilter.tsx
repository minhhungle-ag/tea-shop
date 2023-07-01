import { Box, Stack, Typography } from '@mui/material'
import RangeSliderField from 'components/FormFields/RangeSliderField'
import { Search } from 'components/FormFields/Search'
import { SortField } from 'components/FormFields/SortField'
import { debounce } from 'lodash'
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
      searchKey,
      page: 1,
    } as FilterParams

    onFilterChange?.(newParams)
  }
  function handleTypeChange(type?: string) {
    const newParams = {
      ...filterParams,
      type,
      page: 1,
    } as FilterParams

    onFilterChange?.(newParams)
  }
  const handlePriceChange = debounce((numbers: number[]) => {
    const priceFrom = numbers[0]
    const priceTo = numbers[1]

    const newParams = {
      ...filterParams,
      priceFrom,
      priceTo,
      page: 1,
    } as FilterParams

    onFilterChange?.(newParams)
  }, 600)

  return (
    <Stack justifyContent="center" spacing={3} sx={{ width: '100%' }}>
      <Box>
        <Search onSearchChange={handleSearchChange} />
      </Box>

      <Box>
        <SortField
          onChange={handleTypeChange}
          label="Category"
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

      <Box>
        <Typography color="primary">Price</Typography>
        <RangeSliderField onChange={handlePriceChange} />
      </Box>
    </Stack>
  )
}
