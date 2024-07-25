// src/components/Footer.tsx
import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" mt={5} p={3} bgcolor="primary.main" color="white" textAlign="center">
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Healthy Recipes
      </Typography>
      <Box display="flex" justifyContent="center" mt={2}>
        <MuiLink href="/about" color="inherit" mx={1}>About Us</MuiLink>
        <MuiLink href="/privacy" color="inherit" mx={1}>Privacy Policy</MuiLink>
        <MuiLink href="/terms" color="inherit" mx={1}>Terms of Service</MuiLink>
      </Box>
    </Box>
  );
};

export default Footer;
