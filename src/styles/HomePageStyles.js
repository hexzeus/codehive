// HomePageStyles.js
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
  background: linear-gradient(135deg, #151515 0%, #0b0b0b 100%);
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
    background-size: 50vw; /* Adjust the initial size as needed */
    opacity: 0.05;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  h3, p {
    position: relative;
    z-index: 1;
    animation: ${fadeInUp} 1s ease-out both;
  }

  @media (max-width: 1200px) {
    &::before {
      background-size: 60vw;
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;

    &::before {
      background-size: 70vw;
    }

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;

    &::before {
      background-size: 90vw;
    }

    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;