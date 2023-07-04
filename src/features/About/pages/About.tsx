import { Box, Container, Stack } from '@mui/material'
import { Title } from 'components/Common/Title'
import aboutBanner from 'assets/images/AboutHero1.png'
import { OurHistory } from '../components/OurHistory'
import { OurStory } from '../components/OurStory'
import { OurFounder } from '../components/OurFounder'
import { Review } from '../components/Review'
export default function About() {
  return (
    <Box>
      <Container>
        <Stack sx={{ my: 10 }} spacing={10}>
          <Title
            pageName="About Serene Leaf"
            title="Our Passion for Green Tea: A Tradition of Excellence"
            subtitle="Sed fermentum tellus neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur cursus est, vitae finibus elit condimentum eu."
          />

          <Box
            data-aos="fade-up"
            data-aos-duration="1000"
            component="img"
            width="100%"
            alt="about-banner"
            src={aboutBanner}
          />
        </Stack>
      </Container>

      <Box sx={{ py: 15, bgcolor: '#f5f1ea' }}>
        <Container>
          <Stack spacing={10}>
            <Title
              pageName="Our History"
              title="Our Green Tea Plantation Journey"
            />
            <OurHistory />
          </Stack>
        </Container>
      </Box>

      <Box>
        <Container>
          <OurStory />
        </Container>
      </Box>

      <Box>
        <OurFounder />
      </Box>

      <Box>
        <Container>
          <Review />
        </Container>
      </Box>
    </Box>
  )
}
