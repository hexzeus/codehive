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
  position: relative; /* Ensure positioning context for the background image */

  &::before {
    content: "";
    background: url(${logo}) no-repeat center center;
    background-size: 80%; /* Adjust size as needed */
    opacity: 0.05; /* Adjust opacity to make it ghosted */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  h1, h3, p {
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

export const Section = styled.section`
  margin-bottom: 3rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #1e90ff;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
    color: #b3b3b3;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #1e90ff; /* Electric blue for headers */
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  color: #b3b3b3;
`;

export const ServiceList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3rem 0;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #1e90ff;
  }

  p {
    font-size: 1rem;
    color: #b3b3b3;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

export const ServiceItem = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  margin: 1rem;
  border-radius: 10px;
  width: 30%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 1s ease-out both;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
