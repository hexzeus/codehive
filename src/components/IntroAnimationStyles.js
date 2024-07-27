import styled, { keyframes, css } from 'styled-components';

const glitch = keyframes`
  0% {
    clip: rect(64px, 9999px, 36px, 0);
    transform: skew(0.5deg);
  }
  5% {
    clip: rect(20px, 9999px, 58px, 0);
    transform: skew(0.8deg);
  }
  10% {
    clip: rect(90px, 9999px, 89px, 0);
    transform: skew(0.2deg);
  }
  15% {
    clip: rect(87px, 9999px, 50px, 0);
    transform: skew(0.7deg);
  }
  20% {
    clip: rect(55px, 9999px, 17px, 0);
    transform: skew(0.4deg);
  }
  25% {
    clip: rect(50px, 9999px, 4px, 0);
    transform: skew(0.9deg);
  }
  30% {
    clip: rect(22px, 9999px, 88px, 0);
    transform: skew(0.6deg);
  }
  35% {
    clip: rect(76px, 9999px, 81px, 0);
    transform: skew(0.3deg);
  }
  40% {
    clip: rect(91px, 9999px, 15px, 0);
    transform: skew(0.2deg);
  }
  45% {
    clip: rect(44px, 9999px, 30px, 0);
    transform: skew(0.7deg);
  }
  50% {
    clip: rect(27px, 9999px, 76px, 0);
    transform: skew(0.5deg);
  }
  55% {
    clip: rect(35px, 9999px, 64px, 0);
    transform: skew(0.8deg);
  }
  60% {
    clip: rect(50px, 9999px, 28px, 0);
    transform: skew(0.3deg);
  }
  65% {
    clip: rect(14px, 9999px, 61px, 0);
    transform: skew(0.6deg);
  }
  70% {
    clip: rect(23px, 9999px, 8px, 0);
    transform: skew(0.9deg);
  }
  75% {
    clip: rect(66px, 9999px, 94px, 0);
    transform: skew(0.4deg);
  }
  80% {
    clip: rect(18px, 9999px, 40px, 0);
    transform: skew(0.2deg);
  }
  85% {
    clip: rect(40px, 9999px, 64px, 0);
    transform: skew(0.7deg);
  }
  90% {
    clip: rect(35px, 9999px, 30px, 0);
    transform: skew(0.5deg);
  }
  95% {
    clip: rect(21px, 9999px, 71px, 0);
    transform: skew(0.8deg);
  }
  100% {
    clip: rect(1px, 9999px, 40px, 0);
    transform: skew(0.3deg);
  }
`;

const matrixFall = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  5%, 95% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(100%);
  }
`;

const unlockAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
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
  display: flex;
  justify-content: center;
  opacity: ${({ $isUnlocking }) => ($isUnlocking ? 0 : 1)};
  transition: opacity 1s ease-out;
`;

export const MatrixColumn = styled.div`
  font-family: 'Matrix Code NFI', monospace;
  font-size: 24px;
  color: #0f0;
  text-shadow: 0 0 5px #0f0;
  white-space: nowrap;
  margin: 0 10px;
  animation: ${matrixFall} 3s linear infinite;
  animation-delay: ${() => Math.random() * 3}s;

  &:before {
    content: '${() => String.fromCharCode(0x30A0 + Math.random() * 96)}';
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  opacity: ${({ $isUnlocking }) => ($isUnlocking ? 0 : 1)};
  transition: opacity 1s ease-out;
  animation: ${fadeIn} 1s ease-out;

  ${({ $shake }) =>
    $shake &&
    css`
      animation: ${glitch} 0.5s linear infinite;
    `}
`;

export const LogoImage = styled.img`
  width: 200px;
  height: 200px;
  filter: drop-shadow(0 0 10px #0f0);
  transform: translateZ(0);
  perspective: 1000px;
  transition: all 0.3s ease;
  animation: ${fadeIn} 1s ease-out;

  &:hover {
    filter: drop-shadow(0 0 20px #0f0);
  }
`;

export const PasswordDisplay = styled.div`
  font-family: 'Matrix Code NFI', monospace;
  font-size: 24px;
  color: #0f0;
  text-shadow: 0 0 5px #0f0;
  margin-bottom: 10px;
  letter-spacing: 5px;
`;

export const GlitchText = styled.h2`
  font-size: 2rem;
  color: #0f0;
  text-shadow: 0 0 5px #0f0;
  animation: ${glitch} 1s linear infinite;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: rgba(0, 255, 0, 0.2);
  margin-top: 10px;
  position: relative;

  &:after {
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
  gap: 10px;
  margin-top: 20px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 2px solid #0f0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
  animation: ${fadeIn} 1s ease-out;
`;

export const NumericButton = styled.button`
  background-color: rgba(0, 255, 0, 0.1);
  border: 1px solid #0f0;
  color: #0f0;
  font-family: 'Matrix Code NFI', monospace;
  font-size: 18px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;

  &:hover {
    background-color: rgba(0, 255, 0, 0.3);
    box-shadow: 0 0 10px #0f0;
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
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
  background: #000;
  z-index: 999;
  animation: ${unlockAnimation} 3s ease-out forwards;

  &:after {
    content: 'ACCESS GRANTED';
    color: #0f0;
    font-family: 'Matrix Code NFI', monospace;
    font-size: 3rem;
    text-shadow: 0 0 10px #0f0;
    animation: ${glitch} 1s linear infinite;
  }
`;