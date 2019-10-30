import React from 'react';
import { TimeLineWrapper } from './TimeLine.styles';
import TimeLineItem from './TimeLineItem';
import { timelineData } from './timelineData';

const TimeLine = () => {
  return (
    <TimeLineWrapper>
      {timelineData.map((data, idx) => (
        <TimeLineItem data={data} key={idx} />
      ))}
    </TimeLineWrapper>
  );
};

export default TimeLine;
