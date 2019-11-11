import React from 'react';

import { StyledBurger } from './Burger.styles';

const Burger = ({ open, setOpen, whiteBackground }) => {
  return (
    <StyledBurger
      open={open}
      onClick={() => setOpen(!open)}
      whiteBackground={whiteBackground}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
