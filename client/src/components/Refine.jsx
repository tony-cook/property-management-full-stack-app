import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Refine() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Button variant="contained" color="red" sx={{ borderRadius: '100px', py: 0.2, mr: 1 }}>
        <Box sx={{ mr: 1, pt: 0.5 }}>
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMid meet" focusable="false" role="img" aria-labelledby="tg-8821c52e-101f-478d-2947-3f88f0de6969">
            <path fill="white" d="M12.88 4h-1.09a2.5 2.5 0 0 0-4.58 0H3.13a1 1 0 1 0 0 2h4.08a2.5 2.5 0 0 0 4.58 0h1.09a1 1 0 0 0 0-2zm0 6H8.79a2.5 2.5 0 0 0-4.58 0H3.13a1 1 0 0 0 0 2h1.08a2.5 2.5 0 0 0 4.58 0h4.09a1 1 0 0 0 0-2z"></path>
            <title id="tg-8821c52e-101f-478d-2947-3f88f0de6969"></title>
          </svg>
        </Box>
        Refine
      </Button>
    </Box>
  );
}
