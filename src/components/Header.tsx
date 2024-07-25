// src/components/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box, IconButton, Link as MuiLink } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/">Healthy Recipes</Link>
        </Typography>
        <Box display="flex" alignItems="center">
          <MuiLink component={Link} to="/" sx={{ margin: '0 10px' }}>Home</MuiLink>
          <MuiLink component={Link} to="/recipes" sx={{ margin: '0 10px' }}>Recipes</MuiLink>
          <MuiLink component={Link} to="/categories" sx={{ margin: '0 10px' }}>Categories</MuiLink>
          <MuiLink component={Link} to="/blog" sx={{ margin: '0 10px' }}>Blog</MuiLink>
          <MuiLink component={Link} to="/about" sx={{ margin: '0 10px' }}>About Us</MuiLink>
          <MuiLink component={Link} to="/contact" sx={{ margin: '0 10px' }}>Contact</MuiLink>
          <MuiLink component={Link} to="/signup" sx={{ margin: '0 10px' }}>Sign Up</MuiLink>
          <MuiLink component={Link} to="/login" sx={{ margin: '0 10px' }}>Login</MuiLink>
          <Box display="flex" alignItems="center" marginLeft="20px">
            <InputBase placeholder="Search…" sx={{ color: 'inherit', marginLeft: '10px' }} />
            <IconButton type="submit" aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
