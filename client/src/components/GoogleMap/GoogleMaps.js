import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import mapStyles from './components/mapStyles';
import pinIcon from '../../assets/images/pin_icon.png';

const mapContainerStyle = {
  height: '100%',
  width: '100%'
};

const center = {
  lat: -36.848461,
  lng: 174.763336
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  mapTypeControl: true,
  zoomControl: true
};

const handler = id => {
  console.log(id);
};

function GoogleMaps({ searchResult }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  if (loadError) return 'Error';
  if (!isLoaded) return 'Loading...';

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} center={center} options={options}>
      {searchResult.map(property => (
        <Marker
          key={property._id}
          position={property.coordinates}
          icon={{
            url: pinIcon,
            scaledSize: new window.google.maps.Size(20, 30),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15)
          }}
          onClick={() => {
            handler(property._id);
          }}
        />
      ))}
    </GoogleMap>
  );
}

export default GoogleMaps;
