import { Box, Container, Divider } from '@mui/material'
import cup from 'assets/images/cup.svg'
import strainer from 'assets/images/strainer.svg'
import whisk from 'assets/images/whisk.svg'
import { usePosts } from 'hooks/usePosts'
import { useProducts } from 'hooks/useProducts'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { About } from '../components/About'
import { HeroBanner } from '../components/HeroBanner'
import { LatestProducts } from '../components/LastestProducts'
import { PostList } from '../components/PostList'
import { VisitUs } from '../components/VisitUs'
import { WhyUs } from '../components/WhyUs'

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

export default function Home() {
  const [params] = useState({ page: 1, limit: 4 })
  const [postParams] = useState({ page: 1, limit: 2 })

  const navigate = useNavigate()

  const { productList } = useProducts(params)
  const { postList } = usePosts(postParams)

  return (
    <Box>
      <HeroBanner
        onViewProducts={() => navigate('/shop')}
        onVisitOurStore={() => navigate('/contact')}
      />

      <WhyUs whyUsList={whyUsList} onViewProducts={() => navigate('/shop')} />

      <LatestProducts
        onCardClick={(product) => navigate(`/shop/${product.id}`)}
        onViewProducts={() => navigate('/shop')}
        productList={productList}
      />

      <About />

      <VisitUs onContactClick={() => navigate(`/contact`)} />

      <Container>
        <Divider />
      </Container>

      <PostList
        postList={postList}
        onCardClick={(post) => navigate(`/blog/${post.id}`)}
        onViewPost={() => navigate('/blog')}
      />
    </Box>
  )
}
