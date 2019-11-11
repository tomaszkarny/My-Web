import React, { useState, useRef } from 'react';

import { SECTION_IDS } from 'constants/sectionIds';
import { useOnClickOutside } from 'utils/hooks';

import { StyledNav, Logo } from './Navigation.styles';

import Burger from './Burger/Burger';

const ResponsiveNavigation = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  const handleItemClick = e => {
    e.preventDefault();

    const element = document
      .querySelector(`#${e.target.name}`)
      .getBoundingClientRect();

    window.scrollTo({
      top: element.top,
      behavior: 'smooth',
    });

    setOpen(!open);
  };

  return (
    <StyledNav ref={node}>
      <nav>
        <ul className={open ? 'active' : ''}>
          <Logo>
            <a href="/">Company Name</a>
          </Logo>
          <Burger open={open} setOpen={setOpen} />

          <li>
            <a
              href={`#${SECTION_IDS.HERO}`}
              name={SECTION_IDS.HERO}
              onClick={handleItemClick}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href={`#${SECTION_IDS.ABOUT}`}
              name={SECTION_IDS.ABOUT}
              onClick={handleItemClick}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href={`#${SECTION_IDS.MY_PROJECTS}`}
              name={SECTION_IDS.MY_PROJECTS}
              onClick={handleItemClick}
            >
              My Projects
            </a>
          </li>
          <li>
            <a
              href={`#${SECTION_IDS.HIRING}`}
              name={SECTION_IDS.HIRING}
              onClick={handleItemClick}
            >
              Hiring
            </a>
          </li>
          <li>
            <a
              href={`#${SECTION_IDS.CONTACT}`}
              name={SECTION_IDS.CONTACT}
              onClick={handleItemClick}
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
