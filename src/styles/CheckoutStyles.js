import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  background-color: #000;
  color: #00ff00;
  min-height: 100vh;
  padding: 2rem;
  font-family: 'Courier New', monospace;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px #00ff00;
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
    background-color: #00ff00;
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
  background-color: ${props => props.$active ? '#00ff00' : '#003300'};
  color: ${props => props.$active ? '#000' : '#00ff00'};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: ${props => props.$active ? '0 0 15px #00ff00' : 'none'};
`;

export const StepLabel = styled.span`
  font-size: 0.9rem;
  color: ${props => props.$active ? '#00ff00' : '#006600'};
  transition: all 0.3s ease;
`;

export const FormContainer = styled.form`
  background-color: rgba(0, 50, 0, 0.5);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
  animation: ${fadeIn} 0.5s ease-out;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  background-color: rgba(0, 20, 0, 0.8);
  border: 1px solid #00ff00;
  color: #00ff00;
  font-family: 'Courier New', monospace;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #00ff00;
    transform: translateY(-2px);
  }
`;

export const Button = styled.button`
  background-color: #00ff00;
  color: #000;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 1rem;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: #00cc00;
    box-shadow: 0 0 15px #00ff00;
    transform: translateY(-2px);
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  background-color: rgba(0, 20, 0, 0.8);
  border: 1px solid #00ff00;
  color: #00ff00;
  font-family: 'Courier New', monospace;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #00ff00;
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

export const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 255, 0, 0.1);
  border-left: 4px solid #00ff00;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const ConfirmationContainer = styled.div`
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const ConfirmationTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #00ff00;
`;

export const ConfirmationText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;