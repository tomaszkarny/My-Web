import React from 'react';

import { Section } from 'components/common/Section/Section';
import { SectionCommon } from 'components/common/SectionCommon/SectionCommon';
import { Image } from 'components/common/Image/Image';

import { hiringData } from 'components/Hiring/hiringData';

export const Hiring = ({ id }) => (
  <Section>
    <Image imageUrl={hiringData.image} alt={hiringData.alt} />
    <SectionCommon
      title={hiringData.title}
      text={hiringData.text}
      dark
      id={id}
    />
  </Section>
);
