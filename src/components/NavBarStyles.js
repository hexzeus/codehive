import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ scrolled }) => scrolled ? 'rgba(10, 10, 10, 0.9)' : 'transparent'};
  transition: background 0.3s ease-in-out;
  z-index: 1000;
`;

export const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 250px;
  background: rgba(10, 10, 10, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  padding-top: 5rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
  
  span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #e0e0e0;
    margin: 5px 0;
    transition: all 0.3s ease-in-out;
  }

  ${({ $isOpen }) => $isOpen && css`
    span:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  `}

  @media (max-width: 768px) {
    display: block;
  }
`;

export const BrandContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #1e90ff;
  font-weight: bold;
  font-family: 'Merriweather', serif;
  
  .logo {
    width: 40px;
    height: 40px;
    margin-right: 0.5rem;
    transition: transform 0.3s ease;
  }
  
  .brand-name {
    font-size: 1.2rem;
    transition: color 0.3s ease;
  }

  &:hover {
    .logo {
      transform: rotate(10deg);
    }
    .brand-name {
      color: #ff6ad5;
    }
  }
`;

export const NavLink = styled(Link)`
  margin: 0 1rem;
  font-weight: bold;
  color: #e0e0e0;
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #1e90ff;
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  &:hover {
    color: #1e90ff;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  ${({ $active }) => $active && css`
    color: #1e90ff;
    &:after {
      transform: scaleX(1);
    }
  `}
`;

export const DrawerLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${NavLink} {
    margin: 1rem 0;
    font-size: 1.2rem;
  }
`;

export const DesktopNav = styled.div`
  display: flex;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: #e0e0e0;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #1e90ff;
  }
`;