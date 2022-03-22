import React from 'react'
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

function SortSelect() {
    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
          marginTop: theme.spacing(3),
        },
        '& .MuiInputBase-input': {
          borderRadius: 4,
          position: 'relative',
          backgroundColor: '#ffffff',
          border: '1px solid #ced4da',
          fontSize: 16,
          padding: '12px 26px 10px 17px',
          width: '400px',
          marginTop: '-8px',
          transition: theme.transitions.create(['border-color', 'box-shadow']),
          // Use the system font instead of the default Roboto font.
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
          '&:focus': {
            borderRadius: 4,
            borderColor: '#bf163d',
          },
        },
      }));

    const [sortType, setSortType] = React.useState('');

    const handleChange = (event) => {
        setSortType(event.target.value);
      };

  return (
    <div>
        <FormControl sx={{ m: 1 }} variant="standard">
        <NativeSelect
          id="demo-customized-select-native"
          value={sortType}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option value={"featured"}>Sort: Featured Listings</option>
          <option value={"minPrice"}>Lowest Price</option>
          <option value={"maxPrice"}>Highest Price</option>
          <option value={"available"}>Available Date</option>
        </NativeSelect>
      </FormControl>
    </div>
  )
}

export default SortSelect