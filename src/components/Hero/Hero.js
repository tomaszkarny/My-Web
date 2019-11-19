import React from 'react';

import { StyledHero } from './Hero.styles';

export const Hero = ({ id }) => {
  return (
    <StyledHero id={id}>
      <h1>Welcome to Our Company</h1>
      <p>Habitasse vestibulum a mi odio ut rutrum mauris leo lorem</p>
    </StyledHero>
  );
};
