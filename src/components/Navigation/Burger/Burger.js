import React from 'react';

import { StyledBurger } from 'components/Navigation/Burger/Burger.styles';

export const Burger = ({ isOpen, onClick }) => {
  return (
    <StyledBurger isOpen={isOpen} onClick={onClick}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
