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

    </Container>
  );
};

export default HomePage;
