import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #151515; /* Darker background color */
  color: #ffffff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.7);
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #151515;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    padding: 0;
    margin: 0;
  }
`;

export const NavLink = styled(Link)`
  margin: 0 1rem;
  font-weight: bold;
  color: #e0e0e0; /* Light text color */
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #1e90ff; /* Electric blue for hover effect */
    transition: width 0.3s;
  }

  &:hover:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
    font-size: 1.5rem;
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
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) => (isOpen ? 'translateX(20px)' : 'translateX(0)')};
    }

    :last-child {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #1e90ff; /* Electric blue for logo text */
  font-weight: bold;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 0.5rem;
  filter: drop-shadow(0 0 10px #1e90ff); /* Electric blue for logo shadow */
  border-radius: 15px; /* Add rounded corners */
  border: 2px solid #1e90ff; /* Subtle border for professional look */
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;
