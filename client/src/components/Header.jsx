import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';

const pages = ['Property Management', 'Property Search', 'Body Corporate', 'Commercial', 'Waiheke Escapes', 'FAQs & Contact Us'];

export default function Header() {
  const [navMenu, setNavMenu] = useState(null);

  const handleOpenNavMenu = event => {
    setNavMenu(event.currentTarget);
  };

  const handleCloseNavMenu = event => {
    setNavMenu(null);
  };

  return (
    <AppBar position="fixed" elevation={0}>
      <Box
        sx={{
          height: 40,
          bgcolor: 'background.main',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          overflow: 'hidden',
          color: 'black',
          py: 2,
          px: { xs: 4, lg: '5vw' }
        }}
      >
        <Box
          sx={{
            width: { xs: 100, md: 120 },
            maxWidth: 120
          }}
          component="img"
          alt="The auckland property company logo"
          src="logo.jpg"
        />
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexGrow: 1,
            justifyContent: 'space-around',
            alignItems: 'flex-end'
          }}
        >
          {pages.map((page, index) => {
            return (
              <Box
                sx={{
                  border: 'none',
                  p: 1,
                  mb: -1,
                  bgcolor: 'white',
                  '&:hover': {
                    borderBottom: 2,
                    borderBottomColor: 'red.main'
                  }
                }}
                component="button"
                key={index}
              >
                {page}
              </Box>
            );
          })}
        </Box>
        <Button variant="contained" color="red" size="small" sx={{ textTransform: 'none', display: { xs: 'none', md: 'flex' } }}>
          Contact Us
        </Button>

        <Box
          sx={{
            display: { xs: 'flex', md: 'none' }
          }}
        >
          <IconButton size="large" aria-controls="menu-nav" aria-haspopup="true" onClick={handleOpenNavMenu} color="red">
            <MenuIcon />
          </IconButton>{' '}
          <Menu
            id="menu-appbar"
            anchorEl={navMenu}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            open={Boolean(navMenu)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
              textAlign: 'center'
            }}
          >
            {pages.map(page => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
            <MenuItem>
              <Button variant="contained" color="red">
                Contact Us
              </Button>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </AppBar>
  );
}
