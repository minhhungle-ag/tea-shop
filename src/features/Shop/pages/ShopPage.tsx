import { Box, Container, Pagination, Stack, Typography } from '@mui/material'
import { ShopList } from '../components/ShopList'
import { useState } from 'react'
import { useProducts } from 'hooks/useProducts'
import { ShopFilter } from '../components/ShopFilter'
import { FilterParams } from 'models/Common'

export function ShopPage() {
  const [params, setParams] = useState({ page: 1, limit: 4 })

  const { productList, isLoading, pagination } = useProducts(params)

  function handlePageChange(e: any, newPage: number) {
    setParams({
      ...params,
      page: newPage,
    })
  }
  function handleFilterChange(newParams: FilterParams) {
    setParams(newParams)
  }

  return (
    <Box>
      <Box textAlign="center" maxWidth={700} sx={{ mx: 'auto', my: 15 }}>
        <Typography variant="h6" fontWeight={400} color="primary" gutterBottom>
          Shop
        </Typography>

        <Typography variant="h4" fontWeight={600} gutterBottom>
          Pick Your Favorite Tea
        </Typography>

        <Typography>
          Cras dapibus varius sapien ac efficitur. Fusce tempus tellus quis
          laoreet volutpat. Pellentesque vehicula pellentesque nulla at.
        </Typography>
      </Box>

      <Container>
        <Box>
          <Box>
            <ShopFilter
              filterParams={params}
              onFilterChange={handleFilterChange}
            />
          </Box>

          <Box sx={{ py: 15 }}>
            <ShopList productList={productList} isLoading={isLoading} />
            <Stack justifyContent="center" alignItems="center" sx={{ my: 3 }}>
              <Pagination
                variant="outlined"
                shape="rounded"
                page={params.page}
                count={pagination?.totalPages}
                onChange={handlePageChange}
              />
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
