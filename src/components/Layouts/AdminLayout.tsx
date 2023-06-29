import { Box, Stack, Typography } from '@mui/material'
import SideBar from 'components/Common/SideBar'
import { Menu } from 'models/Common'
import { ReactNode } from 'react'
import BarChartIcon from '@mui/icons-material/BarChart'
import CategoryIcon from '@mui/icons-material/Category'
import ContactsIcon from '@mui/icons-material/Contacts'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import PeopleIcon from '@mui/icons-material/People'
import GroupsIcon from '@mui/icons-material/Groups'
import { useNavigate } from 'react-router-dom'

export interface AdminLayoutProps {
  children: ReactNode
}

const primaryMenuList: Menu[] = [
  {
    label: 'Overview',
    path: '/admin/overview',
    icon: <BarChartIcon />,
  },
  {
    label: 'Products',
    path: '/admin/products',
    icon: <CategoryIcon />,
  },
  {
    label: 'Contacts',
    path: '/admin/contacts',
    icon: <ContactsIcon />,
  },
  {
    label: 'Posts',
    path: '/admin/posts',
    icon: <NewspaperIcon />,
  },
]

const secondaryMenuList: Menu[] = [
  {
    label: 'Users',
    path: '/admin/users',
    icon: <PeopleIcon />,
  },
  {
    label: 'Staff',
    path: '/admin/staff',
    icon: <GroupsIcon />,
  },
]

export function AdminLayout({ children }: AdminLayoutProps) {
  const navigate = useNavigate()

  return (
    <Stack direction="row" sx={{ bgcolor: 'grey.200', minHeight: '100vh' }}>
      <SideBar
        primaryMenuList={primaryMenuList}
        secondaryMenuList={secondaryMenuList}
        onMenuClick={(item) => navigate(`${item.path}`)}
      />

      <Stack sx={{ p: 3, width: 'calc(100% - 240px)', minHeight: '100vh' }}>
        <Box sx={{ mb: 3, flexGrow: 1 }}>{children}</Box>

        <Typography textAlign="center" variant="caption">
          Power by Minh Hung Le
        </Typography>
      </Stack>
    </Stack>
  )
}
