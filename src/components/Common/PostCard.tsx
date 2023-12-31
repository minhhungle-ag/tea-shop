import { Box, Stack, Typography } from '@mui/material'
import dayjs from 'dayjs'

export interface PostCardProps {
  title?: string
  imageUrl?: string
  author?: string
  shortDescription?: string
  createdAt?: string
}

export function PostCard({
  title,
  imageUrl,
  shortDescription,
  author,
  createdAt,
}: PostCardProps) {
  return (
    <Stack
      spacing={2}
      sx={{
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        border: '1px solid',
        borderColor: 'grey.300',
      }}
    >
      <Box
        component="img"
        alt="img"
        width="100%"
        src={imageUrl}
        sx={{ aspectRatio: '16/9' }}
      />

      <Box sx={{ p: 3, flexGrow: 1 }}>
        <Typography fontWeight={600} color="grey">
          {author && 'By ' + author}
          {createdAt && ' - ' + dayjs(createdAt).format('MMM DD, YYYY')}
        </Typography>

        <Typography variant="h6" fontWeight={700}>
          {title}
        </Typography>
        <Typography>{shortDescription}</Typography>
      </Box>
    </Stack>
  )
}
