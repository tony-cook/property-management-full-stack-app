import React, {useState} from 'react'
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
  } from "@react-google-maps/api";

import propertyData from './properties_coords'
import mapStyles from "./components/mapStyles"

const mapContainerStyle = {
    height: "70vh",
    width: "50vw",
  };

const center = {
    lat: -36.848461,
    lng: 174.763336,
  };

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    mapTypeControl: true,
    zoomControl: true,

  };
  

function GoogleMaps() {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    });
    
    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    console.log(propertyData)

  return (
    <div>

        <GoogleMap 
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}
            options={options}
            >
                {propertyData.map((property,index) => (
                    <Marker key={index} 
                    position= {property.coordinates}
                    icon={{
                        url: '/pin_icon.png',
                        scaledSize: new window.google.maps.Size(20, 20),
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(15, 15),
                    }}
                    />
                ))}
        </GoogleMap>
    </div>
  )
}

export default GoogleMaps