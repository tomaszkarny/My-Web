import React from 'react';

import { Item, StyledHyperLink } from 'components/MyProjects/Projects.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { Image } from 'components/common/Image/Image';

export const ProjectsItem = ({ data }) => {
  return (
    <>
      <StyledHyperLink href={data.href}>
        <Item>
          <FontAwesomeIcon
            icon={data.icon}
            size={data.size}
            style={{ color: data.color }}
          />

          <h3>{data.title}</h3>
          <p>{data.text}</p>
          <p>{data.description}</p>
          {/* <Image imageUrl={data.image} alt={data.alt} isProjectSection /> */}
        </Item>
      </StyledHyperLink>
    </>
  );
};
