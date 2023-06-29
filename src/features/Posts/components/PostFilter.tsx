import AddIcon from '@mui/icons-material/Add'
import { Box, Button, Stack } from '@mui/material'
import { Search } from 'components/FormFields/Search'
import { FilterParams } from 'models/Common'
export interface PostFilterProps {
  filterParams?: FilterParams
  onAddNew?: () => void
}

export function PostFilter({ filterParams, onAddNew }: PostFilterProps) {
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

      <Box flexGrow={1} />

      <Box>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          onClick={() => onAddNew?.()}
        >
          Add new Post
        </Button>
      </Box>
    </Stack>
  )
}
