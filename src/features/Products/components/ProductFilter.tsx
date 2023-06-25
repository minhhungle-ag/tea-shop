import { Box, Stack } from '@mui/material'
import { Search } from 'components/FormFields/Search'
import { SortField } from 'components/FormFields/SortField'
import { FilterParams } from 'models/Common'

export interface ProductFilterProps {
  filterParams?: FilterParams
}

export function ProductFilter({ filterParams }: ProductFilterProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-end"
      spacing={2}
    >
      <Box>
        <Search />
      </Box>

      <Box>
        <SortField
          label="Type"
          optionList={[
            {
              label: 'Desc',
              value: 'desc',
            },
            {
              label: 'Asc',
              value: 'asc',
            },
          ]}
        />
      </Box>

      <Box>
        <SortField
          label="Sort"
          optionList={[
            {
              label: 'Desc',
              value: 'desc',
            },
            {
              label: 'Asc',
              value: 'asc',
            },
          ]}
        />
      </Box>
    </Stack>
  )
}
