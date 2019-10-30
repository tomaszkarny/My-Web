import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../constants/hooks';

import ResponsiveNavigation from '../ResponsiveNavigation/ResponsiveNavigation';
import Header from '../Header/Header';
import Description from '../Description/Description';
import { descriptionData } from '../Description/descriptionData';
import Image from '../Image/Image';
import { imageData } from '../Image/imageData';
import TimeLine from '../TimeLine/TimeLine';
import List from '../List/List';
import Form from '../Form/Form';
import Map from '../Map/Map';

import { Global } from '@emotion/core';
import { globalStyles } from '../../styles/globalStyles';
import { AppWrapper, NavWrapper } from './App.styles';

const App = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
      <Global styles={globalStyles} />

      <AppWrapper>
        <NavWrapper ref={node}>
          <ResponsiveNavigation open={open} setOpen={setOpen} />
        </NavWrapper>
        <Header />
        <Description
          dark
          text={descriptionData[0].text}
          title={descriptionData[0].title}
          first
          id="About"
        />
        <Image image={imageData[0].image} alt={imageData[0].alt} first />
        <TimeLine />
        <Description
          text={descriptionData[1].text}
          title={descriptionData[1].title}
        />
        <List id="Services" />
        <Image image={imageData[1].image} alt={imageData[1].alt} />
        <Description
          dark
          text={descriptionData[2].text}
          title={descriptionData[2].title}
          id="Jobs"
          third
        />
        <Form id="Contact" />

        <Map
          isMarkerShown={true}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAQAKku9FagF_chl9yAA7vfRoViwXCy7TA"
          loadingElement={
            <div style={{ height: `100%`, minHeight: '700px' }} />
          }
          containerElement={
            <div style={{ height: `100%`, minHeight: '700px' }} />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </AppWrapper>
    </div>
  );
};

export default App;
