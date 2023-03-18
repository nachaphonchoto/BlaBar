import "./App.css";
import { Link, Route, Outlet, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TopicPage from "./pages/TopicPage";
import ChatPage from "./pages/ChatPage";
import SchedulePage from "./pages/SchedulePage";
import MapPage from "./pages/MapPage";
import AuthenticationPage from "./pages/AuthenticationPage";


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import axios from 'axios';




const pages = ['Home', 'Topic', 'Schedule', 'Map'];

function logout() {
    localStorage.clear();
    window.location.reload();
}


function App() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const token = localStorage.getItem('token');
    const [user, setUser] = React.useState();
    const [anchorElUser, setAnchorElUser] = React.useState(null);

  
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

    if(!token) {
        return <AuthenticationPage />
    } else {
        if(!user){
            axios.get(`http://localhost:3001/api/users`, {
                headers: {
                'x-auth-token': token
                }
            })
            .then(response => {
                console.log(response.data);
                setUser(response.data);
            })
            .catch(error => {
                console.log(error);
            }); 
        }
    }

  
    return (
        <div>
        <AppBar position="sticky">
                <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                    >
                    LOGO
                    </Typography>
        
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                        display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">
                                <Link style={{textDecoration: 'none', color: '#000'}} to={'/'+ page}> {page} </Link>
                            </Typography>
                        </MenuItem>
                        ))}
                    </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href=""
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                    >
                    LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Link style={{textDecoration: 'none'}} to={'/'+ page}>
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        </Link>
                        
                    ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp"  />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            <MenuItem onClick={handleCloseUserMenu}>
                <Typography onClick={logout} textAlign="center">logout</Typography>
            </MenuItem>
            </Menu>
          </Box>
                </Toolbar>
                </Container>
            </AppBar>
            <div id="page">
                <Outlet />
            </div>
            <Routes>
                <Route path="/" element={<Navigate to="/Home" replace />} />
                <Route path="Home" element={<HomePage/>} />
                <Route path="Topic" element={<TopicPage />} />
                <Route path="Topic/Chat" >
                    <Route path=":_id" element={<ChatPage />} />
                </Route>
                <Route path="Schedule" element={<SchedulePage />} />
                <Route path="Map/*" element={<MapPage />} >
                    <Route path=":map" />
                </Route>
                {/* <Route path="Login" element={<Page setProfile={setProfile} />} /> */}
                {/* <Route path="*" element={<NoPage />} /> */}
            </Routes>
        </div>
    );
  
}

export default App;

