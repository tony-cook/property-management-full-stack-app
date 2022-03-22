import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const nearbies = ['Secondary education', 'Primary education', 'Tertiary Campus', 'Public pools', 'Supermarket', 'Gym', 'Parks and reserves', 'Beaches', 'Hospitals', 'Restaurants', 'Near stations'];

export default function Shownearby() {
  const [showNearby, setShowNearby] = React.useState([]);

  const handleChange = event => {
    const {
      target: { value }
    } = event;
    setShowNearby(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <FormControl sx={{ width: 140 }}>
        <InputLabel sx={{ color: 'red.main', fontSize: 13, mt: -1.2 }} id="demo-multiple-checkbox-label">
          Show nearby
        </InputLabel>
        <Select
          sx={{
            backgroundColor: 'background.main',
            color: 'red.main',
            borderRadius: '100px',
            typography: 'body2',
            height: 30,
            '& .MuiSvgIcon-root': {
              color: 'red.main'
            }
          }}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={showNearby}
          onChange={handleChange}
          input={<OutlinedInput label="Show nearby" />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {nearbies.map(nearby => (
            <MenuItem key={nearby} value={nearby}>
              <Checkbox checked={showNearby.indexOf(nearby) > -1} />
              <ListItemText primary={nearby} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
