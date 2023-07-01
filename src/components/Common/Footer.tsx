import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import logo from 'assets/images/logo.svg'
import { Menu } from 'models/Common'
import { Link, NavLink } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'

const socialList = [
  {
    icon: <FacebookIcon />,
    value: 'facebook',
  },
  {
    icon: <TwitterIcon />,
    value: 'twitter',
  },
  {
    icon: <InstagramIcon />,
    value: 'instagram',
  },
  {
    icon: <YouTubeIcon />,
    value: 'youtube',
  },
]

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
    label: 'Blog',
    path: '/blog',
  },
]

const aboutList = [
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Find Us',
    path: '/contact',
  },
]

export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#f5f1ea' }}>
      <Container>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          sx={{ py: 3, mx: -3 }}
        >
          <Box width={{ xs: '100%', sm: 1 / 3 }}>
            <Box sx={{ p: 3 }}>
              <Box component={Link} to="/">
                <Box component="img" alt="logo" src={logo} />
              </Box>

              <Typography sx={{ mt: 3 }}>
                123 Ipsum Street, Consectetur Adipiscing, Ipsum City, Dolor
                State, 56789(123) 456 - 7891 (123) 456 - 7891
              </Typography>
            </Box>
          </Box>

          <Box width={{ xs: '100%', sm: 'auto' }}>
            <Box sx={{ p: 3 }}>
              <Typography
                variant="h6"
                fontWeight={600}
                color="primary"
                sx={{ mb: 3 }}
              >
                MENU
              </Typography>

              <Stack
                sx={{
                  '& a': {
                    color: 'inherit',
                    textDecoration: 'none',
                  },

                  '.active': {
                    color: 'primary.main',
                  },
                }}
              >
                {menuList.map((menu, idx) => (
                  <Box component={NavLink} to={menu.path} key={idx}>
                    <Typography>{menu.label}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>

          <Box width={{ xs: '100%', sm: 'auto' }}>
            <Box sx={{ p: 3 }}>
              <Typography
                variant="h6"
                sx={{ mb: 3 }}
                fontWeight={600}
                color="primary"
              >
                ABOUT
              </Typography>

              <Stack
                sx={{
                  '& a': {
                    color: 'inherit',
                    textDecoration: 'none',
                  },

                  '.active': {
                    color: 'primary.main',
                  },
                }}
              >
                {aboutList.map((menu, idx) => (
                  <Box component={NavLink} to={menu.path} key={idx}>
                    <Typography>{menu.label}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>

          <Box width={{ xs: '100%', sm: 'auto' }}>
            <Box sx={{ p: 3 }}>
              <Typography
                variant="h6"
                fontWeight={600}
                color="primary"
                sx={{ mb: 3 }}
              >
                SOCIAL
              </Typography>

              <Stack direction="row" alignItems="center">
                {socialList?.map((item, idx) => (
                  <IconButton key={idx}>{item.icon}</IconButton>
                ))}
              </Stack>
            </Box>
          </Box>
        </Stack>

        <Divider />

        <Box sx={{ py: 3 }}>
          <Typography textAlign="center">
            {new Date().getFullYear() +
              `. Built by Salmon Pixel · Powered by Minh Hung Le`}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
