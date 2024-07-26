import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  CodeAnimation,
  LogoContainer,
  LogoImage,
  PasswordInput,
  UnlockButton,
  GlitchText,
  ParticleContainer,
  Particle
} from '../components/IntroAnimationStyles';
import logo from '../logo.png';

const generateBinary = () => {
  return Array(1000).fill().map(() => Math.random() > 0.5 ? '1' : '0').join('');
};

const IntroAnimation = ({ onUnlock }) => {
  const [showCode, setShowCode] = useState(true);
  const [password, setPassword] = useState('');
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem('authenticated') === 'true') {
      onUnlock();
      navigate('/home');
    } else {
      const timer = setTimeout(() => setShowCode(false), 3000); // 3 seconds for initial animation
      return () => clearTimeout(timer);
    }
  }, [navigate, onUnlock]);

  useEffect(() => {
    if (isUnlocking) {
      const timer = setTimeout(() => {
        sessionStorage.setItem('authenticated', 'true');
        onUnlock();
        navigate('/home');
      }, 3000); // 3 second delay for unlock animation
      return () => clearTimeout(timer);
    }
  }, [isUnlocking, navigate, onUnlock]);

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setParticles(
        Array(100).fill().map(() => ({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 5 + 1,
          speedX: (Math.random() - 0.5) * 3,
          speedY: (Math.random() - 0.5) * 3
        }))
      );
    }
  }, []);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUnlock = () => {
    if (password === '55555555') {
      setIsUnlocking(true);
    } else {
      // Add a shake animation to the input
      const input = document.querySelector('input');
      input.classList.add('shake');
      setTimeout(() => input.classList.remove('shake'), 500);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleUnlock();
    }
  };

  return (
    <Container ref={containerRef}>
      <CodeAnimation $isUnlocking={isUnlocking}>
        <div>
          {[...Array(100)].map((_, index) => (
            <span key={index}>{generateBinary()}</span>
          ))}
        </div>
      </CodeAnimation>
      {!showCode && (
        <LogoContainer $isUnlocking={isUnlocking}>
          <LogoImage src={logo} alt="Logo" $isUnlocking={isUnlocking} />
          <GlitchText $isUnlocking={isUnlocking}>Enter Access Code</GlitchText>
          <PasswordInput
            type="password"
            placeholder="****"
            value={password}
            onChange={handlePasswordChange}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            $isUnlocking={isUnlocking}
          />
          <UnlockButton onClick={handleUnlock} $isUnlocking={isUnlocking}>
            Unlock
          </UnlockButton>
        </LogoContainer>
      )}
      <ParticleContainer>
        {particles.map((particle, index) => (
          <Particle
            key={index}
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
          />
        ))}
      </ParticleContainer>
    </Container>
  );
};

export default IntroAnimation;