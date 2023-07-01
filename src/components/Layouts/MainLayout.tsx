import { Box } from '@mui/material'
import { Footer } from 'components/Common/Footer'
import { Header } from 'components/Common/Header'
import { Menu } from 'models/Common'
import { ReactNode, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export interface MainLayoutProps {
  children: ReactNode
}

const menuList: Menu[] = [
  {
    label: 'Home',
    path: '/home',
  },
  {
    label: 'Shop',
    path: '/shop',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Blog',
    path: '/blog',
  },
  {
    label: 'Find Us',
    path: '/contact',
  },
]

export function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }, [location])

  function handleShopNow() {
    navigate('/shop')
  }

  return (
    <Box>
      <Header menuList={menuList} onShopNow={handleShopNow} />

      <Box minHeight="100vh">{children}</Box>
      <Footer />
    </Box>
  )
}
