import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { ProductCard } from 'components/Common/ProductCard'
import { ProductPayload } from 'models/Product'

export interface WhyUsProps {
  productList?: ProductPayload[]
  onViewProducts?: () => void
  onCardClick?: (item: ProductPayload) => void
}

export function LatestProducts({
  productList = [],
  onViewProducts,
  onCardClick,
}: WhyUsProps) {
  return (
    <Box sx={{ py: 15 }}>
      <Container>
        <Stack spacing={10} alignItems="center">
          <Box textAlign="center" maxWidth={650} sx={{ mx: 'auto' }}>
            <Typography
              variant="h6"
              fontWeight={400}
              color="primary"
              gutterBottom
            >
              Our Tea
            </Typography>

            <Typography variant="h4" fontWeight={600} gutterBottom>
              Latest Products
            </Typography>

            <Typography>
              Maecenas convallis, quam quis porta ornare, felis ligula posuere
              dui, non placerat enim dolor ac justo.
            </Typography>
          </Box>

          <Box width="100%">
            <Stack
              direction="row"
              flexWrap="wrap"
              sx={{ mx: -1 }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {productList &&
                productList.length &&
                productList.map((item, idx) => (
                  <Box
                    width={{ xs: '100%', sm: 1 / 2, md: 1 / 4 }}
                    key={idx}
                    onClick={() => onCardClick?.(item)}
                  >
                    <Box sx={{ p: 1 }}>
                      <ProductCard
                        title={item.title}
                        imageUrl={item.imageUrl}
                        price={parseInt(item.price)}
                      />
                    </Box>
                  </Box>
                ))}
            </Stack>
          </Box>

          <Box>
            <Button
              variant="contained"
              sx={{ textTransform: 'none' }}
              onClick={() => onViewProducts?.()}
            >
              View All Products
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
