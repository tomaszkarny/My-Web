import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.gallery};
  text-align: center;

  h1 {
    padding: 30px 0;
  }
`;

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-rows: 200px;
  padding-bottom: 30px;

  @media (max-width: 900px) {
    grid-auto-rows: 200px;
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }

  background-color: ${({ theme }) => theme.color.gallery};
  align-items: center;
  justify-items: center;
`;

export const Item = styled.div`
  background: tomato;
  width: 100%;
  background: transparent;
  text-align: left;
  padding: 0 10%;

  h3 {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: normal;
    color: ${({ theme }) => theme.color.dark};
    text-align: left;
    padding: 10px 0;
  }

  p {
    font-family: OpenSans;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.color.midGray};
    text-align: left;
    word-break: break-all;
  }
`;
