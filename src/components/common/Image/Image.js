import React from 'react';
import { ImageWrapper, StyledImg } from './Image.styles';

export const Image = ({ imageUrl, alt }) => (
  <ImageWrapper>
    <StyledImg src={imageUrl} alt={alt} />
  </ImageWrapper>
);
