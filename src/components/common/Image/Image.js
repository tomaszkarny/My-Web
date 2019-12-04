import React from 'react';
import { ImageWrapper, StyledImg } from './Image.styles';

export const Image = ({ image, alt }) => (
  <ImageWrapper>
    <StyledImg src={image} alt={alt} />
  </ImageWrapper>
);
