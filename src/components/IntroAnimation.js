import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { sha256 } from 'js-sha256';
import {
  Container,
  Logo,
  CodeInput,
  Keypad,
  Key,
  StatusIndicator,
  TransitionOverlay
} from './IntroAnimationStyles';
import logo from '../logo.png';

const ACCESS_CODE = '55005500';
const ACCESS_CODE_HASH = sha256(ACCESS_CODE);

const IntroAnimation = ({ onUnlock }) => {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('idle');
  const navigate = useNavigate();

  const handleInput = useCallback((value) => {
    if (code.length < 8) {
      setCode(prev => prev + value);
    }
  }, [code]);

  const handleDelete = useCallback(() => {
    setCode(prev => prev.slice(0, -1));
  }, []);

  const handleSubmit = useCallback(() => {
    if (sha256(code) === ACCESS_CODE_HASH) {
      setStatus('success');
      setTimeout(() => {
        onUnlock();
        navigate('/home');
      }, 1000);
    } else {
      setStatus('error');
      setCode('');
      setTimeout(() => setStatus('idle'), 1000);
    }
  }, [code, navigate, onUnlock]);

  return (
    <Container>
      <Logo src={logo} alt="Logo" />
      <CodeInput value={'•'.repeat(code.length)} readOnly />
      <Keypad>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
          <Key key={num} onClick={() => handleInput(num.toString())}>{num}</Key>
        ))}
        <Key onClick={handleDelete}>←</Key>
        <Key onClick={() => handleInput('0')}>0</Key>
        <Key onClick={handleSubmit}>→</Key>
      </Keypad>
      <StatusIndicator $status={status} />
      <TransitionOverlay $status={status} />
    </Container>
  );
};

export default IntroAnimation;