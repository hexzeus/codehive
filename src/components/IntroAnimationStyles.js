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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #000;
  padding: 20px;
  overflow: hidden;
`;

export const Logo = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 40px;
  animation: ${fadeIn} 0.8s ease-out;
`;

export const CodeInput = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 15px;
  font-size: 24px;
  text-align: center;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #333;
  color: #fff;
  margin-bottom: 30px;
  animation: ${slideUp} 0.5s ease-out;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #fff;
  }
`;

export const KeypadWrapper = styled.div`
  perspective: 1000px;
`;

export const Keypad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  max-width: 300px;
  width: 100%;
  animation: ${slideUp} 0.5s ease-out 0.2s backwards;
`;

export const Key = styled.button`
  padding: 15px;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.05);
  border: none;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 5px;

  &:hover, &:focus {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const StatusIndicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: 20px;
  transition: all 0.3s ease;

  ${props => props.$status === 'idle' && css`
    background-color: #333;
  `}

  ${props => props.$status === 'success' && css`
    background-color: #00ff00;
    box-shadow: 0 0 10px #00ff00;
  `}

  ${props => props.$status === 'error' && css`
    background-color: #ff0000;
    box-shadow: 0 0 10px #ff0000;
  `}
`;

export const TransitionOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;

  ${props => props.$show && css`
    opacity: 1;
    visibility: visible;
  `}
`;

export const TransitionContent = styled.div`
  color: #00ff00;
  text-align: center;

  h1 {
    font-size: 36px;
    margin-bottom: 20px;
    opacity: 0;
    animation: ${fadeIn} 1s ease-out 0.5s forwards;
  }

  p {
    font-size: 18px;
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em;
    animation: ${typeWriter} 3s steps(40, end);
  }
`;

export const LockoutTimer = styled.div`
  font-size: 24px;
  color: #ff0000;
  margin-top: 20px;
  font-weight: bold;
`;

export const ErrorMessage = styled.div`
  color: #ff0000;
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
  animation: ${slideUp} 0.3s ease-out;
`;

export const SuccessMessage = styled.div`
  color: #00ff00;
  margin-top: 10px;
  font-size: 18px;
  text-align: center;
  animation: ${slideUp} 0.3s ease-out;
`;