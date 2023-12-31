import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
} from '@mui/material'
import { useProducts } from 'hooks/useProducts'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductFilter } from '../components/ProductFilter'
import { ProductList } from '../components/ProductList'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

export function ProductPage() {
  const [removeId, setRemoveId] = useState('')
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
  })
  const navigate = useNavigate()

  const { productList, pagination, removeProduct } = useProducts(params)

  function handlePaginationModelChange(model: {
    page: number
    pageSize: number
  }) {
    setParams({
      ...params,
      page: model.page + 1,
      limit: model.pageSize,
    })
  }

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <ProductFilter
          onAddNew={() => navigate(`/admin/products/add-edit/create`)}
        />
      </Box>

      <Box>
        <ProductList
          data={productList}
          pagination={pagination}
          filterParams={params}
          onPaginationModelChange={handlePaginationModelChange}
          onEditClick={(product) =>
            navigate(`/admin/products/add-edit/${product._id}`)
          }
          onRemoveClick={(product) => setRemoveId(product._id as string)}
        />
      </Box>

      <Dialog open={Boolean(removeId)}>
        <DialogTitle>
          <Stack direction="row" alignItems="center">
            <ErrorOutlineIcon color="warning" />
            <Box component="span" fontWeight={700} sx={{ ml: 0.5 }}>
              Confirm
            </Box>
          </Stack>
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            Are you sure remove {removeId} ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setRemoveId('')}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              removeProduct.mutateAsync(removeId)
              setRemoveId('')
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
