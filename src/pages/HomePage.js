import React, { useState } from 'react';
import { Container } from '../styles/HomePageStyles';
import IntroAnimation from '../components/IntroAnimation';

const HomePage = ({ onUnlock }) => {
  const [showHomePage, setShowHomePage] = useState(false);

  const handleIntroComplete = () => {
    setShowHomePage(true);
    onUnlock();
  };

  if (!showHomePage) {
    return <IntroAnimation onComplete={handleIntroComplete} />;
  }

  return (
    <Container>
      <h1>IVES HUB</h1>
      <p>Your go-to solution for modern web development.</p>
    </Container>
  );
};

export default HomePage;
