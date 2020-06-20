import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.gallery};
  text-align: center;
  padding: 5% 0;
`;

export const ProjectsHeader = styled.h1`
  padding-bottom: 5%;
`;

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 300px;

  @media (max-width: 900px) {
    grid-auto-rows: 350px;
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
  width: 300px;
  height: 250px;
  background: transparent;
  text-align: left;
  padding: 20px 10%;

  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

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

export const StyledHyperLink = styled.a`
  padding-top: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.midGray};

  &:hover {
    transition: 0.5s all ease-in-out;
    color: tomato;
    /* border-bottom: ${({ isIcon }) => (isIcon ? '' : '1px solid white')}; */
    width: auto;
  }
`;
