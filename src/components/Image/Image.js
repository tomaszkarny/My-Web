import React from 'react';
import { ImageWrapper } from './Image.styles';

const Image = ({ image, alt, first }) => {
  return (
    <ImageWrapper first={first}>
      <img src={image} alt={alt} />
    </ImageWrapper>
  );
};

export default Image;
