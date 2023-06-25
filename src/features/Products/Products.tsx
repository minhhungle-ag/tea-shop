import { Box, Stack, Typography } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { AddEditProduct } from './pages/AddEditProduct'
import { ProductPage } from './pages/ProductPage'

export default function Products() {
  return (
    <Stack spacing={2} height="100%">
      <Typography variant="h5" fontWeight={700} sx={{ mr: 3 }}>
        Products
      </Typography>

      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor: (theme) => theme.palette.common.white,
        }}
      >
        <Routes>
          <Route index element={<ProductPage />} />
          <Route path="/add-edit/:id" element={<AddEditProduct />} />
        </Routes>
      </Box>
    </Stack>
  )
}
