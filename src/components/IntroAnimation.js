import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { sha256 } from 'js-sha256';
import {
  Container,
  CodeAnimation,
  LogoContainer,
  LogoImage,
  PasswordDisplay,
  GlitchText,
  ParticleContainer,
  Particle,
  ProgressBar,
  NumericPad,
  NumericButton,
  SuccessOverlay
} from '../components/IntroAnimationStyles';
import logo from '../logo.png';

const generateBinary = () => {
  return Array(1000).fill().map(() => Math.random() > 0.5 ? '1' : '0').join('');
};

const ACCESS_CODE = '123456';
const ACCESS_CODE_HASH = sha256(ACCESS_CODE);

const IntroAnimation = ({ onUnlock }) => {
  const [showCode, setShowCode] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordDisplay, setPasswordDisplay] = useState('');
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [unlockSuccess, setUnlockSuccess] = useState(false);
  const [particles, setParticles] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [lockoutTime, setLockoutTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [shake, setShake] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem('authenticated') === 'true') {
      onUnlock();
      navigate('/home');
    } else {
      const timer = setTimeout(() => setShowCode(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [navigate, onUnlock]);

  useEffect(() => {
    if (isUnlocking) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setUnlockSuccess(true);
            setTimeout(() => {
              sessionStorage.setItem('authenticated', 'true');
              onUnlock();
              navigate('/home');
            }, 2000);
            return 100;
          }
          return prev + 1;
        });
      }, 30);
      return () => clearInterval(timer);
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (lockoutTime > 0) {
        setLockoutTime(time => time - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [lockoutTime]);

  const handleNumericInput = (value) => {
    if (password.length < ACCESS_CODE.length) {
      const newPassword = password + value;
      setPassword(newPassword);
      setPasswordDisplay('*'.repeat(newPassword.length));
      setProgress(Math.min((newPassword.length / ACCESS_CODE.length) * 100, 100));
    }
  };

  const handleBackspace = () => {
    if (password.length > 0) {
      const newPassword = password.slice(0, -1);
      setPassword(newPassword);
      setPasswordDisplay('*'.repeat(newPassword.length));
      setProgress(Math.min((newPassword.length / ACCESS_CODE.length) * 100, 100));
    }
  };

  const handleUnlock = () => {
    if (lockoutTime > 0) return;

    const hashedPassword = sha256(password);

    if (hashedPassword === ACCESS_CODE_HASH) {
      setIsUnlocking(true);
    } else {
      setAttempts(prev => prev + 1);
      if (attempts >= 2) {
        setLockoutTime(30);
      }
      setProgress(0);
      setPassword('');
      setPasswordDisplay('');
      setShake(true);
      setTimeout(() => setShake(false), 500);
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
        <LogoContainer $isUnlocking={isUnlocking} $shake={shake}>
          <LogoImage src={logo} alt="Logo" $isUnlocking={isUnlocking} />
          <GlitchText $isUnlocking={isUnlocking}>Enter Access Code</GlitchText>
          <PasswordDisplay>{passwordDisplay}</PasswordDisplay>
          <ProgressBar $progress={progress} />
          <NumericPad>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <NumericButton key={num} onClick={() => handleNumericInput(num.toString())}>
                {num}
              </NumericButton>
            ))}
            <NumericButton onClick={() => handleNumericInput('0')}>0</NumericButton>
            <NumericButton onClick={handleBackspace}>←</NumericButton>
            <NumericButton onClick={handleUnlock} disabled={lockoutTime > 0 || isUnlocking}>
              {lockoutTime > 0 ? `Locked (${lockoutTime}s)` : 'Enter'}
            </NumericButton>
          </NumericPad>
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
      {unlockSuccess && <SuccessOverlay />}
    </Container>
  );
};

export default IntroAnimation;