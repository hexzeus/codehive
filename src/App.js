import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <>
      <GlobalStyles />
      <Router>
        <ScrollToTop /> {/* Ensure the page scrolls to the top on navigation */}
        {isUnlocked && <NavBar />}
        <div style={{ paddingTop: isUnlocked ? '4rem' : '0' }}> {/* Add a padding top to ensure content is not hidden behind the navbar */}
          <Routes>
            <Route path="/" element={<HomePage onUnlock={() => setIsUnlocked(true)} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
