import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
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
import { usePosts } from 'hooks/usePosts'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PostFilter } from '../components/PostFilter'
import { PostList } from '../components/PostList'

export function PostPage() {
  const [removeId, setRemoveId] = useState('')
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
  })
  const navigate = useNavigate()

  const { postList, pagination, removePost } = usePosts(params)

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
        <PostFilter onAddNew={() => navigate(`/admin/posts/add-edit/create`)} />
      </Box>

      <Box>
        <PostList
          data={postList}
          pagination={pagination}
          filterParams={params}
          onPaginationModelChange={handlePaginationModelChange}
          onEditClick={(post) => navigate(`/admin/posts/add-edit/${post.id}`)}
          onRemoveClick={(post) => setRemoveId(post.id as string)}
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
              removePost.mutateAsync(removeId)
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
