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
  NavBackground,
  CartIcon
} from './NavBarStyles';
import logo from '../logo.png';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaInfo, FaServicestack, FaEnvelope, FaCode, FaShoppingCart, FaStore } from 'react-icons/fa';
import commerce from '../lib/commerce';

const NavBar = ({ toggleMatrixRain, isMatrixRainActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cartItems, setCartItems] = useState(0);
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

    const fetchCart = async () => {
      try {
        const cart = await commerce.cart.retrieve();
        setCartItems(cart.total_items);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    window.addEventListener('scroll', handleScroll);
    fetchCart();

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
          <NavLink to="/storefront" $active={location.pathname === '/storefront'}><FaStore /> Merch</NavLink>
          <NavLink to="/cart" $active={location.pathname === '/cart'}>
            <CartIcon>
              <FaShoppingCart />
              {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
            </CartIcon>
            Cart
          </NavLink>
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
            <NavLink to="/storefront" onClick={toggleDrawer} $active={location.pathname === '/storefront'}><FaStore /> Merch</NavLink>
            <NavLink to="/cart" onClick={toggleDrawer} $active={location.pathname === '/cart'}>
              <CartIcon>
                <FaShoppingCart />
                {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
              </CartIcon>
              Cart
            </NavLink>
          </DrawerLinks>
        </Drawer>
      </NavContainer>
    </>
  );
};

export default NavBar;