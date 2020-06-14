import React from 'react';
import { Info, Item, ItemWrapper, Date, List } from './TimeLine.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TimeLineItem = ({ data }) => {
  return (
    <ItemWrapper>
      <Item>
        <h5>{data.text}</h5>

        <Info>
          <Date>{data.date}</Date>
        </Info>
        <List>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={data.icon}
                size={data.size}
                style={{ color: 'black', background: 'white' }}
              />
              <h5>{data.name}</h5>
            </li>
          </ul>
        </List>
      </Item>
    </ItemWrapper>
  );
};

export default TimeLineItem;
