import styled from '@emotion/styled';

export const StyledNav = styled.div`
  nav {
    background: white;
    height: 60px;
    width: 100%;
  }

  ul {
    display: flex;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 10px;
    padding-inline-end: 120px;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    /* box-shadow: 2px 2px 2px #ccc; */

    @media (max-width: 768px) {
      flex-direction: column;
      width: 300px;
      position: fixed;
      left: -500px;
      top: 60px;
      padding-top: 40px;
      background: white;
      transition: 300ms ease all;
      justify-content: flex-start;

      &.active {
        left: 0px;
        z-index: 99;
        top: 0;
        padding: 60px 0 0 20px;
      }
    }
  }

  li {
    list-style-type: none;
    padding: 10px 20px;
    &:hover,
    &:active {
      color: black;
    }

    @media (max-width: 768px) {
      width: 100%;
      padding-left: 0;
      padding-right: 0;
    }
  }

  a {
    color: white;
    text-decoration: none;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    font-family: OpenSans;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 1px;
    color: #5d5f65;
    transition: opacity 0.125s linear;

    &:hover,
    &:active {
      color: black;
      transition: 0.3s;
    }

    @media (max-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      margin-left: 20px;
      margin-right: 16px;
    }
    @media only screen and (min-width: 768px) and (max-width: 959px) {
      font-size: 13px;
    }
    @media (min-width: 1200px) {
      font-size: 18px;
    }
  }
`;

export const Logo = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  display: flex;
  flex: 1;
  padding-top: 20px;
  padding-left: 20px;

  a {
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #141720;
    @media only screen and (min-width: 768px) and (max-width: 959px) {
      font-size: 15px;
    }
    @media only screen and (min-width: 1200) {
      font-size: 20px;
    }
    @media only screen and (min-width: 1200px) {
      font-size: 22px;
    }
  }
`;
