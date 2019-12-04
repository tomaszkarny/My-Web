import React from 'react';

import { TimeLineWrapper } from 'components/Skills/TimeLine/TimeLine.styles';

import TimeLineItem from 'components/Skills/TimeLine/TimeLineItem';
import { timelineData } from 'components/Skills/TimeLine/timelineData';

export const TimeLine = () => (
  <TimeLineWrapper>
    {timelineData.map((data, idx) => (
      <TimeLineItem data={data} key={idx} />
    ))}
  </TimeLineWrapper>
);
