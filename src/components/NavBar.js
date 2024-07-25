import React, { useState } from 'react';
import { Nav, NavLinks, NavLink, Hamburger, LogoContainer, LogoImage, Overlay } from './NavBarStyles';
import logo from '../logo.png';
import { Link } from 'react-router-dom';

const NavBar = ({ isUnlocked, location }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav $isUnlocked={isUnlocked} $location={location}>
        <LogoContainer as={Link} to="/home">
          <LogoImage src={logo} alt="Logo" />
          IVES HUB
        </LogoContainer>
        <Hamburger onClick={toggleMenu} $isOpen={isOpen}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <NavLinks $isOpen={isOpen}>
          <NavLink to="/home" onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
          <NavLink to="/services" onClick={toggleMenu}>Services</NavLink>
          <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
        </NavLinks>
      </Nav>
      {isOpen && <Overlay $isOpen={isOpen} onClick={toggleMenu} />}
    </>
  );
};

export default NavBar;
