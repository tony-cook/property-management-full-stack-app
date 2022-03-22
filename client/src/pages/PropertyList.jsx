import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import BreadCrumbs from '../components/BreadCrumbs';
import Search from '../components/Search';
import Refine from '../components/Refine';
import List from '../components/List/List';

export default function PropertyList() {
  return (
    <Box sx={{ py: 2, px: { xs: 2, md: 8 } }}>
      <BreadCrumbs />
      <Box sx={{ mt: 1, mb: 5 }}>
        <Typography sx={{ typography: { sm: 'h5', md: 'h4' } }}>Auckland Property Listings</Typography>
      </Box>
      <Box sx={{ my: 2 }}>
        <Refine />
      </Box>
      <Box sx={{ my: 2 }}>
        <Search />
      </Box>
      <Box sx={{ my: 2 }}>{/* <List /> */}</Box>
    </Box>
  );
}
