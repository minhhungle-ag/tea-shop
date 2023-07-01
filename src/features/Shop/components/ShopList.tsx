import { Box, Stack, Typography } from '@mui/material'
import { ProductCard } from 'components/Common/ProductCard'
import { ProductPayload } from 'models/Product'

export interface WhyUsProps {
  productList?: ProductPayload[]
  isLoading?: boolean
  onCardClick?: (item: ProductPayload) => void
}

export function ShopList({
  productList = [],
  onCardClick,
  isLoading,
}: WhyUsProps) {
  if (isLoading) {
    return (
      <Box>
        <Typography>Loading ...</Typography>
      </Box>
    )
  }

  return (
    <Stack direction="row" flexWrap="wrap" sx={{ mx: -1 }}>
      {productList?.map((item, idx) => (
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
  )
}
