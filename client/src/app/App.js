import Button from '@mui/material/Button';

import ListingResults from '../components/ListingResults/ListingResults'
import SortSelect from '../components/SortSelect/SortSelect'
import ListViewButton from '../components/ListViewButton/ListViewButton'
import GoogleMaps from '../components/GoogleMap/GoogleMaps'
import './App.css';

function App() {
  return (
    <div>
      <div className="lower-content-container">
        <div className='left-lower-content-container'>
          <div className="button-row">
            <ListViewButton />
            <SortSelect />
          </div>
          <ListingResults />
        </div>
        <div className="google-map">
          <GoogleMaps />
        </div>
      </div>

      
      
    </div>
  );
}

export default App;
