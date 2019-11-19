import React from 'react';

import { SectionTitle } from 'components/common/SectionTitle/SectionTitle';
import { SectionDescription } from 'components/common/SectionDescription/SectionDescription';
import { CommonWrapper } from 'components/common/CommonWrapper/CommonWrapper';

import { SectionWrapper } from './SectionCommon.styles';

export const SectionCommon = ({ dark, title, text, id }) => (
  <SectionWrapper dark={dark} id={id}>
    <CommonWrapper>
      <SectionTitle dark={dark}>{title}</SectionTitle>
      <SectionDescription dark={dark}>{text}</SectionDescription>
    </CommonWrapper>
  </SectionWrapper>
);
