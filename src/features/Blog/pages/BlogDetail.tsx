import { Box, Container, Stack, Typography } from '@mui/material'
import dayjs from 'dayjs'
import { usePost } from 'hooks/usePosts'
import { useParams } from 'react-router-dom'

export function BlogDetail() {
  const { id } = useParams()
  const { data } = usePost(id as string)

  return (
    <Box>
      <Container>
        <Stack sx={{ py: 10 }} spacing={3}>
          <Box>
            <Typography fontWeight={600} color="grey">
              By {data?.author} -{' '}
              {dayjs(data?.createdAt).format('MMM DD, YYYY')}
            </Typography>

            <Typography variant="h4" fontWeight={600}>
              {data?.title}
            </Typography>
          </Box>

          <Box>
            <Box
              sx={{ width: '100%' }}
              component="img"
              loading="lazy"
              alt="image"
              src={data?.imageUrl}
            />
          </Box>

          <Box sx={{ width: '100%' }}>
            <Stack spacing={3}>
              <Box
                sx={{
                  borderLeft: '5px solid',
                  borderLeftColor: 'primary.main',
                  pl: 3,
                  py: 2,
                }}
              >
                <Typography
                  color="grey"
                  sx={{ whiteSpace: 'pre-wrap', fontStyle: 'italic' }}
                >
                  {data?.shortDescription}
                </Typography>
              </Box>

              <Typography paragraph sx={{ whiteSpace: 'pre-wrap' }}>
                {data?.description}
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
