import { Box } from '@mui/material'
import { Footer } from 'components/Common/Footer'
import { Header } from 'components/Common/Header'
import { useSubscribe } from 'hooks/useSubscribe'
import { Menu } from 'models/Common'
import { SubscribePayload } from 'models/Subscribe'
import { enqueueSnackbar } from 'notistack'
import { ReactNode, useEffect, useState } from 'react'
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
  const [subscribeLoading, setSubscribeLoading] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const { addSubscribe } = useSubscribe()

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }, [location])

  function handleShopNow() {
    navigate('/shop')
  }

  function handleSubscribe(formValues: SubscribePayload) {
    setSubscribeLoading(true)

    addSubscribe
      .mutateAsync(formValues)
      .then((res) => {
        enqueueSnackbar('Thank you! Your submission has been received!', {
          variant: 'success',
        })
      })
      .catch((error) => {
        console.log(error)
        enqueueSnackbar(error.message, { variant: 'error' })
      })
      .finally(() => {
        setSubscribeLoading(false)
      })
  }

  return (
    <Box>
      <Header menuList={menuList} onShopNow={handleShopNow} />

      <Box minHeight="100vh">{children}</Box>
      <Footer onSubscribe={handleSubscribe} isLoading={subscribeLoading} />
    </Box>
  )
}
