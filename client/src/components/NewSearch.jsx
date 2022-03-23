import React from 'react';
import RefineButton from './RefineItems/RefineButton';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function Rent() {
  const highest = 1000;
  const rents = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [minRent, setMinRent] = React.useState(0);
  const [maxRent, setMaxRent] = React.useState(highest);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleChangeMin = event => {
    setMinRent(event.target.value);
  };

  const handleChangeMax = event => {
    setMaxRent(event.target.value);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <IconButton width="100%">
        <Box item="Rent per Week:Any" id={id} onClick={handleClick}>
          CLickme
        </Box>
      </IconButton>
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
            <Typography variant="h5">Rent per week</Typography>
          </Box>
          <Box sx={{ p: 2, mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ mx: 1 }}>
              <FormControl sx={{ width: 100 }}>
                <InputLabel id="demo-simple-select-label">Min</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={minRent} label="Min" onChange={handleChangeMin}>
                  <MenuItem value="">
                    <em>Any</em>
                  </MenuItem>
                  {rents.map((rent, i) => {
                    return (
                      <MenuItem value={rent} key={i}>
                        {rent}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ mx: 1 }}>
              <FormControl sx={{ width: 100 }}>
                <InputLabel id="demo-simple-select-label">Max</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={maxRent} label="Max" onChange={handleChangeMax}>
                  <MenuItem value="">
                    <em>Any</em>
                  </MenuItem>
                  {rents.map((rent, i) => {
                    return (
                      <MenuItem value={rent} key={i}>
                        {rent}
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
    </>
  );
}
