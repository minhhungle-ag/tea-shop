import { Box, Stack, Typography } from '@mui/material'
import { formatCurrencyEN } from 'utils/common'
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

export interface ProductCardProps {
  title?: string
  imageUrl?: string
  price?: number
  onAddToCart?: () => void
}

export function ProductCard({
  title,
  imageUrl,
  price,
}: // onAddToCart,
ProductCardProps) {
  return (
    <Stack
      justifyContent="center"
      alignItems="flex-start"
      spacing={2}
      textAlign="center"
      sx={{ cursor: 'pointer' }}
    >
      <Box
        component="img"
        alt="img"
        width="100%"
        src={imageUrl}
        sx={{ aspectRatio: '1/1' }}
      />

      <Box textAlign="left">
        <Typography fontWeight={600}>{title}</Typography>

        <Typography fontStyle="italic">
          {formatCurrencyEN(price || 0)}
        </Typography>
      </Box>
      {/* <Button endIcon={<ArrowRightAltIcon />} onClick={() => onAddToCart?.()}>
        Add to cart
      </Button> */}
    </Stack>
  )
}
