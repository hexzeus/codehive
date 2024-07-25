import React, { useState } from 'react';
import { Nav, NavLinks, NavLink, Hamburger, LogoContainer, LogoImage, Overlay } from './NavBarStyles';
import logo from '../logo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav>
        <LogoContainer>
          <LogoImage src={logo} alt="Logo" />
          IVES HUB
        </LogoContainer>
        <Hamburger onClick={toggleMenu} $isOpen={isOpen}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <NavLinks $isOpen={isOpen}>
          <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
          <NavLink to="/services" onClick={toggleMenu}>Services</NavLink>
          <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
        </NavLinks>
      </Nav>
      {isOpen && <Overlay onClick={toggleMenu} />}
    </>
  );
};

export default NavBar;
