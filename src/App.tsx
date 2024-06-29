import { LinearProgress } from '@mui/material'
import { MainLayout } from 'components/Layouts/MainLayout'
import { NotFound } from 'features/NotFound/NotFound'
import { lazy, Suspense } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

// main
const Home = lazy(() => import('features/Home/pages/Home'))
const Shops = lazy(() => import('features/Shop/Shops'))
const Blog = lazy(() => import('features/Blog/Blog'))
const About = lazy(() => import('features/About/pages/About'))
const FindUs = lazy(() => import('features/FindUs/pages/FindUs'))

function App() {
  return (
    <Suspense fallback={<LinearProgress />}>
      <MainLayout>
        <Routes>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="shop/*" element={<Shops />} />
          <Route path="blog/*" element={<Blog />} />
          <Route path="contact" element={<FindUs />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Outlet />
      </MainLayout>
    </Suspense>
  )
}

export default App
