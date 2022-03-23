import React from 'react';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function RefineButton(props) {
  return (
    <Button variant="outlined" color="red" sx={{ borderRadius: '100px', py: 0.2, mr: 1, textTransform: 'none', typography: 'body2', backgroundColor: 'background.main', borderColor: 'lightgrey.main', '&:hover': { backgroundColor: 'background.main', borderColor: 'black' }, '&:active': { borderColor: 'red.main' } }} aria-describedby={props.id} onClick={props.handleClick}>
      {props.item}
      <ArrowDropDownIcon />
    </Button>
  );
}
