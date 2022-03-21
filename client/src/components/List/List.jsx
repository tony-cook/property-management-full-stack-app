import Button from '@mui/material/Button';

import SortSelect from '../SortSelect/SortSelect';
import ListViewButton from '../ListViewButton/ListViewButton';
import GoogleMaps from '../GoogleMap/GoogleMaps';
import './List.css';

function App() {
  return (
    <div>
      <div className="lower-content-container">
        <div className="button-row">
          <ListViewButton />
          <SortSelect />
        </div>
        <div className="google-map">
          <GoogleMaps />
        </div>
      </div>
    </div>
  );
}

export default App;
