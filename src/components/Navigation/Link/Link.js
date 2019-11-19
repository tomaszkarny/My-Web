import React from 'react';
import { StyledAnchor } from './Link.styles';

export const Link = ({ data, onClick }) => (
  <StyledAnchor href={data.href} name={data.name} onClick={onClick}>
    {data.text}
  </StyledAnchor>
);
