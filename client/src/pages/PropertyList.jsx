import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BreadCrumbs from '../components/BreadCrumbs';
import Search from '../components/Search';
import Refine from '../components/Refine';
import ListingResults from '../components/ListingResults/ListingResults';
import SortSelect from '../components/SortSelect/SortSelect';
import ListViewButton from '../components/ListViewButton/ListViewButton';
import GoogleMaps from '../components/GoogleMap/GoogleMaps';

export default function PropertyList() {
  return (
    <Box sx={{ py: 2, px: { xs: 4, lg: '5vw' } }}>
      <BreadCrumbs />
      <Box sx={{ mt: 1, mb: 3 }}>
        <Typography sx={{ typography: { sm: 'h5', md: 'h5' } }}>Auckland Property Listings</Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Refine />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Search />
      </Box>
      <Box sx={{ mb: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
        <Box sx={{ width: '50%' }}>
          <Box display="flex">
            <ListViewButton />
            <SortSelect sx={{ flexGrow: 1 }} />
          </Box>
          <ListingResults />
        </Box>
        <Box bgcolor="red.main" sx={{ flexGrow: 1 }}>
          <GoogleMaps />
        </Box>
      </Box>
    </Box>
  );
}
