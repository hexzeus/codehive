import React, { useState } from 'react';  // Ensure useState is imported
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);  // Ensure useState is used

  return (
    <>
      <GlobalStyles />
      <Router>
        {isUnlocked && <NavBar />}
        <Routes>
          <Route path="/" element={<HomePage onUnlock={() => setIsUnlocked(true)} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
