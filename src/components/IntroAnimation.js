import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  CodeAnimation,
  LogoContainer,
  LogoImage,
  PasswordInput
} from '../components/IntroAnimationStyles';
import logo from '../logo.png';  // Import the logo here

const generateBinary = () => {
  let binaryStr = '';
  for (let i = 0; i < 1000; i++) {
    binaryStr += Math.random() > 0.5 ? '1' : '0';
  }
  return binaryStr;
};

const IntroAnimation = ({ onUnlock }) => {
  const [showCode, setShowCode] = useState(true);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem('authenticated') === 'true') {
      onUnlock();
      navigate('/home');
    } else {
      const timer = setTimeout(() => setShowCode(false), 2000); // 2 seconds for animation
      return () => clearTimeout(timer);
    }
  }, [navigate, onUnlock]);

  useEffect(() => {
    if (password === '5555') {
      sessionStorage.setItem('authenticated', 'true');
      setTimeout(() => {
        onUnlock();
        navigate('/home');
      }, 1000); // 1 second delay for unlock animation
    }
  }, [password, navigate, onUnlock]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    if ((e.type === 'keydown' && e.key === 'Enter' && password === '5555') || (e.type === 'click' && password === '5555')) {
      setTimeout(() => {
        onUnlock();
        navigate('/home');
      }, 1000); // 1 second delay for unlock animation
    }
  };

  return (
    <Container>
      <CodeAnimation>
        <div>
          {[...Array(100)].map((_, index) => (
            <span key={index}>{generateBinary()}</span>
          ))}
        </div>
      </CodeAnimation>
      {!showCode && (
        <LogoContainer>
          <LogoImage src={logo} alt="Logo" />
          <PasswordInput
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            onKeyDown={handlePasswordSubmit}
            autoComplete="off" /* Disable autocomplete */
          />
        </LogoContainer>
      )}
    </Container>
  );
};

export default IntroAnimation;
