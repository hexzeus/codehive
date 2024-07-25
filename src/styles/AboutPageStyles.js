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
    background-size: 80%;
    opacity: 0.05;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  h1, h2, h3, p {
    position: relative;
    z-index: 1;
    animation: ${fadeInUp} 1s ease-out both;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.2rem;
    }

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.9rem;
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

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #1e90ff;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  color: #b3b3b3;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Team = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3rem 0;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #1e90ff;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export const Member = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  margin: 1rem;
  border-radius: 10px;
  width: 30%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 1s ease-out both;
  text-align: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 1rem;
    object-fit: cover;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #1e90ff;
  }

  p {
    font-size: 1rem;
    color: #b3b3b3;
  }

  @media (max-width: 768px) {
    width: 80%;
    padding: 1.5rem;

    img {
      width: 80px;
      height: 80px;
    }

    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 1rem;

    img {
      width: 70px;
      height: 70px;
    }

    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

export const History = styled.div`
  margin: 3rem 0;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #1e90ff;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
`;

export const HistoryItem = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 1s ease-out both;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #1e90ff;
  }

  p {
    font-size: 1rem;
    color: #b3b3b3;
  }

  @media (max-width: 768px) {
    width: 80%;
    padding: 1.5rem;

    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 1rem;

    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;
