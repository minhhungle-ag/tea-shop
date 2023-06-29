import { Box, Button, Stack } from '@mui/material'
import { InputField } from 'components/FormFields/InputField'
import { PostPayload } from 'models/Post'

import { useForm } from 'react-hook-form'

export interface AddEditProductFormProps {
  data?: PostPayload
  onSubmit?: (formValues: PostPayload) => void
}

export function AddEditPostForm({ data, onSubmit }: AddEditProductFormProps) {
  const { control, handleSubmit } = useForm({
    defaultValues: data || {
      title: '',
      imageUrl: '',
      shortDescription: '',
      description: '',
      author: '',
    },
  })

  const handleFormSubmit = handleSubmit((formValues: PostPayload) => {
    onSubmit?.(formValues)
  })

  return (
    <Box>
      <Stack component="form" noValidate onSubmit={handleFormSubmit}>
        <InputField control={control} name="title" label="Title" />
        <InputField control={control} name="author" label="Author" />
        <InputField control={control} name="imageUrl" label="Image Url" />
        <InputField
          multiline
          control={control}
          name="shortDescription"
          label="Short Description"
          sx={{
            whiteSpace: 'pre-wrap',
          }}
        />
        <InputField
          multiline
          rows={15}
          control={control}
          name="description"
          label="Description"
          sx={{
            whiteSpace: 'pre-wrap',
          }}
        />

        <Stack direction="row" spacing={2} sx={{ ml: 'auto', mt: 2 }}>
          <Button variant="outlined">Cancel</Button>

          <Button type="submit" variant="contained">
            {data ? 'Edit Product' : 'Add New Product'}
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
