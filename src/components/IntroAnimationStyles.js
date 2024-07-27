import styled, { keyframes, css } from 'styled-components';

const glitch = keyframes`
  0% {
    text-shadow: 0.05em 0 0 rgba(255,0,0,0.75), -0.05em -0.025em 0 rgba(0,255,0,0.75), -0.025em 0.05em 0 rgba(0,0,255,0.75);
  }
  14% {
    text-shadow: 0.05em 0 0 rgba(255,0,0,0.75), -0.05em -0.025em 0 rgba(0,255,0,0.75), -0.025em 0.05em 0 rgba(0,0,255,0.75);
  }
  15% {
    text-shadow: -0.05em -0.025em 0 rgba(255,0,0,0.75), 0.025em 0.025em 0 rgba(0,255,0,0.75), -0.05em -0.05em 0 rgba(0,0,255,0.75);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 rgba(255,0,0,0.75), 0.025em 0.025em 0 rgba(0,255,0,0.75), -0.05em -0.05em 0 rgba(0,0,255,0.75);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 rgba(255,0,0,0.75), 0.05em 0 0 rgba(0,255,0,0.75), 0 -0.05em 0 rgba(0,0,255,0.75);
  }
  99% {
    text-shadow: 0.025em 0.05em 0 rgba(255,0,0,0.75), 0.05em 0 0 rgba(0,255,0,0.75), 0 -0.05em 0 rgba(0,0,255,0.75);
  }
  100% {
    text-shadow: -0.025em 0 0 rgba(255,0,0,0.75), -0.025em -0.025em 0 rgba(0,255,0,0.75), -0.025em -0.05em 0 rgba(0,0,255,0.75);
  }
`;

const matrixFall = keyframes`
  0% {
    top: -50%;
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    top: 110%;
    opacity: 0;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

const unlockAnimation = keyframes`
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.5) rotate(360deg);
    opacity: 1;
  }
  100% {
    transform: scale(1) rotate(720deg);
    opacity: 1;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #000;
  position: relative;
  overflow: hidden;
`;

export const MatrixBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  opacity: ${({ $isUnlocking }) => ($isUnlocking ? 0 : 1)};
  transition: opacity 1s ease-out;
`;

export const MatrixColumn = styled.div`
  position: absolute;
  top: -50%;
  font-family: 'Matrix Code NFI', monospace;
  font-size: 24px;
  color: #0f0;
  text-shadow: 0 0 5px #0f0;
  white-space: nowrap;
  animation: ${matrixFall} ${() => 3 + Math.random() * 5}s linear infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  left: ${() => Math.random() * 100}%;

  &::before {
    content: '${() => String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))}';
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  opacity: ${({ $isUnlocking }) => ($isUnlocking ? 0 : 1)};
  transition: opacity 1s ease-out, transform 0.3s ease-out;
  animation: ${fadeInUp} 1s ease-out;

  ${({ $shake }) =>
    $shake &&
    css`
      animation: ${glitch} 0.3s linear;
    `}
`;

export const LogoImage = styled.img`
  width: 200px;
  height: 200px;
  filter: drop-shadow(0 0 10px #0f0);
  transform: translateZ(0);
  perspective: 1000px;
  transition: all 0.3s ease;
  animation: ${pulse} 2s infinite ease-in-out;

  &:hover {
    filter: drop-shadow(0 0 20px #0f0);
    transform: scale(1.05);
  }
`;

export const PasswordDisplay = styled.div`
  font-family: 'Courier New', monospace;
  font-size: 28px;
  color: #0f0;
  text-shadow: 0 0 5px #0f0;
  margin: 20px 0;
  letter-spacing: 5px;
  min-height: 30px;
  transition: all 0.3s ease;
`;

export const GlitchText = styled.h2`
  font-size: 2.5rem;
  color: #0f0;
  text-shadow: 0 0 5px #0f0;
  animation: ${glitch} 3s linear infinite;
  margin-bottom: 20px;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: rgba(0, 255, 0, 0.2);
  margin-top: 10px;
  position: relative;
  overflow: hidden;
  border-radius: 2.5px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.$progress}%;
    background-color: #0f0;
    box-shadow: 0 0 10px #0f0;
    transition: width 0.3s ease-in-out;
  }
`;

export const NumericPad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 30px;
  padding: 25px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 2px solid #0f0;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
  animation: ${fadeInUp} 1s ease-out 0.5s both;
`;

export const NumericButton = styled.button`
  background-color: rgba(0, 255, 0, 0.1);
  border: 1px solid #0f0;
  color: #0f0;
  font-family: 'Courier New', monospace;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 8px;
  outline: none;

  &:hover {
    background-color: rgba(0, 255, 0, 0.3);
    box-shadow: 0 0 15px #0f0;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.95) translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`;

export const UnlockingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle, rgba(0,255,0,0.2) 0%, rgba(0,0,0,1) 70%);
  z-index: 999;
  animation: ${unlockAnimation} 3s ease-out forwards;

  &::after {
    content: 'ACCESS GRANTED';
    color: #0f0;
    font-family: 'Courier New', monospace;
    font-size: 3rem;
    text-shadow: 0 0 10px #0f0;
    animation: ${glitch} 1s linear infinite;
    letter-spacing: 5px;
  }
`;