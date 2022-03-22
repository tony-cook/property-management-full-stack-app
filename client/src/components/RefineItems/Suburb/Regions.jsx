import React from 'react';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';

import RefineButton from '../RefineButton';

const suburbs = ['Any', 'Avondale', 'Blockhouse Bay', 'Browns Bay', 'City Centre (Auckland City)', 'Clover Park', 'Devonport', 'East Tamaki', 'Glen Eden', 'Glendowie', 'Glen Innes', 'Glendowie', 'Goodwood Heights', 'Greenlane', 'Henderson', 'Hillcrest', 'Howick', 'New Lynn', 'Newmarket'];

export default function Regions() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <RefineButton item="Suburbs" id={id} handleClick={handleClick} />
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
            p: 2,
            backgroundColor: 'background.main',
            typography: 'body1'
          }}
        >
          {suburbs.map(surb => {
            return <MenuItem value={surb}>{surb}</MenuItem>;
          })}
        </Box>
      </Popover>
    </div>
  );
}
