import React from 'react';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function RefineButton(props) {
  return (
    <Button variant="outlined" color="red" sx={{ borderRadius: '100px', py: 0.2, mr: 1, textTransform: 'none', typography: 'body2', backgroundColor: 'background.main', '&:hover': { border: 1.3 } }} aria-describedby={props.id} onClick={props.handleClick}>
      {props.item}
      <ArrowDropDownIcon />
    </Button>
  );
}
