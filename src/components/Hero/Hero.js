import React from 'react';

import { StyledHeader } from './Hero.styles';

const Header = ({ id }, ref) => {
  return (
    <StyledHeader id={id} ref={ref}>
      <h1>Welcome to Our Company</h1>
      <p>Habitasse vestibulum a mi odio ut rutrum mauris leo lorem</p>
    </StyledHeader>
  );
};

const ForwaredHeader = React.forwardRef(Header);

export default ForwaredHeader;
