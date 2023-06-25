import { Box, Stack, Typography } from '@mui/material'

export interface WhyUsCardProps {
  title?: string
  imageUrl?: string
  description?: string
}

export function WhyUsCard({ title, imageUrl, description }: WhyUsCardProps) {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      spacing={2}
      textAlign="center"
    >
      <Box width={1 / 3}>
        <Box
          component="img"
          alt="img"
          width="100%"
          src={imageUrl}
          sx={{ aspectRatio: '1/1' }}
        />
      </Box>

      <Typography variant="h5" fontWeight={600}>
        {title}
      </Typography>
      <Typography fontWeight={400}>{description}</Typography>
    </Stack>
  )
}
