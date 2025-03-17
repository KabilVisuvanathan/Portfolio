import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#1D1D2E', zIndex: 1200 }}>
      <Toolbar>
        {/* Logo/Title */}
        <Typography
          variant="h5"
          color="white"
          sx={{
            fontWeight: 'bold',
            ml: { xs: 1, sm: 3 },
            letterSpacing: 2,
            fontSize: { xs: '1.5rem', sm: '2rem' },
          }}
        >
          Portfolio
        </Typography>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' }, // Hide on mobile, show on tablet+
            alignItems: 'center',
          }}
        >
          {navItems.map((item) => (
            <a href={item.href} key={item.label} style={{ textDecoration: 'none' }}>
              <Button
                variant="text"
                sx={{
                  ml: 4,
                  color: 'white',
                  '&:hover': { color: '#1976d2' },
                  textTransform: 'none',
                }}
              >
                {item.label}
              </Button>
            </a>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuClick}
          sx={{ display: { sm: 'none' }, color: 'white' }} // Show only on mobile
        >
          <MenuIcon />
        </IconButton>

        {/* Dropdown Menu for Mobile */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          sx={{
            '& .MuiPaper-root': {
              backgroundColor: '#1D1D2E',
              color: 'white',
              mt: 6, // Adjust to position below AppBar
              minWidth: '150px', // Compact width
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          {navItems.map((item) => (
            <MenuItem
              key={item.label}
              onClick={handleMenuClose}
              sx={{
                justifyContent: 'center',
                '&:hover': {
                  backgroundColor: '#2A2A4D',
                },
              }}
            >
              <a href={item.href} style={{ textDecoration: 'none', color: 'white', width: '100%', textAlign: 'center' }}>
                {item.label}
              </a>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;