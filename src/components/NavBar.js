import React, { useState, useEffect } from 'react';
import {
  NavContainer,
  Drawer,
  MenuButton,
  BrandContainer,
  NavLink,
  DrawerLinks,
  DesktopNav,
  MatrixToggle,
  NavBackground
} from './NavBarStyles';
import logo from '../logo.png';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaInfo, FaServicestack, FaEnvelope, FaCode } from 'react-icons/fa';

const NavBar = ({ toggleMatrixRain, isMatrixRainActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const maxScroll = fullHeight - windowHeight;
      const progress = (scrollPosition / maxScroll) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMatrixToggle = (e) => {
    e.preventDefault();
    toggleMatrixRain();
  };

  return (
    <>
      <NavBackground $scrollProgress={scrollProgress} />
      <NavContainer $scrollProgress={scrollProgress}>
        <BrandContainer as={Link} to="/home">
          <img className="logo" src={logo} alt="Logo" />
          <span className="brand-name">IVES HUB</span>
        </BrandContainer>
        <DesktopNav>
          <NavLink to="/home" $active={location.pathname === '/home'}><FaHome /> Home</NavLink>
          <NavLink to="/about" $active={location.pathname === '/about'}><FaInfo /> About</NavLink>
          <NavLink to="/services" $active={location.pathname === '/services'}><FaServicestack /> Services</NavLink>
          <NavLink to="/contact" $active={location.pathname === '/contact'}><FaEnvelope /> Contact</NavLink>
        </DesktopNav>
        <MatrixToggle onClick={handleMatrixToggle} $active={isMatrixRainActive}>
          <FaCode />
          <span className="tooltip">Toggle Matrix Rain</span>
        </MatrixToggle>
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
    </>
  );
};

export default NavBar;