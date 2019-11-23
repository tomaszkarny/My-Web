import React from 'react';

import { Global } from '@emotion/core';
import { globalStyles } from '../../styles/globalStyles';
import { ThemeProvider } from 'emotion-theming';

import { THEME } from 'constants/theme';

import { About } from 'components/About/About';
import { Skills } from 'components/Skills/Skills';
import { MyProjects } from 'components/MyProjects/MyProjects';
import { Hiring } from 'components/Hiring/Hiring';
import { Contact } from 'components/Contact/Contact';
import { Navigation } from 'components/Navigation/Navigation';
import { Hero } from 'components/Hero/Hero';

const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <>
        <Global styles={globalStyles} />

        <Navigation />
        <Hero id="hero" />
        <About id="about" />
        <Skills id="skills" />
        <MyProjects id="myProjects" />
        <Hiring id="hiring" />
        <Contact id="contact" />
      </>
    </ThemeProvider>
  );
};

export default App;
