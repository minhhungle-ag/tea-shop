import FilterListIcon from '@mui/icons-material/FilterList'
import { Box, Container, Pagination, Stack, Typography } from '@mui/material'
import { Title } from 'components/Common/Title'
import { useProducts } from 'hooks/useProducts'
import { FilterParams } from 'models/Common'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopFilter } from '../components/ShopFilter'
import { ShopList } from '../components/ShopList'

export function ShopPage() {
  const [params, setParams] = useState({ page: 1, limit: 6 })

  const navigate = useNavigate()

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
      <Container>
        <Box sx={{ my: 10 }}>
          <Title
            pageName="Shop"
            title="Pick Your Favorite Tea"
            subtitle="Cras dapibus varius sapien ac efficitur. Fusce tempus tellus quis
            laoreet volutpat. Pellentesque vehicula pellentesque nulla at."
          />
        </Box>

        <Stack direction="row" flexWrap="wrap" sx={{ my: 10, mx: -1.5 }}>
          <Box sx={{ width: { xs: '100%', sm: 250 } }}>
            <Box sx={{ px: 1.5, py: 3 }}>
              <Stack
                direction="row"
                alignItems="center"
                sx={{ mb: 2 }}
                spacing={1}
              >
                <FilterListIcon color="primary" />
                <Typography>Filters</Typography>
              </Stack>

              <ShopFilter
                filterParams={params}
                onFilterChange={handleFilterChange}
              />
            </Box>
          </Box>

          <Box
            sx={{
              width: { xs: '100%', sm: `calc(100% - 250px)`, height: 'auto' },
            }}
          >
            <Stack sx={{ p: 1.5, height: '100%' }}>
              <Box flexGrow={1}>
                <ShopList
                  productList={productList}
                  isLoading={isLoading}
                  onCardClick={(product) => navigate(`/shop/${product._id}`)}
                />
              </Box>

              <Stack justifyContent="center" alignItems="center" sx={{ my: 3 }}>
                <Pagination
                  variant="outlined"
                  shape="rounded"
                  page={params.page}
                  count={pagination?.totalPages}
                  onChange={handlePageChange}
                />
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
