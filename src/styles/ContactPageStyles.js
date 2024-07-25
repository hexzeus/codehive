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
  }

  h1, h3, p, form {
    position: relative;
    z-index: 1;
    animation: ${fadeInUp} 1s ease-out both;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #1e90ff;

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
  background-color: #262626;
  color: #e0e0e0;
  font-size: 1rem;
  transition: box-shadow 0.3s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #1e90ff, 0 0 15px rgba(30, 144, 255, 0.5);
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.8rem;
  }
`;

export const TextArea = styled.textarea`
  padding: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #262626;
  color: #e0e0e0;
  font-size: 1rem;
  transition: box-shadow 0.3s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #1e90ff, 0 0 15px rgba(30, 144, 255, 0.5);
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.8rem;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: #ffffff;
  background-color: #1e90ff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0b74da;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }
`;
