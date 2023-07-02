import { LinearProgress } from '@mui/material'
import { AdminLayout } from 'components/Layouts/AdminLayout'
import { MainLayout } from 'components/Layouts/MainLayout'
import { NotFound } from 'features/NotFound/NotFound'
import { lazy, Suspense } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

// main
const Home = lazy(() => import('features/Home/Home'))
const Shops = lazy(() => import('features/Shop/Shops'))
const Blog = lazy(() => import('features/Blog/Blog'))
const FindUs = lazy(() => import('features/FindUs/pages/FindUs'))

// Admin
const Products = lazy(() => import('features/Products/Products'))
const Posts = lazy(() => import('features/Posts/Posts'))

function Main() {
  return (
    <MainLayout>
      <Suspense fallback={<LinearProgress />}>
        <Routes>
          <Route index element={<Navigate to="home" />} />
          <Route path="home/*" element={<Home />} />
          <Route path="shop/*" element={<Shops />} />
          <Route path="blog/*" element={<Blog />} />
          <Route path="contact" element={<FindUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Outlet />
      </Suspense>
    </MainLayout>
  )
}

function Admin() {
  return (
    <AdminLayout>
      <Suspense fallback={<LinearProgress />}>
        <Routes>
          <Route index element={<Navigate to="products" />} />
          <Route path="products/*" element={<Products />} />
          <Route path="posts/*" element={<Posts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Outlet />
      </Suspense>
    </AdminLayout>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Main />} />
      <Route path="/admin/*" element={<Admin />} />
    </Routes>
  )
}

export default App
