import styled from '@emotion/styled';

export const SectionWrapper = styled.div`
  grid-area: ${({ first }) => (first ? 'DescriptionFirst' : '')};
  grid-area: ${({ second }) => (second ? 'DescriptionSecond' : '')};
  grid-area: ${({ third }) => (third ? 'DescriptionThird' : '')};
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ dark }) => (dark ? '#141720' : 'white')};
  min-height: 600px;
  padding: 0 20%;
  align-items: baseline;
  padding: 0 10%;

  h1 {
    font-family: Montserrat;
    font-size: 28px;
    padding: 10% 0;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.93;
    letter-spacing: 1px;
    color: ${({ dark }) => (dark ? '#ffffff' : '#2b2b2b')};
  }

  p {
    font-family: OpenSans;
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.73;
    letter-spacing: 0.5px;
    color: ${({ dark }) => (dark ? '#ffffff' : '#5d5f65')};
  }
`;
