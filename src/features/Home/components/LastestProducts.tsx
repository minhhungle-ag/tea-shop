import { Box, Button, Container, Stack } from '@mui/material'
import { ProductCard } from 'components/Common/ProductCard'
import { Title } from 'components/Common/Title'
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
          <Title
            pageName="Our Tea"
            title="Latest Products"
            subtitle="Maecenas convallis, quam quis porta ornare, felis ligula posuere
            dui, non placerat enim dolor ac justo."
          />

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
