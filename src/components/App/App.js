import React from 'react';

import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import { THEME } from 'constants/theme';

import ResponsiveNavigation from '../Navigation/Navigation';
import Header from '../Hero/Hero';

import { SectionCommon } from 'components/common/SectionCommon/SectionCommon';

import Image from '../common/Image/Image';
import ForwaredTimeLine from '../Skills/TimeLine/TimeLine';
import ForwaredList from '../MyProjects/List/List';

import { Form } from '../Contact/Form/Form';
import { Map } from '../Contact/Map/Map';

import { descriptionData } from '../common/SectionCommon/descriptionData';
import { imageData } from '../common/Image/imageData';

import { globalStyles } from '../../styles/globalStyles';
import { AppWrapper, NavWrapper } from './App.styles';

const App = () => (
  <ThemeProvider theme={THEME}>
    <div>
      <Global styles={globalStyles} />

      <AppWrapper>
        <NavWrapper>
          <ResponsiveNavigation />
        </NavWrapper>

        <Header id="hero" />

        <SectionCommon
          dark
          text={descriptionData[0].text}
          title={descriptionData[0].title}
          gridArea="DescriptionFirst"
          id="about"
        />
        <Image
          image={imageData[0].image}
          alt={imageData[0].alt}
          gridArea="ImageFirst"
        />

        <ForwaredTimeLine id="skills" />
        <SectionCommon
          text={descriptionData[1].text}
          title={descriptionData[1].title}
        />

        <ForwaredList id="myProjects" />

        <Image image={imageData[1].image} alt={imageData[1].alt} />
        <SectionCommon
          dark
          text={descriptionData[2].text}
          title={descriptionData[2].title}
          gridArea="DescriptionThird"
          id="hiring"
        />

        <Form id="contact" />
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

        {/*
          <Navigation id />
          <Hero id  />
          <About id  />
          <Skills id  />
          <MyProjects id  />
          <Hiring id  />


          <Section id={id}> // display: flex
            <SectionCommon /> // flex: 1
            <Image /> // flex: 1
          </Section>
         */}
      </AppWrapper>
    </div>
  </ThemeProvider>
);

export default App;
