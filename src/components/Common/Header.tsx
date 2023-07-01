import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
} from '@mui/material'
import logo from 'assets/images/logo.svg'
import { Menu } from 'models/Common'
import { Link, NavLink } from 'react-router-dom'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import MenuIcon from '@mui/icons-material/Menu'

export interface HeaderProps {
  menuList: Menu[]
  onShopNow?: () => void
}

export function Header({ menuList = [], onShopNow }: HeaderProps) {
  return (
    <AppBar elevation={0} color="inherit" position="static" sx={{ py: 1 }}>
      <Container>
        <Toolbar disableGutters>
          <Box component={Link} to="/home">
            <Box
              component="img"
              alt="logo"
              loading="lazy"
              src={logo}
              sx={{
                '&:hover': {
                  transform: 'scale(1.2)',
                },
                transition: '0.35s',
              }}
            />
          </Box>

          <Box flexGrow={1} />

          <Stack
            direction="row"
            spacing={1}
            sx={{
              '& a': {
                color: 'inherit',
                textDecoration: 'none',
              },
              '.active': {
                color: 'primary.main',
              },
              '& button': { textTransform: 'none', fontWeight: 600 },
            }}
          >
            {menuList?.map((item, idx) => (
              <Box
                component={NavLink}
                to={item.path}
                key={idx}
                sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                <Button color="inherit">{item.label}</Button>
              </Box>
            ))}

            <IconButton color="inherit" sx={{ mr: 2 }}>
              <Badge badgeContent={1} color="primary">
                <ShoppingBagOutlinedIcon />
              </Badge>
            </IconButton>

            <Button
              variant="contained"
              color="primary"
              onClick={() => onShopNow?.()}
              sx={{ display: { xs: 'none', md: 'flex' }, borderRadius: '10px' }}
            >
              SHOP NOW
            </Button>
          </Stack>

          <IconButton
            edge="end"
            color="primary"
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
