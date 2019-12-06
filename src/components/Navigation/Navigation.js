import React, { useState, useRef } from 'react';

import { linkData } from 'components/Navigation/Link/linkData';

import { useOnClickOutside } from 'utils/hooks';

import {
  Logo,
  NavWrapper,
  StyledNav,
  StyledUl,
  LogoAnchor,
  StyledLi,
} from 'components/Navigation/Navigation.styles';

import { Burger } from 'components/Navigation/Burger/Burger';
import { Link } from './Link/Link';

export const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  const handleItemClick = e => {
    e.preventDefault();

    const element = document.querySelector(`#${e.target.name}`);

    window.scroll({
      top: element.offsetTop - 60,
      behavior: 'smooth',
    });

    setOpen(!isOpen);
  };

  const handleBurgerClick = () => setOpen(!isOpen);

  return (
    <NavWrapper ref={node}>
      <StyledNav>
        <StyledUl isOpen={isOpen}>
          <Logo>
            <LogoAnchor href="/">Tomasz Karny</LogoAnchor>
          </Logo>
          <Burger isOpen={isOpen} onClick={handleBurgerClick} />

          {linkData.map(data => (
            <StyledLi key={data.id}>
              <Link
                text={data.text}
                name={data.name}
                href={data.href}
                onClick={handleItemClick}
              />
            </StyledLi>
          ))}
        </StyledUl>
      </StyledNav>
    </NavWrapper>
  );
};
