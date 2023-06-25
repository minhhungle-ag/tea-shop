import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { WhyUsCard, WhyUsCardProps } from 'components/Common/WhyUsCard'

export interface WhyUsProps {
  whyUsList: WhyUsCardProps[]
  onViewProducts: () => void
}

export function WhyUs({ whyUsList = [], onViewProducts }: WhyUsProps) {
  return (
    <Box sx={{ bgcolor: '#f5f1ea', py: 15 }}>
      <Container>
        <Stack spacing={10} alignItems="center">
          <Box textAlign="center" maxWidth={650} sx={{ mx: 'auto' }}>
            <Typography
              variant="h6"
              fontWeight={400}
              color="primary"
              gutterBottom
            >
              Why Serene Leaf
            </Typography>

            <Typography variant="h4" fontWeight={600} gutterBottom>
              Explore the Special Qualities of Our Green Tea
            </Typography>

            <Typography>
              Phasellus sed erat metus. Cras pharetra, elit sit amet molestie
              placerat, metus lectus sodales purus, posuere.
            </Typography>
          </Box>

          <Box>
            <Stack direction="row" flexWrap="wrap" sx={{ mx: -1 }}>
              {whyUsList?.map((item, idx) => (
                <Box width={{ xs: '100%', sm: 1 / 2, md: 1 / 3 }} key={idx}>
                  <Box sx={{ p: 1 }}>
                    <WhyUsCard
                      title={item.title}
                      imageUrl={item.imageUrl}
                      description={item.description}
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
              View Products
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
