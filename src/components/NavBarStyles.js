import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const glowAnimation = keyframes`
  0% { text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00, 0 0 20px #00ff00; }
  50% { text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00; }
  100% { text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00, 0 0 20px #00ff00; }
`;

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ scrolled }) => scrolled ? 'rgba(0, 20, 0, 0.9)' : 'transparent'};
  transition: background 0.3s ease-in-out;
  z-index: 1000;
  border-bottom: 1px solid #00ff00;
`;

export const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 250px;
  background: rgba(0, 20, 0, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  padding-top: 5rem;
  box-shadow: -5px 0 15px rgba(0, 255, 0, 0.2);
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
    background-color: #00ff00;
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
  color: #00ff00;
  font-weight: bold;
  font-family: 'Courier New', monospace;
 
  .logo {
    width: 40px;
    height: 40px;
    margin-right: 0.5rem;
    transition: transform 0.3s ease, filter 0.3s ease;
    filter: drop-shadow(0 0 5px #00ff00);
  }
 
  .brand-name {
    font-size: 1.2rem;
    transition: text-shadow 0.3s ease;
    text-shadow: 0 0 5px #00ff00;
  }

  &:hover {
    .logo {
      transform: rotate(10deg);
      filter: drop-shadow(0 0 10px #00ff00);
    }
    .brand-name {
      animation: ${glowAnimation} 1.5s ease-in-out infinite;
    }
  }
`;

export const NavLink = styled(Link)`
  margin: 0 1rem;
  font-weight: bold;
  color: #00ff00;
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  transition: color 0.3s ease, text-shadow 0.3s ease;
  font-family: 'Courier New', monospace;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #00ff00;
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  &:hover {
    color: #00ff00;
    text-shadow: 0 0 10px #00ff00;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  ${({ $active }) => $active && css`
    color: #00ff00;
    text-shadow: 0 0 10px #00ff00;
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
  color: #00ff00;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease, text-shadow 0.3s ease;

  &:hover {
    color: #00ff00;
    text-shadow: 0 0 10px #00ff00;
  }
`;