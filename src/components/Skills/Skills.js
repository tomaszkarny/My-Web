import React from 'react';

import { Section } from '../common/Section/Section';
import { TimeLine } from 'components/Skills/TimeLine/TimeLine';
import { SectionCommon } from 'components/common/SectionCommon/SectionCommon';
import { skillsData } from 'components/Skills/skillsData';

export const Skills = () => (
  <Section>
    <TimeLine />
    <SectionCommon text={skillsData.text} title={skillsData.title} />
  </Section>
);
