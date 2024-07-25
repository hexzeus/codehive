import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import IntroAnimation from './components/IntroAnimation';

const AppContent = ({ isUnlocked, onUnlock }) => {
  const location = useLocation();

  return (
    <>
      <NavBar isUnlocked={isUnlocked} location={location.pathname} />
      <Routes>
        <Route path="/" element={<IntroAnimation onUnlock={onUnlock} />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
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
        <AppContent isUnlocked={isUnlocked} onUnlock={handleUnlock} />
      </Router>
    </>
  );
}

export default App;
