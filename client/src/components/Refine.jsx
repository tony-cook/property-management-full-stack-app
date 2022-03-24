import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Suburb from './RefineItems/Suburb';
import Rent from './RefineItems/Rent';
import Bedrooms from './RefineItems/Bedrooms';
import Bathrooms from './RefineItems/Bathrooms';
import Shownearby from './RefineItems/Shownearby';

export default function Refine({ suburb, setSuburb, suburbInput, setSearchRent, setSearchBedroom, setSearchBathroom }) {
  const [clearAll, setClearAll] = useState(false);
  const handleClear = () => {
    setSuburb('');
    setClearAll(!clearAll);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      <Suburb suburb={suburb} suburbInput={suburbInput} />
      <Rent setSearchRent={setSearchRent} clearAll={clearAll} />
      <Bedrooms setSearchBedroom={setSearchBedroom} clearAll={clearAll} />
      <Bathrooms setSearchBathroom={setSearchBathroom} clearAll={clearAll} />
      <Shownearby />
      <Button sx={{ textTransform: 'none', fontSize: 13, ml: 1 }} onClick={() => handleClear()}>
        clear all
      </Button>
    </Box>
  );
}
