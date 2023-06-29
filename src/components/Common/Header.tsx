import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";
import logo from "assets/images/logo.svg";
import { Menu } from "models/Common";
import { Link, NavLink } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";

export interface HeaderProps {
  menuList: Menu[];
}

export function Header({ menuList = [] }: HeaderProps) {
  return (
    <AppBar elevation={0} color="inherit" position="static" sx={{p:1}}>
      <Container>
        <Toolbar disableGutters>
          <Box component={Link} to="/">
            <Box component="img" alt="logo" src={logo} />
          </Box>

          <Box flexGrow={1} />

          <Stack
            direction="row"
            spacing={1}
            sx={{
              "& a": {
                color: "inherit",
                textDecoration: "none",
              },
              ".active": {
                color: "primary.main",
              },
              "& button": { textTransform: "none", fontWeight: 600 },
            }}
          >
            {menuList?.map((item, idx) => (
              <Box
                component={NavLink}
                to={item.path}
                key={idx}
                sx={{ display: { xs: "none", md: "flex" } }}
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
              sx={{ display: { xs: "none", md: "flex" }, borderRadius: "10px" }}
            >
              SHOP NOW
            </Button>

            <IconButton color="primary" sx={{ display: { md: "none" }, mr: 1 }}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
