import React from 'react';
import { Section } from '../common/Section/Section';
import { Form } from '../Contact/Form/Form';
import { Map } from '../Contact/Map/Map';

export const Contact = () => (
  <Section>
    <Form id="contact" />
    <div style={{ flex: '1', width: '100%', position: 'relative' }}>
      <Map
        isMarkerShown={true}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAQAKku9FagF_chl9yAA7vfRoViwXCy7TA"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: '700px' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  </Section>
);
