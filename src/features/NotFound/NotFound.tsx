import { Stack, Typography } from '@mui/material'

export function NotFound() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: `calc(100vh - 64px)`, width: '100%' }}
    >
      <Typography
        variant="h6"
        sx={{ pr: 3, mr: 3, borderRight: '1px solid black' }}
      >
        404
      </Typography>{' '}
      <Typography variant="h6">PAGE NOT FOUND</Typography>
    </Stack>
  )
}
