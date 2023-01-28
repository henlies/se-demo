import { createTheme, useTheme, styled, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { MenuItem } from "@mui/material";
import { blue } from '@mui/material/colors';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import LogoutIcon from '@mui/icons-material/Logout';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: '#e8f5e9',
    },
  },
});

const drawerWidth = 320;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function Navbar() {

  const themep = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menu = [
    { name: "Home", path: "/" },
    { name: "Service Show", path: "/serviceshow" },
    { name: "Payment Show", path: "/paymentshow" },
  ]

  const LogOut = () => {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }} >
        <CssBaseline />
        <AppBar>
          <Toolbar>
            <IconButton
              color="secondary"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <Typography variant="h6" color="secondary" noWrap component="div">
                Service and Payment
              </Typography>
              <MenuItem onClick={LogOut}><LogoutIcon style={{ marginRight: ".5rem" }} />Log out</MenuItem>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {themep.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          {menu.map((item, index) => (
            <ListItem key={index} button component={RouterLink} onClick={handleDrawerClose}
              to={item.path}>
              <ListItemText>{item.name}</ListItemText>

            </ListItem>
          ))}
          <Divider />
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
        </Main>
      </Box>
    </ThemeProvider>
  );

}

export default Navbar;