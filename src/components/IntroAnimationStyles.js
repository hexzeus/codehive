import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #000;
  padding: 20px;
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
`;

export const StatusIndicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  ${props => props.$status === 'idle' && css`
    background-color: #333;
  `}

  ${props => props.$status === 'success' && css`
    background-color: #00ff00;
  `}

  ${props => props.$status === 'error' && css`
    background-color: #ff0000;
  `}
`;

export const TransitionOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;

  ${props => props.$status === 'success' && css`
    opacity: 1;
  `}
`;