import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 250px;
  background-color: rgba(21, 21, 21, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  padding-top: 3rem; /* Space for the logo */
`;

export const MenuButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001; /* Ensure it's above the drawer */
`;

export const LogoContainer = styled(Link)`
  display: inline-flex; /* Changed from flex to inline-flex */
  align-items: center;
  background: linear-gradient(135deg, #1f1f1f, #333333); /* Subtle gradient for plaque effect */
  padding: 0.5rem 1rem;
  border-radius: 10px; /* Rounded corners for plaque effect */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); /* Subtle shadow for depth */
  text-decoration: none; /* Remove underline from Link */
  margin: 1rem; /* Align to the left */
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 0.5rem;
  border-radius: 50%; /* Make the logo circular */
  filter: drop-shadow(0 0 10px #1e90ff); /* Subtle drop shadow */
  border: 3px solid #ffffff; /* White border for professional look */
`;

export const BrandName = styled.span`
  font-size: 1.5rem;
  color: #1e90ff;
  font-weight: bold;
`;

export const NavLink = styled(Link)`
  margin: 1rem 0;
  font-weight: bold;
  color: #e0e0e0;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #1e90ff;
    transition: width 0.3s;
  }

  &:hover:after {
    width: 100%;
  }
`;

export const DrawerLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;
