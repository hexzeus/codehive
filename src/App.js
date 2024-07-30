import React, { useState, lazy, Suspense, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import NavBar from './components/NavBar';
import IntroAnimation from './components/IntroAnimation';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import MatrixRain from './components/MatrixRain';
import commerce from './lib/commerce';

// Lazy loading for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const Cart = lazy(() => import('./components/Cart'));
const Checkout = lazy(() => import('./components/Checkout'));
const StoreFront = lazy(() => import('./components/StoreFront'));
const StoreFront2 = lazy(() => import('./components/StoreFront2'));

const ToggleableMatrixRain = ({ isActive }) => {
  if (!isActive) return null;
  return <MatrixRain />;
};

const AppContent = ({
  isUnlocked,
  onUnlock,
  isMatrixRainActive,
  toggleMatrixRain,
  cart,
  fetchCart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
  handleAddToCart
}) => {
  const location = useLocation();
  return (
    <>
      {(location.pathname !== '/' || isUnlocked) && (
        <NavBar
          isUnlocked={isUnlocked}
          location={location.pathname}
          toggleMatrixRain={toggleMatrixRain}
          isMatrixRainActive={isMatrixRainActive}
          cart={cart}
        />
      )}
      <ToggleableMatrixRain isActive={isMatrixRainActive} />
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<IntroAnimation onUnlock={onUnlock} />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/storefront" element={<StoreFront handleAddToCart={handleAddToCart} />} />
            <Route path="/storefront2" element={<StoreFront2 />} />
            <Route path="/cart" element={
              <Cart
                cart={cart}
                fetchCart={fetchCart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            } />
            <Route path="/checkout" element={<Checkout cart={cart} />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isMatrixRainActive, setIsMatrixRainActive] = useState(false);
  const [cart, setCart] = useState(null);

  const fetchCart = useCallback(async () => {
    try {
      const retrievedCart = await commerce.cart.retrieve();
      setCart(retrievedCart);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  }, []);

  const handleAddToCart = useCallback(async (productId, quantity) => {
    try {
      const { cart } = await commerce.cart.add(productId, quantity);
      setCart(cart);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  }, []);

  const handleUpdateCartQty = useCallback(async (lineItemId, quantity) => {
    try {
      const { cart } = await commerce.cart.update(lineItemId, { quantity });
      setCart(cart);
    } catch (error) {
      console.error('Error updating cart quantity:', error);
    }
  }, []);

  const handleRemoveFromCart = useCallback(async (lineItemId) => {
    try {
      const { cart } = await commerce.cart.remove(lineItemId);
      setCart(cart);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  }, []);

  const handleEmptyCart = useCallback(async () => {
    try {
      const { cart } = await commerce.cart.empty();
      setCart(cart);
    } catch (error) {
      console.error('Error emptying cart:', error);
    }
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  const toggleMatrixRain = () => {
    setIsMatrixRainActive(prev => !prev);
  };

  return (
    <>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <AppContent
          isUnlocked={isUnlocked}
          onUnlock={handleUnlock}
          isMatrixRainActive={isMatrixRainActive}
          toggleMatrixRain={toggleMatrixRain}
          cart={cart}
          fetchCart={fetchCart}
          handleAddToCart={handleAddToCart}
          handleUpdateCartQty={handleUpdateCartQty}
          handleRemoveFromCart={handleRemoveFromCart}
          handleEmptyCart={handleEmptyCart}
        />
      </Router>
    </>
  );
}

export default App;