import React, { useState, useEffect } from 'react';
import RefineButton from './RefineButton';
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

  const [anchorEl, setAnchorEl] = useState(null);
  const [minRent, setMinRent] = useState(0);
  const [maxRent, setMaxRent] = useState(highest);
  const [btnContent, setBtnContent] = useState('Rent per Week: Any');

  useEffect(() => {
    if (minRent === 0 && maxRent === 1000) {
      setBtnContent('Rent per Week: Any');
    } else if (minRent < maxRent) {
      setBtnContent(`Rent: $${minRent}-$${maxRent} per week`);
    } else if (minRent == maxRent) {
      setBtnContent(`Rent: $${minRent} per week`);
    } else {
      alert('minRent need to be less than maxRent');
    }
  }, [minRent, maxRent]);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeMin = event => {
    console.log(event);
    setMinRent(event.target.value);
  };
  const handleChangeMax = event => {
    setMaxRent(event.target.value);
  };
  const handleClear = event => {
    setMinRent(0);
    setMaxRent(highest);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>
      <RefineButton item={btnContent} id={id} handleClick={handleClick} />
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
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={minRent} label="Min" onChange={e => handleChangeMin(e)}>
                  <MenuItem value={0}>
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
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={maxRent} label="Max" onChange={e => handleChangeMax(e)}>
                  <MenuItem value={1000}>
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
            <Button sx={{ textTransform: 'none', fontSize: 13, ml: 1 }} onClick={() => handleClear()}>
              clear all
            </Button>
          </Box>
        </Box>
      </Popover>
    </div>
  );
}
