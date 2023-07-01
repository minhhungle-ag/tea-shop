import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { PostCard } from 'components/Common/PostCard'
import { PostPayload } from 'models/Post'

export interface WhyUsProps {
  postList?: PostPayload[]
  onViewPost?: () => void
  onCardClick?: (item: PostPayload) => void
}

export function PostList({
  postList = [],
  onViewPost,
  onCardClick,
}: WhyUsProps) {
  return (
    <Box sx={{ py: 15 }}>
      <Container>
        <Stack spacing={10} alignItems="center">
          <Box textAlign="center" maxWidth={650} sx={{ mx: 'auto' }}>
            <Typography
              variant="h6"
              fontWeight={400}
              color="primary"
              gutterBottom
            >
              Blog
            </Typography>

            <Typography variant="h4" fontWeight={600} gutterBottom>
              Creative Recipes & Tips
            </Typography>

            <Typography>
              Aenean sodales nisl non dui lacinia luctus. Curabitur vitae luctus
              eros. Vivamus fermentum dictum metus, et.
            </Typography>
          </Box>

          <Box width="100%">
            <Stack
              direction="row"
              flexWrap="wrap"
              sx={{ mx: -1.5 }}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              {postList &&
                postList.length &&
                postList.map((item, idx) => (
                  <Box
                    width={{ xs: '100%', sm: 1 / 2 }}
                    key={idx}
                    onClick={() => onCardClick?.(item)}
                    sx={{ height: 'auto' }}
                  >
                    <Box sx={{ p: 1.5, height: '100%' }}>
                      <PostCard
                        title={item.title}
                        imageUrl={item.imageUrl}
                        shortDescription={item.shortDescription}
                        author={item.author}
                        createdAt={item.createdAt}
                      />
                    </Box>
                  </Box>
                ))}
            </Stack>
          </Box>

          <Box>
            <Button
              variant="contained"
              sx={{ textTransform: 'none' }}
              onClick={() => onViewPost?.()}
            >
              View All Post
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
