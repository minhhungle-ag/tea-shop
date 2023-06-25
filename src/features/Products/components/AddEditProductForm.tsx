import { Box, Button, Stack } from '@mui/material'
import { InputField } from 'components/FormFields/InputField'
import { SelectField } from 'components/FormFields/SelectField'
import { ProductPayload } from 'models/Product'
import { useForm } from 'react-hook-form'

export interface AddEditProductFormProps {
  data?: ProductPayload
  onSubmit?: (formValues: ProductPayload) => void
}

export function AddEditProductForm({
  data,
  onSubmit,
}: AddEditProductFormProps) {
  const { control, handleSubmit } = useForm({
    defaultValues: data || {
      title: '',
      imageUrl: '',
      shortDescription: '',
      description: '',
      type: 'tea',
    },
  })

  const handleFormSubmit = handleSubmit((formValues: ProductPayload) => {
    onSubmit?.(formValues)
  })

  return (
    <Box>
      <Stack component="form" noValidate onSubmit={handleFormSubmit}>
        <InputField control={control} name="title" label="Title" />
        <InputField control={control} name="price" label="Price" />
        <InputField control={control} name="imageUrl" label="Image Url" />
        <SelectField
          control={control}
          name="type"
          label="Type"
          optionList={[
            {
              label: 'Tea',
              value: 'tea',
            },
            {
              label: 'Snack',
              value: 'snack',
            },
            {
              label: 'Accessories',
              value: 'accessories',
            },
          ]}
        />
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
