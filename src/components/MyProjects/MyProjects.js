import React from 'react';

import {
  ProjectsWrapper,
  Wrapper,
} from 'components/MyProjects/Projects.styles';
import { projectsData } from 'components/MyProjects/projectsData';
import { ProjectsItem } from 'components/MyProjects/ProjectsItem';

export const MyProjects = ({ id }) => (
  <Wrapper id={id}>
    <h1>My Projects</h1>
    <ProjectsWrapper>
      {projectsData.map((data, idx) => (
        <ProjectsItem data={data} key={idx} />
      ))}
    </ProjectsWrapper>
  </Wrapper>
);
