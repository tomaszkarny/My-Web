import React from 'react';
import { StyledAnchor } from './Link.styles';

export const Link = ({ href, name, text, onClick }) => (
  <StyledAnchor href={href} name={name} onClick={onClick}>
    {text}
  </StyledAnchor>
);
