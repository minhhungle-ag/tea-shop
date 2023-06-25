import { Box, Container, Divider } from '@mui/material'
import { HeroBanner } from '../components/HeroBanner'
import { WhyUs } from '../components/WhyUs'
import { useNavigate } from 'react-router-dom'
import cup from 'assets/images/cup.svg'
import strainer from 'assets/images/strainer.svg'
import whisk from 'assets/images/whisk.svg'
import { LatestProducts } from '../components/LastestProducts'
import { useProducts } from 'hooks/useProducts'
import { useState } from 'react'
import { About } from '../components/About'
import { VisitUs } from '../components/VisitUs'
import { PostList } from '../components/PostList'

const whyUsList = [
  {
    title: 'Artisanal Production',
    description:
      'Donec tincidunt nisi id neque dapibus aliquam. Vestibulum in erat libero. Etiam nec urna mattis, fermentum.',
    imageUrl: strainer,
  },
  {
    title: 'High-Quality Ingredients',
    description:
      'In a tincidunt nulla, vitae sollicitudin sapien. Integer et risus efficitur, varius tellus at, ultrices arcu.',
    imageUrl: whisk,
  },
  {
    title: 'Unique Flavor Profiles',
    description:
      'Morbi iaculis rutrum nisl, a hendrerit dui finibus ac. Donec at est consectetur velit porttitor sodales.',
    imageUrl: cup,
  },
]

export function HomePage() {
  const [params] = useState({ page: 1, limit: 4 })
  const navigate = useNavigate()
  const { productList } = useProducts(params)

  return (
    <Box>
      <HeroBanner
        onViewProducts={() => navigate('/shop')}
        onVisitOurStore={() => navigate('/contact')}
      />

      <WhyUs whyUsList={whyUsList} onViewProducts={() => navigate('/shop')} />

      <LatestProducts
        onCardClick={(product) => navigate(`/home/${product._id}`)}
        onViewProducts={() => navigate('/shop')}
        productList={productList}
      />

      <About />
      <VisitUs onContactClick={() => navigate(`/contact`)} />

      <Container>
        <Divider />
      </Container>

      <PostList />

      <Box height={600} />
    </Box>
  )
}
