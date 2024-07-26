import React, { useState, useEffect } from 'react';
import {
  NavContainer,
  Drawer,
  MenuButton,
  BrandContainer,
  NavLink,
  DrawerLinks,
  DesktopNav,
  ThemeToggle
} from './NavBarStyles';
import logo from '../logo.png';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaInfo, FaServicestack, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';

const NavBar = ({ toggleTheme, isDarkTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <NavContainer scrolled={scrolled}>
      <BrandContainer as={Link} to="/home">
        <img className="logo" src={logo} alt="Logo" />
        <span className="brand-name">IVES DESIGN</span>
      </BrandContainer>

      <DesktopNav>
        <NavLink to="/home" $active={location.pathname === '/home'}><FaHome /> Home</NavLink>
        <NavLink to="/about" $active={location.pathname === '/about'}><FaInfo /> About</NavLink>
        <NavLink to="/services" $active={location.pathname === '/services'}><FaServicestack /> Services</NavLink>
        <NavLink to="/contact" $active={location.pathname === '/contact'}><FaEnvelope /> Contact</NavLink>
      </DesktopNav>

      <ThemeToggle onClick={toggleTheme}>
        {isDarkTheme ? <FaSun /> : <FaMoon />}
      </ThemeToggle>

      <MenuButton onClick={toggleDrawer} $isOpen={isOpen}>
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>

      <Drawer $isOpen={isOpen}>
        <DrawerLinks>
          <NavLink to="/home" onClick={toggleDrawer} $active={location.pathname === '/home'}><FaHome /> Home</NavLink>
          <NavLink to="/about" onClick={toggleDrawer} $active={location.pathname === '/about'}><FaInfo /> About</NavLink>
          <NavLink to="/services" onClick={toggleDrawer} $active={location.pathname === '/services'}><FaServicestack /> Services</NavLink>
          <NavLink to="/contact" onClick={toggleDrawer} $active={location.pathname === '/contact'}><FaEnvelope /> Contact</NavLink>
        </DrawerLinks>
      </Drawer>
    </NavContainer>
  );
};

export default NavBar;