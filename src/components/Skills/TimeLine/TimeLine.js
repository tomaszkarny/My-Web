import React from 'react';
import { TimeLineWrapper } from './TimeLine.styles';
import TimeLineItem from './TimeLineItem';
import { timelineData } from './timelineData';

const TimeLine = ({ ...props }, ref) => {
  return (
    <TimeLineWrapper ref={ref}>
      {timelineData.map((data, idx) => (
        <TimeLineItem data={data} key={idx} />
      ))}
    </TimeLineWrapper>
  );
};

const ForwaredTimeLine = React.forwardRef(TimeLine);

export default ForwaredTimeLine;
