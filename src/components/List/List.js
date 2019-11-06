import React from 'react';

import { ListWrapper, Wrapper } from './List.styles';
import { listData } from './listData';
import ListItem from './ListItem';

const List = (props, ref) => {
  return (
    <Wrapper ref={ref}>
      <h1>Our services</h1>
      <ListWrapper>
        {listData.map((data, idx) => (
          <ListItem data={data} key={idx} />
        ))}
      </ListWrapper>
    </Wrapper>
  );
};

const ForwaredList = React.forwardRef(List);

export default ForwaredList;
