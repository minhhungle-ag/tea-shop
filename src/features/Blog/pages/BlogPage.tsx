import { Box, Container, Pagination, Stack } from '@mui/material'
import { FilterParams } from 'models/Common'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BlogFilter } from '../components/BlogFilter'

import { Title } from 'components/Common/Title'
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
        <Box sx={{ my: 10 }}>
          <Title
            pageName="Blog"
            title="Explore Recipes & Tips"
            subtitle=" Fusce ornare tristique eros, sit amet vehicula ligula pretium et.
            Quisque eleifend turpis sed libero venenatis accumsan."
          />
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
              onCardClick={(blog) => navigate(`/blog/${blog.id}`)}
            />

            <Stack justifyContent="center" alignItems="center" sx={{ my: 3 }}>
              <Pagination
                variant="outlined"
                shape="rounded"
                page={params.page}
                count={pagination?.totalPage}
                onChange={handlePageChange}
              />
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
