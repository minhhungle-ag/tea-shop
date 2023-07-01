import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import { InputField } from 'components/FormFields/InputField'
import { useProduct } from 'hooks/useProducts'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { formatCurrencyEN } from 'utils/common'

export function ProductDetail() {
  const { id } = useParams()
  const { control } = useForm({
    defaultValues: {
      quantity: 0,
    },
  })

  const { data } = useProduct(id as string)

  return (
    <Box>
      <Container>
        <Stack direction="row" flexWrap="wrap" sx={{ mx: -1.5, py: 10 }}>
          <Box sx={{ width: { xs: '100%', sm: 1 / 2 }, height: 'auto' }}>
            <Box sx={{ p: 3, position: 'relative', height: '100%' }}>
              <Box
                sx={{ width: '100%', position: { sm: 'sticky' }, top: 40 }}
                component="img"
                alt="image"
                src={data?.imageUrl}
              />
            </Box>
          </Box>

          <Box sx={{ width: { xs: '100%', sm: 1 / 2 } }}>
            <Box sx={{ p: 1.5 }}>
              <Stack spacing={3}>
                <Typography variant="h4" fontWeight={600}>
                  {data?.title}
                </Typography>

                <Typography sx={{ whiteSpace: 'pre-wrap' }}>
                  {data?.shortDescription}
                </Typography>

                <Typography>
                  Price: {formatCurrencyEN(Number(data?.price) || 0)}
                </Typography>

                <Box>
                  <Typography>Quantity</Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Box width={100}>
                      <InputField
                        type="number"
                        control={control}
                        name="quantity"
                      />
                    </Box>
                    <Box>
                      <Button
                        size="large"
                        variant="contained"
                        type="submit"
                        sx={{ mt: 1 }}
                      >
                        Add to cart
                      </Button>
                    </Box>
                  </Stack>
                </Box>

                <Divider />

                <Typography paragraph sx={{ whiteSpace: 'pre-wrap' }}>
                  {data?.description}
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
