import styled from '@emotion/styled';

export const ImageWrapper = styled.div`
  flex: 1;
`;

export const StyledImg = styled.img`
  object-fit: cover;
  max-width: 100%;
  height: 100%;
  width: 100%;
  border-radius: ${({ isProjectSection }) => (isProjectSection ? '20px' : '0')};

  @media (max-width: 400px) {
    min-height: ${({ isProjectSection }) => (isProjectSection ? 0 : 500)};
  }
`;
