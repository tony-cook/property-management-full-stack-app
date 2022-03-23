import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const suburbs = ['All suburbs', 'Avondale', 'Blockhouse Bay', 'Browns Bay', 'City Centre (Auckland City)', 'Clover Park', 'Devonport', 'East Tamaki', 'Glen Eden', 'Glendowie', 'Glen Innes', 'Glendowie', 'Goodwood Heights', 'Greenlane', 'Henderson', 'Hillcrest', 'Howick', 'New Lynn', 'Newmarket'];

export default function Suburbs({suburb, suburbInput}) {


  return (
    <FormControl sx={{ mr: 1, minWidth: 140 }}>
      <InputLabel sx={{ borderColor:'red.main',color: 'red.main', fontSize: 13, mt: -1.2 }} id="suburblabel">
        Suburb
      </InputLabel>
      <Select
        sx={{
          backgroundColor: 'background.main',
          color: 'red.main',
          borderRadius: '100px',
          typography: 'body2',
          height: 30,
          '& .MuiSvgIcon-root': {
            color: 'red.main'
          }
        }}
        variant="outlined"
        labelId="suburblabel"
        id="suburb"
        value={suburb}
        onChange={suburbInput}
        autoWidth
        label="All Suburbs"
        MenuProps={MenuProps}
      >
        {suburbs.map((suburb, index) => {
          return (
            <MenuItem value={suburb} key={index}>
              {suburb}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
