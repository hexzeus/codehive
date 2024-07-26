import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
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

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const shine = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

export const Container = styled.div`
  padding: 6rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #0b0b0b 100%);
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

export const Section = styled.section`
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
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
  margin: 0 auto;
  color: #b3b3b3;
  animation: ${fadeInUp} 1s ease-out 0.5s both;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ServiceList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  position: relative;
  z-index: 1;
`;

export const ServiceItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease-in-out;
  animation: ${fadeInUp} 1s ease-out both;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 40px rgba(30, 144, 255, 0.2);
  }

  h3 {
    font-size: 1.5rem;
    margin: 1rem 0;
    color: #1e90ff;
  }

  p {
    font-size: 1rem;
    color: #b3b3b3;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

export const Icon = styled.div`
  font-size: 3rem;
  color: #1e90ff;
  margin-bottom: 1rem;
  transition: all 0.3s ease-in-out;

  ${ServiceItem}:hover & {
    transform: scale(1.2);
  }
`;

export const TestimonialSection = styled.section`
  margin: 4rem 0;
  position: relative;
  z-index: 1;
`;

export const Testimonial = styled.blockquote`
  font-size: 1.2rem;
  font-style: italic;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  cite {
    display: block;
    margin-top: 1rem;
    color: #1e90ff;
    font-style: normal;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1.5rem;
  }
`;

export const CTASection = styled.section`
  margin-top: 4rem;
  position: relative;
  z-index: 1;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #1e90ff;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: #ffffff;
  background: linear-gradient(90deg, #1e90ff, #ff6ad5);
  background-size: 200% auto;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-position: right center;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(30, 144, 255, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;