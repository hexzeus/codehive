import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { sha256 } from 'js-sha256';
import {
  Container,
  Logo,
  CodeInput,
  Keypad,
  Key,
  StatusIndicator,
  TransitionOverlay,
  LockoutTimer
} from './IntroAnimationStyles';
import logo from '../logo.png';

const ACCESS_CODE = '55005500';
const ACCESS_CODE_HASH = sha256(ACCESS_CODE);
const MAX_ATTEMPTS = 3;
const LOCKOUT_DURATION = 30;

const IntroAnimation = ({ onUnlock }) => {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('idle');
  const [attempts, setAttempts] = useState(0);
  const [lockout, setLockout] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (lockout > 0) {
      timer = setInterval(() => {
        setLockout(prev => prev - 1);
      }, 1000);
    } else if (lockout === 0 && attempts >= MAX_ATTEMPTS) {
      setAttempts(0);
      setStatus('idle');
    }
    return () => clearInterval(timer);
  }, [lockout, attempts]);

  const handleInput = useCallback((value) => {
    if (lockout === 0 && code.length < 8) {
      setCode(prev => prev + value);
    }
  }, [code, lockout]);

  const handleDelete = useCallback(() => {
    if (lockout === 0) {
      setCode(prev => prev.slice(0, -1));
    }
  }, [lockout]);

  const handleSubmit = useCallback(() => {
    if (lockout > 0) return;

    if (sha256(code) === ACCESS_CODE_HASH) {
      setStatus('success');
      setTimeout(() => {
        onUnlock();
        navigate('/home');
      }, 1000);
    } else {
      setStatus('error');
      setCode('');
      setAttempts(prev => prev + 1);
      if (attempts + 1 >= MAX_ATTEMPTS) {
        setLockout(LOCKOUT_DURATION);
      }
      setTimeout(() => setStatus('idle'), 1000);
    }
  }, [code, navigate, onUnlock, attempts, lockout]);

  return (
    <Container>
      <Logo src={logo} alt="Logo" />
      <CodeInput value={'•'.repeat(code.length)} readOnly />
      <Keypad>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
          <Key key={num} onClick={() => handleInput(num.toString())} disabled={lockout > 0}>
            {num}
          </Key>
        ))}
        <Key onClick={handleDelete} disabled={lockout > 0}>←</Key>
        <Key onClick={() => handleInput('0')} disabled={lockout > 0}>0</Key>
        <Key onClick={handleSubmit} disabled={lockout > 0}>→</Key>
      </Keypad>
      <StatusIndicator $status={status} />
      {lockout > 0 && <LockoutTimer>{lockout}</LockoutTimer>}
      <TransitionOverlay $status={status} />
    </Container>
  );
};

export default IntroAnimation;