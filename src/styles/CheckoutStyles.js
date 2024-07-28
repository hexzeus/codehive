import styled, { keyframes } from 'styled-components';

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

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background: linear-gradient(to bottom, #000000, #1a1a1a);
  min-height: 100vh;
  color: #0f0;
  font-family: 'Orbitron', sans-serif;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
  animation: ${glitch} 3s infinite;
`;

export const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  position: relative;
 
  &::after {
    content: '';
    position: absolute;
    top: 25px;
    left: 10%;
    right: 10%;
    height: 2px;
    background-color: #0f0;
    z-index: 0;
  }
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
  z-index: 1;
`;

export const StepIcon = styled.div`
  background-color: ${props => props.$active ? '#0f0' : '#003300'};
  color: ${props => props.$active ? '#000' : '#0f0'};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: ${props => props.$active ? '0 0 15px #0f0' : 'none'};
`;

export const StepLabel = styled.span`
  font-size: 0.9rem;
  color: ${props => props.$active ? '#0f0' : '#006600'};
  transition: all 0.3s ease;
`;

export const FormContainer = styled.form`
  background-color: rgba(0, 255, 0, 0.05);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid #0f0;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
  animation: ${fadeIn} 0.5s ease-out;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  background-color: rgba(0, 20, 0, 0.8);
  border: 1px solid #0f0;
  color: #0f0;
  font-family: 'Orbitron', sans-serif;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #0f0;
    transform: translateY(-2px);
  }
`;

export const Button = styled.button`
  background-color: #0f0;
  color: #000;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 1rem;
  border-radius: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Orbitron', sans-serif;

  &:hover {
    background-color: #00cc00;
    box-shadow: 0 0 15px #0f0;
    transform: translateY(-2px);
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  background-color: rgba(0, 20, 0, 0.8);
  border: 1px solid #0f0;
  color: #0f0;
  font-family: 'Orbitron', sans-serif;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #0f0;
    transform: translateY(-2px);
  }
`;

export const ErrorMessage = styled.p`
  color: #ff0000;
  margin-bottom: 1rem;
  background-color: rgba(255, 0, 0, 0.1);
  padding: 0.5rem;
  border-radius: 5px;
  text-align: center;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 255, 0, 0.1);
  border-left: 4px solid #0f0;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
`;

export const LoadingText = styled.p`
  color: #0f0;
  font-size: 1.2rem;
  margin-top: 20px;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
`;

export const ConfirmationContainer = styled.div`
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const ConfirmationTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #0f0;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
`;

export const ConfirmationText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #0f0;
`;