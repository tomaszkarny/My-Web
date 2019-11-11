import React from 'react';

import { SectionTitle } from 'components/common/SectionTitle/SectionTitle';
import { SectionDescription } from 'components/common/SectionDescription/SectionDescription';

import { SectionWrapper } from './SectionCommon.styles';

export const SectionCommon = ({ dark, gridArea, title, text, id }) => (
  <SectionWrapper gridArea={gridArea} dark={dark} id={id}>
    <SectionTitle dark={dark}>{title}</SectionTitle>
    <SectionDescription dark={dark}>{text}</SectionDescription>
  </SectionWrapper>
);
