import React from 'react';
import { Section } from '../common/Section/Section';
import { Form } from '../Contact/Form/Form';
import { Map } from '../Contact/Map/Map';
import { MapWrapper } from 'components/Contact/Contact.styles';

export const Contact = ({ id }) => (
  <Section>
    <Form id={id} />
    <MapWrapper>
      <Map
        isMarkerShown={true}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAQAKku9FagF_chl9yAA7vfRoViwXCy7TA"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: '700px' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </MapWrapper>
  </Section>
);
