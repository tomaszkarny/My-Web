import React from 'react';
import { SectionWrapper } from './Description.styles';

const Description = ({ dark, title, text, first, second, third, id }) => {
  return (
    <SectionWrapper
      dark={dark}
      first={first}
      second={second}
      third={third}
      id={id}
    >
      <h1>{title}</h1>
      <p>{text}</p>
    </SectionWrapper>
  );
};

export default Description;
