import { Route, Routes } from 'react-router-dom'
import { BlogDetail } from './pages/BlogDetail'
import { BlogPage } from './pages/BlogPage'

export default function Blog() {
  return (
    <Routes>
      <Route index element={<BlogPage />} />
      <Route path=":id" element={<BlogDetail />} />
    </Routes>
  )
}
