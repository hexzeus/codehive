// src/components/NavBar.js
import React, { useState } from 'react';
import { Nav, NavLinks, NavLink, Hamburger, Logo } from './NavBarStyles';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo>IVES HUB</Logo>
      <Hamburger onClick={toggleMenu}>
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
  );
};

export default NavBar;
