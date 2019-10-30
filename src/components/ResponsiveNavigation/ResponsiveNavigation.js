import React from 'react';

import { StyledNav, Logo } from './ResponsiveNavigation.styles';

import Burger from '../Burger/Burger';

const ResponsiveNavigation = ({ open, setOpen }) => {
  return (
    <StyledNav>
      <nav>
        <ul className={open ? 'active' : ''}>
          <Logo>
            <a href="/">Company Name</a>
          </Logo>
          <Burger open={open} setOpen={setOpen} />

          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#jobs">Jobs</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </StyledNav>
  );
};

export default ResponsiveNavigation;
