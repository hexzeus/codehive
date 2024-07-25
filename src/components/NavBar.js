import React, { useState } from 'react';
import { Drawer, MenuButton, BrandContainer, NavLink, DrawerLinks } from './NavBarStyles';
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import { FaHome, FaInfo, FaServicestack, FaEnvelope } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BrandContainer as={Link} to="/home">
        <img className="logo" src={logo} alt="Logo" />
        <span className="brand-name">IVES DESIGN</span>
      </BrandContainer>
      <MenuButton onClick={toggleDrawer}>
        ☰
      </MenuButton>
      <Drawer $isOpen={isOpen}>
        <DrawerLinks>
          <NavLink to="/home" onClick={toggleDrawer}><FaHome /> Home</NavLink>
          <NavLink to="/about" onClick={toggleDrawer}><FaInfo /> About</NavLink>
          <NavLink to="/services" onClick={toggleDrawer}><FaServicestack /> Services</NavLink>
          <NavLink to="/contact" onClick={toggleDrawer}><FaEnvelope /> Contact</NavLink>
        </DrawerLinks>
      </Drawer>
    </>
  );
};

export default NavBar;
