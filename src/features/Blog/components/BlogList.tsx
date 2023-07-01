import { Box, Stack, Typography } from '@mui/material'
import { PostCard } from 'components/Common/PostCard'
import { PostPayload } from 'models/Post'

export interface ShopListProps {
  blogList?: PostPayload[]
  isLoading?: boolean
  onCardClick?: (item: PostPayload) => void
}

export function BlogList({
  blogList = [],
  onCardClick,
  isLoading,
}: ShopListProps) {
  if (isLoading) {
    return (
      <Box>
        <Typography>Loading ...</Typography>
      </Box>
    )
  }

  return (
    <Stack direction="row" flexWrap="wrap" sx={{ mx: -1.5 }}>
      {blogList?.map((item, idx) => (
        <Box
          width={{ xs: '100%', sm: 1 / 2 }}
          key={idx}
          onClick={() => onCardClick?.(item)}
          sx={{ height: 'auto' }}
        >
          <Box sx={{ p: 1.5, height: '100%' }}>
            <PostCard
              author={item.author}
              title={item.title}
              imageUrl={item.imageUrl}
              createdAt={item.createdAt}
              shortDescription={item.shortDescription}
            />
          </Box>
        </Box>
      ))}
    </Stack>
  )
}
