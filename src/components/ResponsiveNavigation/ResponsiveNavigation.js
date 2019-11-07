import React from 'react';

import { StyledNav, Logo } from './ResponsiveNavigation.styles';

import Burger from '../Burger/Burger';

const ResponsiveNavigation = ({
  open,
  setOpen,
  aboutRect,
  listRect,
  jobsRect,
  contactRect,
  homeRect,
}) => {
  return (
    <StyledNav>
      <nav>
        <ul className={open ? 'active' : ''}>
          <Logo>
            <a href="/">Company Name</a>
          </Logo>
          <Burger open={open} setOpen={setOpen} />

          <li onClick={() => setOpen(!open)}>
            <a
              href="#home"
              onClick={() =>
                window.scrollTo({
                  top: homeRect.top,
                  behavior: 'smooth',
                })
              }
            >
              Home{' '}
            </a>
          </li>
          <li onClick={() => setOpen(!open)}>
            <a
              href="#about"
              onClick={() =>
                window.scrollTo({
                  top: aboutRect.top,
                  behavior: 'smooth',
                })
              }
            >
              About Us
            </a>
          </li>
          <li onClick={() => setOpen(!open)}>
            <a
              href="#services"
              onClick={() =>
                window.scrollTo({
                  top: listRect.top,
                  behavior: 'smooth',
                })
              }
            >
              Services
            </a>
          </li>
          <li onClick={() => setOpen(!open)}>
            <a
              href="#services"
              onClick={() =>
                window.scrollTo({
                  top: jobsRect.top,
                  behavior: 'smooth',
                })
              }
            >
              Jobs
            </a>
          </li>
          <li onClick={() => setOpen(!open)}>
            <a
              href="#contact"
              onClick={() =>
                window.scrollTo({
                  top: contactRect.top,
                  behavior: 'smooth',
                })
              }
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </StyledNav>
  );
};

export default ResponsiveNavigation;
