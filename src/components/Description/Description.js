import React from 'react';
import { SectionWrapper } from './Description.styles';

const Description = ({ dark, title, text, first, second, third, id }, ref) => {
  return (
    <SectionWrapper
      dark={dark}
      first={first}
      second={second}
      third={third}
      id={id}
      ref={ref}
    >
      <h1>{title}</h1>
      <p>{text}</p>
    </SectionWrapper>
  );
};

const ForwaredDescription = React.forwardRef(Description);

export default ForwaredDescription;
