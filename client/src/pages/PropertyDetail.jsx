import React from 'react';
import Box from '@mui/material/Box';
import BreadCrumbs from '../components/BreadCrumbs';

export default function PropertyDetail() {
  return (
    <Box sx={{ py: 2, px: { xs: 4, lg: '5vw' } }}>
      <BreadCrumbs />
      <img width="100%" src="/detail.png" alt="showcase detail page" />
    </Box>
  );
}
