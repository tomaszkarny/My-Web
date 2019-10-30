import React from 'react';

import { StyledHeader } from './Header.styles';

const Header = ({ id }) => {
  return (
    <StyledHeader id={id}>
      <h1>Welcome to Our Company</h1>
      <p>Habitasse vestibulum a mi odio ut rutrum mauris leo lorem</p>
    </StyledHeader>
  );
};

export default Header;
