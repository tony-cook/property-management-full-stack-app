import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Suburb from './RefineItems/Suburb';
import Rent from './RefineItems/Rent';
import Bedrooms from './RefineItems/Bedrooms';
import Bathrooms from './RefineItems/Bathrooms';
import Shownearby from './RefineItems/Shownearby';

export default function Refine({ suburb, suburbInput }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      <Suburb suburb={suburb} suburbInput={suburbInput} />
      <Rent />
      <Bedrooms />
      <Bathrooms />
      <Shownearby />
      <Button sx={{ textTransform: 'none', fontSize: 13, ml: 1 }} >clear all</Button>
    </Box>
  );
}
