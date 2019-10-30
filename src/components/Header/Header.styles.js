import styled from '@emotion/styled';

export const StyledHeader = styled.div`
  grid-area: header;
  justify-content: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0 30px;
  scroll-snap-align: start;

  h1 {
    letter-spacing: 1px;
    color: #141720;
    text-transform: uppercase;
    font-family: Montserrat-Bold;
    font-size: 36px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;

    @media (max-width: 540px) {
      font-size: 20px;
      letter-spacing: none;
      line-height: 1.5;
      text-align: center;
    }

    @media (max-width: 768px) {
      font-size: 29px;
      letter-spacing: none;
      line-height: 2;
    }
    @media only screen and (min-width: 768px) and (max-width: 959px) {
      font-size: 35px;
      text-align: center;
    }
    @media only screen and (min-width: 1200px) {
      font-size: 44px;
    }
  }

  p {
    font-size: 20px;
    font-family: OpenSans;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.4;
    letter-spacing: 0.5px;

    color: #5d5f65;
    @media (max-width: 768px) {
      font-size: 13px;
      line-height: 1.5;
    }
    @media only screen and (min-width: 768px) and (max-width: 959px) {
      font-size: 16px;
    }
    @media only screen and (min-width: 1200px) {
      font-size: 25px;
    }
  }
`;
