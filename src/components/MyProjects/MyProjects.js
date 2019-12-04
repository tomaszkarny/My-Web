import React from 'react';

import {
  ProjectsWrapper,
  Wrapper,
  ProjectsHeader,
} from 'components/MyProjects/Projects.styles';
import { projectsData } from 'components/MyProjects/projectsData';
import { ProjectsItem } from 'components/MyProjects/ProjectsItem';

export const MyProjects = ({ id }) => (
  <Wrapper id={id}>
    <ProjectsHeader>My Projects</ProjectsHeader>
    <ProjectsWrapper>
      {projectsData.map((data, idx) => (
        <ProjectsItem data={data} key={idx} />
      ))}
    </ProjectsWrapper>
  </Wrapper>
);
