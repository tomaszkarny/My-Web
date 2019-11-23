import React, { useState, useRef } from 'react';

import { linkData } from 'components/Navigation/Link/linkData';

import { useOnClickOutside } from 'utils/hooks';

import { StyledNav, Logo } from 'components/Navigation/Navigation.styles';

import { Burger } from 'components/Navigation/Burger/Burger';
import { Link } from './Link/Link';

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  const handleItemClick = e => {
    e.preventDefault();

    const element = document.querySelector(`#${e.target.name}`);

    const sectionOptions = {
      rootMargin: '-200px 0px 0px 0px',
    };

    const sectionObserver = new IntersectionObserver(function(
      entries,
      sectionObserver
    ) {
      entries.forEach(entry => {
        return entry.target.getBoundingClientRect().top;
      });
    },
    sectionOptions);

    sectionObserver.observe(element);

    element.scrollIntoView({
      behavior: 'smooth',
      top: element,
    });

    setOpen(!open);
  };

  return (
    <StyledNav ref={node}>
      <nav>
        <ul className={open ? 'active' : ''}>
          <Logo>
            <a href="/">Tomasz Karny</a>
          </Logo>
          <Burger open={open} setOpen={setOpen} />

          {linkData.map(data => (
            <li key={data.id}>
              <Link data={data} onClick={handleItemClick} />
            </li>
          ))}
        </ul>
      </nav>
    </StyledNav>
  );
};
