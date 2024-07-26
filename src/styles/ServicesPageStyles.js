import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

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

export const Section = styled.section`
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #00ff00;
  text-shadow: 0 0 10px #00ff00;
  animation: ${glitch} 3s infinite;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  color: #00cc00;
  animation: ${fadeInUp} 1s ease-out 0.5s both;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ServiceList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`;

export const ServiceItem = styled.div`
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid #00ff00;
  border-radius: 20px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeInUp} 1s ease-out both;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 255, 0, 0.2);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #00ff00;
    text-shadow: 0 0 5px #00ff00;
  }

  p {
    font-size: 1rem;
    color: #00cc00;
  }
`;

export const Icon = styled.div`
  font-size: 3rem;
  color: #00ff00;
  margin-bottom: 1rem;
  transition: all 0.3s ease-in-out;

  ${ServiceItem}:hover & {
    transform: scale(1.2);
    text-shadow: 0 0 10px #00ff00;
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
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid #00ff00;
  border-radius: 20px;
  color: #00ff00;

  cite {
    display: block;
    margin-top: 1rem;
    color: #00cc00;
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
    color: #00ff00;
    text-shadow: 0 0 10px #00ff00;
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
  color: #000000;
  background: #00ff00;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #00cc00;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 255, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;