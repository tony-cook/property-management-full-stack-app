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
          padding: '7px 26px 7px 12px',
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
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
          },
        },
      }));

    const [sort, setSort] = React.useState('');

    const handleChange = (event) => {
        setSort(event.target.value);
      };

  return (
    <div>
        <FormControl sx={{ m: 1 }} variant="standard">
        <NativeSelect
          id="demo-customized-select-native"
          value={sort}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option value={10}>Sort: Featured Listings</option>
          <option value={20}>Lowest Price</option>
          <option value={30}>Highest Price</option>
          <option value={40}>Available Date</option>
        </NativeSelect>
      </FormControl>
    </div>
  )
}

export default SortSelect