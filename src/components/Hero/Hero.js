import React from 'react';

import { StyledHero, HeroDescription, HeaderHero } from './Hero.styles';

export const Hero = ({ id }) => (
  <StyledHero id={id}>
    <HeaderHero>Welcome to My page</HeaderHero>
    <HeroDescription>
      Hello my name is Tomasz Karny and this is my personal portfolio
    </HeroDescription>
  </StyledHero>
);
