import React from 'react';

import { StyledBurger } from 'components/Navigation/Burger/Burger.styles';

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
