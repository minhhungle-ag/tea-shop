import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { PostDetail } from './pages/PostDetail'
import { ProductDetail } from './pages/ProductDetail'

export default function Home() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="product-detail/:id" element={<ProductDetail />} />
      <Route path="post-detail/:id" element={<PostDetail />} />
    </Routes>
  )
}
