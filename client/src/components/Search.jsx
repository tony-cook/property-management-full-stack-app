import React from 'react';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Tags from '../data/tags';

export default function Search({ searchTags, searchTagsInput, searchAllInputs }) {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        gap: 1
      }}
    >
      <Autocomplete
        sx={{
          backgroundColor: 'background.main',
          flexGrow: 1,
          '& .MuiButtonBase-root': {
            backgroundColor: 'green.main',
            color: 'white',
            mr: 0.5
          },
          '& .MuiSvgIcon-root': {
            color: 'white'
          },
          '& .MuiChip-deleteIcon': {
            color: 'white'
          }
        }}
        multiple
        id="tags-outlined"
        options={Tags}
        getOptionLabel={option => option}
        defaultValue={[]}
        filterSelectedOptions
        renderInput={params => <TextField borderColor="green.main" {...params} label="Search" placeholder="Add tags: e.g. 'Available Now'" />}
        value={searchTags}
        onChange={searchTagsInput}
      />
      <Button
        variant="contained"
        color="green"
        sx={{
          textTransform: 'none'
        }}
        onClick={searchAllInputs}
      >
        Search Properties
      </Button>
    </Box>
  );
}
