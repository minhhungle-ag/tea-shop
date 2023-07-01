import { Box } from '@mui/material'
import { Footer } from 'components/Common/Footer'
import { Header } from 'components/Common/Header'
import { Menu } from 'models/Common'
import { ReactNode } from 'react'

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
  return (
    <Box>
      <Header menuList={menuList} />

      <Box minHeight="100vh">{children}</Box>
      <Footer menuList={menuList} />
    </Box>
  )
}
