import React from 'react';

import { ListWrapper, Wrapper } from './List.styles';
import { listData } from './listData';
import ListItem from './ListItem';

const List = () => {
  return (
    <Wrapper>
      <h1>Our services</h1>
      <ListWrapper>
        {listData.map((data, idx) => (
          <ListItem data={data} key={idx} />
        ))}
      </ListWrapper>
    </Wrapper>
  );
};

export default List;
