import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Suburb from './RefineItems/Suburb/Suburb';
import Rent from './RefineItems/Rent';
import Bedrooms from './RefineItems/Bedrooms';
import Bathrooms from './RefineItems/Bathrooms';
import Shownearby from './RefineItems/Shownearby';

export default function Refine() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Suburb />
      <Rent />
      <Bedrooms />
      <Bathrooms />
      <Shownearby />
      <Button sx={{ textTransform: 'none', fontSize: 13, ml: 1 }}>clear all</Button>
    </Box>
  );
}
