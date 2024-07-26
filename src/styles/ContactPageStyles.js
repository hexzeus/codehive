import styled, { keyframes } from 'styled-components';

const matrixRain = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
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
  padding: 6rem 2rem;
  text-align: center;
  background: #000000;
  color: #00ff00;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  font-family: 'Courier New', monospace;
`;

export const CodeAnimation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.1;
  
  span {
    position: absolute;
    top: -100%;
    color: #00ff00;
    font-size: 1rem;
    text-shadow: 0 0 5px #00ff00;
    animation: ${matrixRain} 10s linear infinite;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #00ff00;
  text-shadow: 0 0 10px #00ff00;
  animation: ${glitch} 3s infinite;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto 2rem auto;
  color: #00cc00;
  animation: ${fadeInUp} 1s ease-out 0.5s both;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  background-color: rgba(0, 255, 0, 0.1);
  color: #00ff00;
  font-size: 1rem;
  font-family: 'Courier New', monospace;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 15px rgba(0, 255, 0, 0.5);
    transform: scale(1.02);
  }

  &::placeholder {
    color: rgba(0, 255, 0, 0.5);
  }

  &.invalid {
    animation: ${shake} 0.5s ease-in-out;
    border: 2px solid #ff0000;
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;

export const TextArea = styled.textarea`
  padding: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  background-color: rgba(0, 255, 0, 0.1);
  color: #00ff00;
  font-size: 1rem;
  font-family: 'Courier New', monospace;
  transition: all 0.3s ease-in-out;
  resize: vertical;

  &:focus {
    outline: none;
    box-shadow: 0 0 15px rgba(0, 255, 0, 0.5);
    transform: scale(1.02);
  }

  &::placeholder {
    color: rgba(0, 255, 0, 0.5);
  }

  &.invalid {
    animation: ${shake} 0.5s ease-in-out;
    border: 2px solid #ff0000;
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: #000000;
  background: #00ff00;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Courier New', monospace;

  &:hover {
    background: #00cc00;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 255, 0, 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

export const ContactInfo = styled.div`
  margin-top: 3rem;
  animation: ${fadeInUp} 1s ease-out 1.5s both;
  position: relative;
  z-index: 1;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #00ff00;
    text-shadow: 0 0 5px #00ff00;
  }

  p {
    margin-bottom: 0.5rem;
    color: #00cc00;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  animation: ${fadeInUp} 1s ease-out 2s both;
  position: relative;
  z-index: 1;
`;

export const SocialIcon = styled.a`
  margin: 0 1rem;
  color: #00ff00;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #00cc00;
    transform: translateY(-5px);
    text-shadow: 0 0 10px #00ff00;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 300px;
  margin-top: 3rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 255, 0, 0.2);
  animation: ${fadeInUp} 1s ease-out 2.5s both;
  position: relative;
  z-index: 1;
`;

export const SuccessMessage = styled.div`
  color: #00ff00;
  margin-top: 1rem;
  animation: ${fadeInUp} 0.5s ease-out;
  text-shadow: 0 0 5px #00ff00;
`;

export const ErrorMessage = styled.div`
  color: #ff0000;
  margin-top: 1rem;
  animation: ${fadeInUp} 0.5s ease-out;
  text-shadow: 0 0 5px #ff0000;
`;

export const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #00ff00;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;