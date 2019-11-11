import styled from '@emotion/styled';

export const ImageWrapper = styled.div`
  grid-area: ${({ gridArea }) => gridArea || ''};

  img {
    object-fit: cover;
    max-width: 100%;
    height: 100%;
    width: 100%;
  }
`;
