import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import mapStyles from './components/mapStyles';
import pinIcon from '../../assets/images/pin_icon.png';

let value = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const mapContainerStyle = {
  height: '100%',
  width: '100%',
};

const center = {
  lat: -36.8831726,
  lng: 174.7977139
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  mapTypeControl: true,
  zoomControl: true
};

function GoogleMaps({searchResult}) {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: value
  });
  

  if (loadError) return 'Error';
  if (!isLoaded) return 'Loading...';

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={11} center={center} options={options}>
      {searchResult.map((property, index) => (
        <Marker
          key={property._id}
          position={property.coordinates}
          icon={{
            url: pinIcon,
            scaledSize: new window.google.maps.Size(20, 30),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15)
          }}
          onClick={(e) => {
            window.location.href=`#${index}`
          }} 
        />
      ))}
    </GoogleMap>
  );
}

export default GoogleMaps;
