import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
`;

const fadeOut = keyframes`
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.2); }
`;

const glitch = keyframes`
  0% {
    text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff,
      0.025em 0.05em 0 #fffc00;
  }
  14% {
    text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff,
      0.025em 0.05em 0 #fffc00;
  }
  15% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.025em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
  49% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.025em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
  50% {
    text-shadow: 0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff,
      0 -0.05em 0 #fffc00;
  }
  99% {
    text-shadow: 0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff,
      0 -0.05em 0 #fffc00;
  }
  100% {
    text-shadow: -0.025em 0 0 #00fffc, -0.025em -0.025em 0 #fc00ff,
      -0.025em -0.05em 0 #fffc00;
  }
`;

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
  75% { transform: translateX(-10px); }
  100% { transform: translateX(0); }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: #000000;
  color: #e0e0e0;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

export const CodeAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  overflow: hidden;
  z-index: 1;
  transition: opacity 2s ease-out;
  opacity: ${({ $isUnlocking }) => ($isUnlocking ? 0 : 1)};

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    opacity: 0.2;
  }

  span {
    color: #00ff00;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
    animation: ${keyframes`
      0% { transform: translateY(0); }
      100% { transform: translateY(-100vh); }
    `} 20s linear infinite;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  animation: ${({ $isUnlocking }) =>
    $isUnlocking ? css`${fadeOut} 2s ease-out forwards` : css`${fadeIn} 1.5s ease-out forwards`};

  ${({ $shake }) => $shake && css`
    animation: ${shake} 0.5s ease-in-out;
  `}
`;

export const LogoImage = styled.img`
  width: 200px;
  height: 200px;
  filter: drop-shadow(0 0 20px #00ff00);
  animation: ${fadeIn} 1.5s ease-out forwards;
  transform: translateZ(0);
  perspective: 1000px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1) rotate(5deg);
    filter: drop-shadow(0 0 30px #00ff00);
  }
`;

export const PasswordDisplay = styled.div`
  font-family: 'Courier New', monospace;
  font-size: 24px;
  color: #00ff00;
  text-shadow: 0 0 5px #00ff00;
  margin-bottom: 10px;
  letter-spacing: 5px;
`;

export const GlitchText = styled.h2`
  font-size: 2rem;
  color: #00ff00;
  text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff,
    0.025em 0.05em 0 #fffc00;
  animation: ${glitch} 1.5s infinite;
`;

export const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;

export const Particle = styled.div`
  position: absolute;
  background-color: #00ff00;
  border-radius: 50%;
  opacity: 0.5;
  animation: ${keyframes`
    0% { transform: translateY(0) translateX(0); }
    100% { transform: translateY(-100vh) translateX(100vw); }
  `} 20s linear infinite;
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
    background-color: #00ff00;
    box-shadow: 0 0 10px #00ff00;
    transition: width 0.3s ease-in-out;
  }
`;

export const NumericPad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 20px;
`;

export const NumericButton = styled.button`
  background-color: rgba(0, 255, 0, 0.1);
  border: 1px solid #00ff00;
  color: #00ff00;
  font-family: 'Courier New', monospace;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 255, 0, 0.3);
    box-shadow: 0 0 10px #00ff00;
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;