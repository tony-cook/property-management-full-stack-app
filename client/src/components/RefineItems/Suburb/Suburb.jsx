import * as React from 'react';
import Box from '@mui/material/Box';
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

const suburbs = ['Avondale', 'Blockhouse Bay', 'Browns Bay', 'City Centre (Auckland City)', 'Clover Park', 'Devonport', 'East Tamaki', 'Glen Eden', 'Glendowie', 'Glen Innes', 'Glendowie', 'Goodwood Heights', 'Greenlane', 'Henderson', 'Hillcrest', 'Howick', 'New Lynn', 'Newmarket'];

export default function Suburbs() {
  const [suburb, setSuburb] = React.useState('');

  const handleChange = event => {
    setSuburb(event.target.value);
  };

  return (
    <FormControl sx={{ mr: 1, minWidth: 140 }}>
      <InputLabel sx={{ color: 'red.main', fontSize: 13, mt: -1.2 }} id="suburblabel">
        Suburbs
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
        onChange={handleChange}
        autoWidth
        label="All Suburbs"
        MenuProps={MenuProps}
      >
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
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
