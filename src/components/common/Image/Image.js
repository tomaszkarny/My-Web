import React from 'react';
import { ImageWrapper } from './Image.styles';

export const Image = ({ image, alt }) => (
  <ImageWrapper>
    <img src={image} alt={alt} />
  </ImageWrapper>
);
