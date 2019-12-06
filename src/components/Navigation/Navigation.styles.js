import styled from '@emotion/styled';

export const NavWrapper = styled.div``;
export const StyledNav = styled.nav`
  background: ${({ theme }) => theme.color.light};
  height: 70px;
  width: 100%;
  z-index: 9999;
  position: fixed;
  @media (max-width: 768px) {
    height: 60px;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 10px;
  padding-inline-end: 120px;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 2px 2px 2px #ccc;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 300px;
    position: fixed;
    left: -500px;
    top: 60px;
    padding-top: 40px;
    background: ${({ theme }) => theme.color.light};
    transition: 350ms ease all;
    justify-content: flex-start;

    left: ${({ isOpen }) => (isOpen ? '0' : '')};
    z-index: ${({ isOpen }) => (isOpen ? '99' : '')};
    top: ${({ isOpen }) => (isOpen ? '0' : '')};
    padding: ${({ isOpen }) => (isOpen ? '60px 0 0 20px' : '')};
  }
`;

export const StyledLi = styled.li`
  list-style-type: none;
  padding: 10px 20px;
  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Logo = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  display: flex;
  flex: 1;
  padding-left: 20px;
`;

export const LogoAnchor = styled.a`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.dark};
  text-decoration: none;
  @media only screen and (min-width: 768px) and (max-width: 959px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 1200) {
    font-size: 20px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 22px;
  }
`;
