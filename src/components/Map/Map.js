import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

import { MapWrapper } from './Map.styles';

const Map = withScriptjs(
  withGoogleMap(props => (
    <MapWrapper>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 53.15571, lng: 23.15215 }}
      >
        {props.isMarkerShown && (
          <Marker position={{ lat: 53.15571, lng: 23.15215 }} />
        )}
      </GoogleMap>
    </MapWrapper>
  ))
);

export default Map;
