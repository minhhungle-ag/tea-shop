import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Avatar,
  ListItemText,
  Stack,
} from '@mui/material'
import logo from 'assets/images/logo.svg'
import { Menu } from 'models/Common'
import { Link } from 'react-router-dom'

const drawerWidth = 240

export interface SideBarProps {
  primaryMenuList?: Menu[]
  secondaryMenuList?: Menu[]
  user?: any
  onClose?: () => void
  onMenuClick?: (item: Menu) => void
}

export default function SideBar({
  primaryMenuList,
  secondaryMenuList,
  user,
  onClose,
  onMenuClick,
}: SideBarProps) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        '& .MuiDrawer-paper': {
          width: drawerWidth,
          height: '100vh',
          boxSizing: 'border-box',
          border: 0,
        },
      }}
      variant="permanent"
      anchor="left"
      open
      onClose={() => onClose?.()}
    >
      <Stack height="100%" sx={{ pb: 3 }}>
        <Box component={Link} to="/admin" sx={{ p: 3 }}>
          <Box component="img" alt="logo" width="90%" src={logo} />
        </Box>

        <List>
          {primaryMenuList &&
            primaryMenuList.length &&
            primaryMenuList.map((item, idx) => (
              <ListItem key={idx} disablePadding>
                <ListItemButton onClick={() => onMenuClick?.(item)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>

        <Box flexGrow={1} />

        <List>
          {secondaryMenuList &&
            secondaryMenuList.length &&
            secondaryMenuList.map((item, idx) => (
              <ListItem key={idx} disablePadding>
                <ListItemButton onClick={() => onMenuClick?.(item)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {user ? <AccountCircleIcon /> : <Avatar>H</Avatar>}
              </ListItemIcon>
              <ListItemText primary="Minh Hung" />
            </ListItemButton>
          </ListItem>
        </List>
      </Stack>
    </Drawer>
  )
}
