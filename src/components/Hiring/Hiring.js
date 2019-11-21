import React from 'react';

import { Section } from 'components/common/Section/Section';
import { SectionCommon } from 'components/common/SectionCommon/SectionCommon';
import { Image } from 'components/common/Image/Image';

import { hiringData } from 'components/Hiring/hiringData';

export const Hiring = () => (
  <Section>
    <SectionCommon
      title={hiringData.title}
      text={hiringData.text}
      dark
      id="hiring"
    />
    <Image image={hiringData.image} alt={hiringData.alt} />
  </Section>
);
