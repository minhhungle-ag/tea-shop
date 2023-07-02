import { Box, Container, Pagination, Stack, Typography } from '@mui/material'
import { FilterParams } from 'models/Common'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BlogFilter } from '../components/BlogFilter'

import { usePosts } from 'hooks/usePosts'
import { BlogList } from '../components/BlogList'

export function BlogPage() {
  const [params, setParams] = useState({ page: 1, limit: 6 })

  const navigate = useNavigate()

  const { postList, isLoading, pagination } = usePosts(params)

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
        <Box textAlign="center" maxWidth={700} sx={{ mx: 'auto', my: 10 }}>
          <Typography
            variant="h5"
            fontWeight={400}
            color="primary"
            gutterBottom
          >
            Blog
          </Typography>

          <Typography variant="h4" fontWeight={600} gutterBottom>
            Explore Recipes & Tips
          </Typography>

          <Typography>
            Fusce ornare tristique eros, sit amet vehicula ligula pretium et.
            Quisque eleifend turpis sed libero venenatis accumsan.
          </Typography>
        </Box>

        <Stack sx={{ my: 10 }}>
          <Box sx={{ mb: 3 }}>
            <BlogFilter
              filterParams={params}
              onFilterChange={handleFilterChange}
            />
          </Box>

          <Box data-aos-duration="2000">
            <BlogList
              blogList={postList}
              isLoading={isLoading}
              onCardClick={(blog) => navigate(`/blog/${blog._id}`)}
            />

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
        </Stack>
      </Container>
    </Box>
  )
}
