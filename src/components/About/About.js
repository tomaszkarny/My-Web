import React from 'react';

import { Section } from 'components/common/Section/Section';
import { SectionCommon } from 'components/common/SectionCommon/SectionCommon';
import { Image } from 'components/common/Image/Image';

import { aboutData } from './aboutData';

export const About = ({ id }) => (
  <Section>
    <SectionCommon title={aboutData.title} text={aboutData.text} dark id={id} />
    <Image image={aboutData.image} alt={aboutData.alt} />
  </Section>
);
