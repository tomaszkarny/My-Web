import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

export const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 53.15571, lng: 23.15215 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 53.15571, lng: 23.15215 }} />
      )}
    </GoogleMap>
  ))
);
