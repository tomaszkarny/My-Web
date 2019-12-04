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
import { SECTION_IDS } from 'constants/sectionIds';

const App = () => (
  <ThemeProvider theme={THEME}>
    <>
      <Global styles={globalStyles} />

      <Navigation />
      <Hero id={SECTION_IDS.HERO} />
      <About id={SECTION_IDS.ABOUT} />
      <Skills id={SECTION_IDS.SKILLS} />
      <MyProjects id={SECTION_IDS.MY_PROJECTS} />
      <Hiring id={SECTION_IDS.HIRING} />
      <Contact id={SECTION_IDS.CONTACT} />
    </>
  </ThemeProvider>
);

export default App;
