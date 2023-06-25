import { Box, Button, Stack } from '@mui/material'
import { Search } from 'components/FormFields/Search'
import { SortField } from 'components/FormFields/SortField'
import { FilterParams } from 'models/Common'
import AddIcon from '@mui/icons-material/Add'
export interface ProductFilterProps {
  filterParams?: FilterParams
  onAddNew?: () => void
}

export function ProductFilter({ filterParams, onAddNew }: ProductFilterProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
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

      <Box flexGrow={1} />

      <Box>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          onClick={() => onAddNew?.()}
        >
          Add new product
        </Button>
      </Box>
    </Stack>
  )
}
