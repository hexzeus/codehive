// src/components/NavBarStyles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1a1a1a; /* Darker background color for higher contrast */
  color: #ffffff; /* White text for higher contrast */
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  transition: max-height 0.3s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    max-height: ${({ $isOpen }) => ($isOpen ? '200px' : '0')};
    overflow: hidden;
  }
`;

export const NavLink = styled(Link)`
  margin: 0 1rem;
  font-weight: bold;
  color: #ffffff; /* White text for higher contrast */
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #61dafb; /* Lighter color for hover effect */
    transition: width 0.3s;
  }

  &:hover:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  height: 21px;
  
  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 25px;
    height: 3px;
    background: white;
    border-radius: 10px;
  }
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: #61dafb; /* Lighter color for logo */
  font-weight: bold;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
