import { Box, Stack, Typography } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { AddEditPost } from './pages/AddEditPost'
import { PostPage } from './pages/PostPage'

export default function Posts() {
  return (
    <Stack spacing={2} height="100%">
      <Typography variant="h5" fontWeight={700} sx={{ mr: 3 }}>
        Posts
      </Typography>

      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor: (theme) => theme.palette.common.white,
        }}
      >
        <Routes>
          <Route index element={<PostPage />} />
          <Route path="add-edit/:id" element={<AddEditPost />} />
        </Routes>
      </Box>
    </Stack>
  )
}
