import styled from '@emotion/styled';

export const ImageWrapper = styled.div`
  grid-area: ${({ first }) => (first ? 'ImageFirst' : 'ImageSecond')};

  img {
    object-fit: cover;
    max-width: 100%;
    height: 100%;
    width: 100%;
  }
`;
