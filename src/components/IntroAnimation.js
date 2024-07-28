import React, { useState, useCallback, useEffect, useRef } from 'react';
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
  LockoutTimer,
  KeypadWrapper,
  ErrorMessage,
  SuccessMessage,
  TransitionContent,
  MatrixBackground,
  AccessPanel,
  KeypadContainer,
  KeyIcon,
  StatusMessage
} from './IntroAnimationStyles';
import logo from '../logo.png';
import { FaBackspace, FaLock, FaUnlock } from 'react-icons/fa';

const ACCESS_CODE = '18005555';
const ACCESS_CODE_HASH = sha256(ACCESS_CODE);
const MAX_ATTEMPTS = 3;
const LOCKOUT_DURATION = 30;

const IntroAnimation = ({ onUnlock }) => {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('idle');
  const [attempts, setAttempts] = useState(0);
  const [lockout, setLockout] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [showTransition, setShowTransition] = useState(false);
  const keypadRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (lockout > 0) {
      timer = setInterval(() => setLockout(prev => prev - 1), 1000);
    } else if (lockout === 0 && attempts >= MAX_ATTEMPTS) {
      setAttempts(0);
      setStatus('idle');
      setErrorMessage('');
    }
    return () => clearInterval(timer);
  }, [lockout, attempts]);

  const handleInput = useCallback((value) => {
    if (lockout === 0 && code.length < 8) {
      setCode(prev => prev + value);
      setStatus('idle');
      setErrorMessage('');
    }
  }, [code, lockout]);

  const handleDelete = useCallback(() => {
    if (lockout === 0) {
      setCode(prev => prev.slice(0, -1));
      setStatus('idle');
      setErrorMessage('');
    }
  }, [lockout]);

  const handleSubmit = useCallback(() => {
    if (lockout > 0) return;
    if (sha256(code) === ACCESS_CODE_HASH) {
      setStatus('success');
      setShowTransition(true);
      setTimeout(() => {
        onUnlock();
        navigate('/home');
      }, 3000);
    } else {
      setStatus('error');
      setCode('');
      setAttempts(prev => prev + 1);
      if (attempts + 1 >= MAX_ATTEMPTS) {
        setLockout(LOCKOUT_DURATION);
        setErrorMessage('Maximum attempts reached. System locked.');
      } else {
        setErrorMessage('Invalid access code. Please try again.');
      }
      setTimeout(() => setStatus('idle'), 1000);
    }
  }, [code, navigate, onUnlock, attempts, lockout]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key >= '0' && e.key <= '9') handleInput(e.key);
      else if (e.key === 'Backspace') handleDelete();
      else if (e.key === 'Enter') handleSubmit();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleInput, handleDelete, handleSubmit]);

  return (
    <Container>
      <MatrixBackground />
      <AccessPanel>
        <Logo src={logo} alt="IVES HUB Logo" />
        <CodeInput value={'•'.repeat(code.length)} readOnly maxLength={8} />
        <KeypadContainer>
          <KeypadWrapper ref={keypadRef}>
            <Keypad>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(num => (
                <Key key={num} onClick={() => handleInput(num.toString())} disabled={lockout > 0}>
                  {num}
                </Key>
              ))}
              <Key onClick={handleDelete} disabled={lockout > 0}>
                <KeyIcon><FaBackspace /></KeyIcon>
              </Key>
              <Key onClick={handleSubmit} disabled={lockout > 0}>
                <KeyIcon>{status === 'success' ? <FaUnlock /> : <FaLock />}</KeyIcon>
              </Key>
            </Keypad>
          </KeypadWrapper>
        </KeypadContainer>
        <StatusIndicator $status={status} />
        {lockout > 0 && <LockoutTimer>{lockout}</LockoutTimer>}
        <StatusMessage>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          {status === 'success' && <SuccessMessage>Access Granted</SuccessMessage>}
        </StatusMessage>
      </AccessPanel>
      <TransitionOverlay $show={showTransition}>
        <TransitionContent>
          <h1>Welcome to IVES HUB</h1>
          <p>Initializing secure environment...</p>
        </TransitionContent>
      </TransitionOverlay>
    </Container>
  );
};

export default IntroAnimation;