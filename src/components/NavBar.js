// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #282c34;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavLinks = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  font-weight: bold;
  color: white;

  &:hover {
    color: #61dafb;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const NavBar = () => (
    <Nav>
        <h1>CodeHive</h1>
        <NavLinks>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </NavLinks>
    </Nav>
);

export default NavBar;
