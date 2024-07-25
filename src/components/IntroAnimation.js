import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.png';
import {
  Container,
  CodeAnimation,
  LogoContainer,
  Logo,
  PasswordInput
} from '../components/IntroAnimationStyles';

const generateBinary = () => {
  let binaryStr = '';
  for (let i = 0; i < 1000; i++) {
    binaryStr += Math.random() > 0.5 ? '1' : '0';
  }
  return binaryStr;
};

const IntroAnimation = ({ onComplete }) => {
  const [showCode, setShowCode] = useState(true);
  const [password, setPassword] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem('authenticated') === 'true') {
      onComplete();
      navigate('/');
    } else {
      const timer = setTimeout(() => setShowCode(false), 2000); // 2 seconds for animation
      return () => clearTimeout(timer);
    }
  }, [navigate, onComplete]);

  useEffect(() => {
    if (password === '5555') {
      setUnlocked(true);
      sessionStorage.setItem('authenticated', 'true');
      setTimeout(() => {
        onComplete();
        navigate('/');
      }, 1000); // 1 second delay for unlock animation
    }
  }, [password, navigate, onComplete]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    if ((e.type === 'keydown' && e.key === 'Enter' && password === '5555') || (e.type === 'click' && password === '5555')) {
      setUnlocked(true);
      setTimeout(() => {
        onComplete();
        navigate('/');
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
        <>
          <LogoContainer>
            <Logo
              src={logo}
              alt="Logo"
              unlocked={unlocked}
              onClick={handlePasswordSubmit}
            />
          </LogoContainer>
          <PasswordInput
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            onKeyDown={handlePasswordSubmit}
            autoComplete="off" /* Disable autocomplete */
          />
        </>
      )}
    </Container>
  );
};

export default IntroAnimation;
