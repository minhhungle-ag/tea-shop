import { Box, Typography } from '@mui/material'
import { useProduct, useProducts } from 'hooks/useProducts'
import { ProductPayload } from 'models/Product'
import { useSnackbar } from 'notistack'
import { useParams } from 'react-router-dom'
import { AddEditProductForm } from '../components/AddEditProductForm'

export function AddEditProduct() {
  const { id } = useParams()

  const { data, isLoading } = useProduct(id as string)

  const { addProduct, editProduct } = useProducts()
  const { enqueueSnackbar } = useSnackbar()

  const loading = id && id !== 'create' ? isLoading : false

  function handleSubmit(formValues: ProductPayload) {
    if (id && id !== 'create') {
      editProduct
        .mutateAsync(formValues)
        .then(() => {
          enqueueSnackbar('Edit product successfully!', { variant: 'success' })
        })
        .catch((error) => {
          console.log(error)
          enqueueSnackbar(error.message, { variant: 'error' })
        })

      return
    }

    addProduct
      .mutateAsync(formValues)
      .then((res) => {
        enqueueSnackbar('Add product successfully!', { variant: 'success' })
      })
      .catch((error) => {
        console.log(error)
        enqueueSnackbar(error.message, { variant: 'error' })
      })
  }

  return (
    <Box>
      <Typography fontWeight={600} sx={{ mb: 2 }}>
        {id && id !== 'create' ? 'Edit Product' : 'Add Product'}
      </Typography>

      <Box>
        {loading && <div>Loading...</div>}
        {!loading && <AddEditProductForm data={data} onSubmit={handleSubmit} />}
      </Box>
    </Box>
  )
}
