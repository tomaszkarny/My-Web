import styled from '@emotion/styled';

export const StyledHero = styled.div`
  justify-content: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  padding: 0 10%;
  height: 100vh;

  h1 {
    color: ${({ theme }) => theme.color.dark};
    text-transform: uppercase;
    font-family: Montserrat-Bold;
    font-size: 36px;

    @media (max-width: 540px) {
      font-size: 25px;

      line-height: 1.5;
    }

    @media (min-width: 540px) and (max-width: 768px) {
      font-size: 29px;

      line-height: 2;
    }
    @media only screen and (min-width: 768px) and (max-width: 959px) {
      font-size: 35px;
    }
    @media only screen and (min-width: 1200px) {
      font-size: 44px;
    }
  }

  p {
    font-size: 20px;
    font-family: OpenSans;
    line-height: 2.4;
    padding: 20px 0;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.color.midGray};

    @media (max-width: 768px) {
      font-size: 15px;
      line-height: 1.5;
    }
    @media only screen and (min-width: 768px) and (max-width: 959px) {
      font-size: 17px;
    }
    @media only screen and (min-width: 1200px) {
      font-size: 25px;
    }
  }
`;
