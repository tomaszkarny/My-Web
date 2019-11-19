import React from 'react';

import { Item } from 'components/MyProjects/Projects.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ProjectsItem = ({ data }) => {
  return (
    <Item>
      <FontAwesomeIcon
        icon={data.icon}
        size={data.size}
        style={{ color: data.color }}
      />

      <h3>{data.title}</h3>
      <p>{data.text}</p>
    </Item>
  );
};
