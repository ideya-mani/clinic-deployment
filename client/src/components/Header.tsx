import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box, useTheme, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import logo from '../assets/ICON.svg';

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  const renderDesktopMenu = () => (
    <Box sx={{ display: 'flex', gap: 2, padding: '16px' }}>
       {menuItems.map((item:any) => (
        <Link
          key={item.text}
          to={item.path}
          style={{
            textDecoration: 'none',
            color: 'green',
            fontWeight: 'bold',
            fontFamily: 'Roboto',
            fontSize: '16px',
          }}
        >
          {item.text}
        </Link>
      ))}
    </Box>
  );

  const renderMobileMenu = () => (
    <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
      <List sx={{ width: 250 }}>
        {menuItems.map((item:any) => (
          <ListItem key={item.text} onClick={toggleDrawer}>
            <Link to={item.path} style={{ textDecoration: 'none', color: 'green' }}>
              <ListItemText primary={item.text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        // background: 'linear-gradient(10deg, #62d2a2, #ffffff)',
        backgroundColor: '#f9f9f9',
        pl: '20px',
        borderRadius: '16px',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to='/' style={{
            textDecoration: 'none',
            color: 'green',
            fontWeight: 'bold',
            fontFamily: 'Roboto',
            fontSize: '16px',
          }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" style={{ width: 24, height: 24, marginRight: 8 }} />
          <h1 style={{ fontSize: '16px', fontWeight: 'bold', color: 'green' }}>
            Supamandhiraa Homoeo Care
          </h1>
        </Box>
        </Link>

        {isMobile ? (
          <>
            <IconButton sx={{color:'green'}} onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            {renderMobileMenu()}
          </>
        ) : (
          renderDesktopMenu()
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
