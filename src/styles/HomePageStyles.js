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

  h3, p {
    position: relative;
    z-index: 1;
    animation: ${fadeInUp} 1s ease-out both;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;

    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

export const Services = styled.div`
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

export const Service = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  margin: 1rem;
  border-radius: 10px;
  width: 30%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 1s ease-out both;

  @media (max-width: 768px) {
    width: 80%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 1rem;
  }
`;

export const Features = styled.div`
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

export const Feature = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  margin: 1rem;
  border-radius: 10px;
  width: 30%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 1s ease-out both;

  @media (max-width: 768px) {
    width: 80%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 1rem;
  }
`;

export const Testimonials = styled.div`
  margin: 3rem 0;

  p {
    font-size: 1rem;
    color: #b3b3b3;
  }

  h4 {
    font-size: 1.2rem;
    color: #1e90ff;
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.9rem;
    }

    h4 {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 0.8rem;
    }

    h4 {
      font-size: 0.9rem;
    }
  }
`;

export const Testimonial = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 1s ease-out both;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const CallToAction = styled.div`
  margin: 3rem 0;
  text-align: center;

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #1e90ff;
  }

  p {
    font-size: 1.5rem;
    color: #b3b3b3;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 1rem;
    }
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
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0b74da;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;
