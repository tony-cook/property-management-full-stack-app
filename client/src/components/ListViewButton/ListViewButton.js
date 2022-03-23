import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MapIcon from '@mui/icons-material/Map';


function ListViewButton({ isListView, setIsListView }) {
  const ListViewButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    color: '#bf163d',
    padding: '10px 17px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#ffffff',
    width:  "130px",
    height: '54px',
    whiteSpace: 'nowrap',
    borderColor: '#bf163d',
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
    '&:hover': {
      backgroundColor: '#ffffff',
      borderColor: '#bf163d',
      boxShadow: 'none'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#ffffff',
      borderColor: '#bf163d'
    }
  });

  const handleClick = e => {
    setIsListView(!isListView);
    console.log(isListView);
  };

  return (
    <div>
      <ListViewButton variant="contained" disableRipple onClick={handleClick}>
        {isListView ? (
          <>
            <ListAltIcon /> List View
          </>
        ) : (
          <>
            <MapIcon /> Map View
          </>
        )}
      </ListViewButton>
    </div>
  );
}

export default ListViewButton;
