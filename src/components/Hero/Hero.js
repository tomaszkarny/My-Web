import React from 'react';

import { StyledHero } from './Hero.styles';

export const Hero = ({ id }) => {
  return (
    <StyledHero id={id}>
      <h1>Welcome to My page</h1>
      <p>Hello my name is Tomasz Karny and this is my personal portfolio</p>
    </StyledHero>
  );
};
