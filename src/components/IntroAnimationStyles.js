import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const typeWriter = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const matrixRain = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #000;
  padding: 20px;
  overflow: hidden;
  position: relative;
`;

export const MatrixBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '01';
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    transform: rotate(45deg);
    font-family: 'Courier New', monospace;
    font-size: clamp(16px, 2vw, 20px);
    line-height: 1;
    white-space: nowrap;
    color: #0f0;
    opacity: 0.1;
    animation: ${matrixRain} 20s linear infinite;
  }
`;

export const AccessPanel = styled.div`
  background: rgba(0, 255, 0, 0.05);
  border: 1px solid rgba(0, 255, 0, 0.1);
  border-radius: 10px;
  padding: clamp(20px, 5vw, 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
  z-index: 2;
  animation: ${fadeIn} 1s ease-out;
  width: 90%;
  max-width: 400px;
`;

export const Logo = styled.img`
  width: clamp(100px, 30vw, 150px);
  height: auto;
  margin-bottom: clamp(20px, 5vw, 40px);
  animation: ${pulse} 2s ease-in-out infinite;
`;

export const CodeInput = styled.input`
  width: 100%;
  max-width: 300px;
  padding: clamp(10px, 3vw, 15px);
  font-size: clamp(18px, 4vw, 24px);
  text-align: center;
  background-color: rgba(0, 255, 0, 0.1);
  border: none;
  border-bottom: 2px solid #0f0;
  color: #0f0;
  margin-bottom: clamp(20px, 5vw, 30px);
  animation: ${slideUp} 0.5s ease-out;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  }
`;

export const KeypadContainer = styled.div`
  perspective: 1000px;
  margin-bottom: 20px;
  width: 100%;
`;

export const KeypadWrapper = styled.div`
  transform-style: preserve-3d;
  transition: transform 0.6s;

  &:hover {
    transform: rotateX(5deg) rotateY(5deg);
  }
`;

export const Keypad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(10px, 2vw, 15px);
  width: 100%;
  animation: ${slideUp} 0.5s ease-out 0.2s backwards;
`;

export const Key = styled.button`
  padding: clamp(10px, 3vw, 15px);
  font-size: clamp(16px, 4vw, 20px);
  background-color: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.3);
  color: #0f0;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 5px;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover, &:focus {
    background-color: rgba(0, 255, 0, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 2px 10px rgba(0, 255, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const KeyIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(14px, 3vw, 18px);
`;

export const StatusIndicator = styled.div`
  width: clamp(10px, 3vw, 15px);
  height: clamp(10px, 3vw, 15px);
  border-radius: 50%;
  margin-top: clamp(15px, 4vw, 20px);
  transition: all 0.3s ease;

  ${props => props.$status === 'idle' && css`
    background-color: #333;
  `}

  ${props => props.$status === 'success' && css`
    background-color: #0f0;
    box-shadow: 0 0 15px #0f0;
    animation: ${pulse} 0.5s ease-out infinite;
  `}

  ${props => props.$status === 'error' && css`
    background-color: #f00;
    box-shadow: 0 0 15px #f00;
    animation: ${pulse} 0.5s ease-out infinite;
  `}
`;

export const TransitionOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  z-index: 10;

  ${props => props.$show && css`
    opacity: 1;
    visibility: visible;
  `}
`;

export const TransitionContent = styled.div`
  color: #0f0;
  text-align: center;
  padding: 20px;

  h1 {
    font-size: clamp(24px, 5vw, 36px);
    margin-bottom: clamp(10px, 3vw, 20px);
    opacity: 0;
    animation: ${fadeIn} 1s ease-out 0.5s forwards;
  }

  p {
    font-size: clamp(14px, 3vw, 18px);
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em;
    animation: ${typeWriter} 3s steps(40, end);
  }
`;

export const LockoutTimer = styled.div`
  font-size: clamp(18px, 4vw, 24px);
  color: #f00;
  margin-top: clamp(15px, 4vw, 20px);
  font-weight: bold;
  animation: ${pulse} 1s ease-in-out infinite;
`;

export const StatusMessage = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: clamp(15px, 4vw, 20px);
`;

export const ErrorMessage = styled.div`
  color: #f00;
  font-size: clamp(14px, 3vw, 16px);
  text-align: center;
  animation: ${slideUp} 0.3s ease-out;
`;

export const SuccessMessage = styled.div`
  color: #0f0;
  font-size: clamp(16px, 3vw, 20px);
  text-align: center;
  animation: ${slideUp} 0.3s ease-out, ${pulse} 1s ease-in-out infinite;
`;