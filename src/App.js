import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import NavBar from './components/NavBar';
import IntroAnimation from './components/IntroAnimation';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy loading for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const AppContent = ({ isUnlocked, onUnlock }) => {
  const location = useLocation();

  return (
    <>
      {(location.pathname !== '/' || isUnlocked) && <NavBar isUnlocked={isUnlocked} location={location.pathname} />}
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<IntroAnimation onUnlock={onUnlock} />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
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

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  return (
    <>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <AppContent isUnlocked={isUnlocked} onUnlock={handleUnlock} />
      </Router>
    </>
  );
}

export default App;