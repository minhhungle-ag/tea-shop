import { Box, Button, Stack } from '@mui/material'
import { InputField } from 'components/FormFields/InputField'
import { SubscribePayload } from 'models/Subscribe'
import { useForm } from 'react-hook-form'

export interface SubscribeProps {
  isLoading?: boolean
  onSubscribe?: (formValues: SubscribePayload) => void
}

export function Subscribe({ isLoading, onSubscribe }: SubscribeProps) {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
    },
  })

  const handleFormSubmit = handleSubmit((formValues: { email: string }) => {
    onSubscribe?.(formValues)
    reset()
  })

  return (
    <Stack
      direction="row"
      alignItems="center"
      component="form"
      onSubmit={handleFormSubmit}
      noValidate
    >
      <Box>
        <InputField
          name="email"
          placeholder="Enter your email..."
          control={control}
          sx={{ height: 32 }}
        />
      </Box>

      <Box sx={{ mt: 1, ml: 2 }}>
        <Button
          variant="contained"
          disabled={isLoading}
          type="submit"
          sx={{ height: 49 }}
        >
          Subscribe
        </Button>
      </Box>
    </Stack>
  )
}
