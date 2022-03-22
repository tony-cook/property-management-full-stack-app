import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';



function ListViewButton() {
  const ListViewButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    color: '#bf163d',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#ffffff',
    whiteSpace: 'nowrap',
    borderColor: '#bf163d',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#ffffff',
      borderColor: '#bf163d',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#ffffff',
      borderColor: '#bf163d',
    }
  });

  return (
    <div>
      <ListViewButton variant="contained" disableRipple>
        <img src="list-view-icon.png" alt="icon.png" />
        List View
      </ListViewButton>
    </div>
  )
}

export default ListViewButton