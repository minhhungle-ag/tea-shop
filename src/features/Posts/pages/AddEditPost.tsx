import { Box, Typography } from '@mui/material'
import { usePost, usePosts } from 'hooks/usePosts'
import { PostPayload } from 'models/Post'
import { useSnackbar } from 'notistack'
import { useParams } from 'react-router-dom'
import { AddEditPostForm } from '../components/AddEditPostForm'

export function AddEditPost() {
  const { id } = useParams()

  const { data, isLoading } = usePost(id as string)

  const { addPost, editPost } = usePosts()
  const { enqueueSnackbar } = useSnackbar()

  const loading = id && id !== 'create' ? isLoading : false

  function handleSubmit(formValues: PostPayload) {
    if (id && id !== 'create') {
      editPost
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

    addPost
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
        {!loading && <AddEditPostForm data={data} onSubmit={handleSubmit} />}
      </Box>
    </Box>
  )
}
