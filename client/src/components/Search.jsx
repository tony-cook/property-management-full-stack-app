import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const tags = ['Pets OK', 'Amazing View', 'Fully Furnished', 'Friendly Neighbourhood', 'Newly refurnished', 'Available now', 'Roomate Needed', 'Students', 'New Build', 'Renovated', 'Smoke Allowed', 'Air Conditioning', 'In Unit Washer', 'Wheelchair Access', 'Pool', 'Yard', 'Utilities Included', 'Fireplace', 'Garage', 'Balcony', 'Basement', 'Urban', 'Rural', 'With Carpark'];

export default function Search() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        gap: 1
      }}
    >
      <Autocomplete sx={{ backgroundColor: 'background.main', flexGrow: 1, '& .MuiButtonBase-root': { backgroundColor: 'red.main', color: 'white', mr: 0.5 }, '& .MuiSvgIcon-root': { color: 'background.main' }, '& .MuiChip-deleteIcon': { color: 'Background.main' } }} multiple id="tags-outlined" options={tags} getOptionLabel={option => option} defaultValue={[]} filterSelectedOptions renderInput={params => <TextField {...params} label="Search By Tags" placeholder="Add tags: e.g. 'Available Now'" />} />
      <Button variant="contained" color="red" sx={{ textTransform: 'none' }}>
        Search Properties
      </Button>
    </Box>
  );
}
