import { Box, Stack, Typography } from '@mui/material'
import leaf from 'assets/images/leaf.svg'

const ourHistoryList = [
  {
    year: 1983,
    title: 'Establishment of Our Green Tea Plantation',
    description:
      'Our family established a green tea plantation in a hilly region with a subtropical climate that is ideal for growing tea plants.',
  },
  {
    year: 1996,
    title: 'Focus on Quality and Sustainability',
    description:
      'We began to focus on producing premium green teas while ensuring sustainable farming practices.',
  },
  {
    year: 2000,
    title: 'Modernization and Expansion',
    description:
      'We modernized our equipment and expanded our plantation, which allowed us to produce even more high-quality green teas.',
  },
  {
    year: 2006,
    title: 'Launch of Serene Leaf',
    description:
      'Inspired by our passion for green tea, we launched Serene Leaf as a premium green tea brand, using only the finest leaves from our own plantation',
  },
]

export function OurHistory() {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      sx={{ mx: -3 }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {ourHistoryList.map((item, idx) => (
        <Box key={idx} sx={{ width: { xs: '100%', sm: 1 / 2 } }}>
          <Box sx={{ p: 3 }}>
            <Stack alignItems="center" sx={{ textAlign: 'center' }} spacing={2}>
              <Typography variant="h6" color="primary">
                {item.year}
              </Typography>
              <Box component="img" width={1 / 5} alt="leaf" src={leaf} />

              <Typography variant="h5">{item.title}</Typography>
              <Typography>{item.description}</Typography>
            </Stack>
          </Box>
        </Box>
      ))}
    </Stack>
  )
}
