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
  <>
      <Box sx={{ py: 2, px: { xs: 2, md: 8 } }}>
        <BreadCrumbs />
        <Box sx={{ mt: 1, mb: 3 }}>
          <Typography sx={{ typography: { sm: 'h4', md: 'h3' } }}>Auckland Property Listings</Typography>
        </Box>
        <Box sx={{ my: 1 }}>
          <Refine />
        </Box>
        <Box sx={{ my: 1 }}>
          <Search />
        </Box>
        <Box sx={{ my: 1 }}>
          <div className="lower-content-container">
            <div className='left-lower-content-container'>
              <div className="button-row">
                <ListViewButton />
                <SortSelect />
              </div>
                <ListingResults />
            </div>
              <div className="google-map">
                <GoogleMaps />
              </div>
          </div>
        </Box>
      </Box>

  </>
  );
}
