import styled, { keyframes } from 'styled-components';
import logo from '../logo.png';

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

const shine = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  padding: 6rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
  color: #e0e0e0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    background: url(${logo}) no-repeat center center;
    background-size: 80%;
    opacity: 0.05;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    animation: ${float} 6s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: transparent;
  background: linear-gradient(90deg, #1e90ff, #ff6ad5, #1e90ff);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  animation: ${shine} 3s linear infinite;
  text-shadow: 0 0 10px rgba(30, 144, 255, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto 2rem auto;
  color: #b3b3b3;
  animation: ${fadeInUp} 1s ease-out 0.5s both;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  animation: ${fadeInUp} 1s ease-out 1s both;

  @media (max-width: 768px) {
    max-width: 400px;
  }

  @media (max-width: 480px) {
    max-width: 300px;
  }
`;

export const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  background-color: rgba(38, 38, 38, 0.8);
  color: #e0e0e0;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 15px rgba(30, 144, 255, 0.5);
    transform: scale(1.02);
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
  background-color: rgba(38, 38, 38, 0.8);
  color: #e0e0e0;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 15px rgba(30, 144, 255, 0.5);
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: #ffffff;
  background: linear-gradient(90deg, #1e90ff, #ff6ad5);
  background-size: 200% auto;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-position: right center;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(30, 144, 255, 0.3);
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

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #1e90ff;
  }

  p {
    margin-bottom: 0.5rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  animation: ${fadeInUp} 1s ease-out 2s both;
`;

export const SocialIcon = styled.a`
  margin: 0 1rem;
  color: #1e90ff;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #ff6ad5;
    transform: translateY(-5px);
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 300px;
  margin-top: 3rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: ${fadeInUp} 1s ease-out 2.5s both;
`;

export const SuccessMessage = styled.div`
  color: #4caf50;
  margin-top: 1rem;
  animation: ${fadeInUp} 0.5s ease-out;
`;

export const ErrorMessage = styled.div`
  color: #f44336;
  margin-top: 1rem;
  animation: ${fadeInUp} 0.5s ease-out;
`;

export const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
  margin: 0 auto;
`;