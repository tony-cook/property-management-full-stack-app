import React from 'react';
import RefineButton from './RefineButton';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function Bathrooms() {
  const highest = 10;
  const bathrooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [minBathroom, setMinBathroom] = React.useState(1);
  const [maxBathroom, setMaxBathroom] = React.useState(highest);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleChangeMinRoom = event => {
    setMinBathroom(event.target.value);
  };

  const handleChangeMaxRoom = event => {
    setMaxBathroom(event.target.value);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>
      <RefineButton item="Bathrooms:Any" id={id} handleClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        sx={{ mt: 1, maxHeight: '300px' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'background.main',
            typography: 'body1',
            minHeight: 200
          }}
        >
          <Box sx={{ borderBottom: 1, p: 2, borderBottomColor: 'lightgrey.main' }}>
            <Typography variant="h5">Bathrooms</Typography>
          </Box>
          <Box sx={{ p: 2, mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ mx: 1 }}>
              <FormControl sx={{ width: 100 }}>
                <InputLabel id="demo-simple-select-label">Min</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={minBathroom} label="Min" onChange={handleChangeMinRoom}>
                  <MenuItem value="">
                    <em>Any</em>
                  </MenuItem>
                  {bathrooms.map((bathroom, i) => {
                    return (
                      <MenuItem value={bathroom} key={i}>
                        {bathroom}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ mx: 1 }}>
              <FormControl sx={{ width: 100 }}>
                <InputLabel id="demo-simple-select-label">Max</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={maxBathroom} label="Max" onChange={handleChangeMaxRoom}>
                  <MenuItem value="">
                    <em>Any</em>
                  </MenuItem>
                  {bathrooms.map((bathroom, i) => {
                    return (
                      <MenuItem value={bathroom} key={i}>
                        {bathroom}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box>
            <Button sx={{ textTransform: 'none', fontSize: 13, ml: 1 }}>clear all</Button>
          </Box>
        </Box>
      </Popover>
    </div>
  );
}
