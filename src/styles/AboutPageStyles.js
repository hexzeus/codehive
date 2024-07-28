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
  padding: 8rem 2rem 6rem; // Increased top padding
  text-align: center;
  background: #000000;
  color: #00ff00;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; // Changed from center to flex-start
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
  margin-bottom: 4rem; // Increased from 3rem to 4rem
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

export const ValueProposition = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`;

export const ValueItem = styled.div`
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

export const JourneyTimeline = styled.div`
  margin: 4rem 0;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 4px;
    background: #00ff00;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    &::before {
      left: 0;
    }
  }
`;

export const TimelineItem = styled.div`
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid #00ff00;
  border-radius: 20px;
  padding: 2rem;
  margin: 2rem 0;
  position: relative;
  width: 45%;
  animation: ${fadeInUp} 1s ease-out both;

  &:nth-child(odd) {
    margin-left: auto;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-left: 10% !important;
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

export const Testimonial = styled.div`
  background: rgba(0, 255, 0, 0.1);
  border: 2px solid #00ff00;
  border-radius: 20px;
  padding: 3rem;
  margin: 5rem 0;
  position: relative;

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 3rem 0;
  }

  &::before {
    content: '"';
    position: absolute;
    top: -40px;
    left: 20px;
    font-size: 8rem;
    color: #00ff00;
    opacity: 0.5;

    @media (max-width: 768px) {
      font-size: 6rem;
      top: -30px;
    }
  }

  blockquote {
    font-size: 1.8rem;
    font-style: italic;
    margin-bottom: 1.5rem;
    color: #00ff00;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  cite {
    font-size: 1.4rem;
    color: #00cc00;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

export const Awards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 5rem 0;

  @media (max-width: 768px) {
    gap: 2rem;
    margin: 3rem 0;
  }

  h2 {
    width: 100%;
    font-size: 2.8rem;
    margin-bottom: 2rem;
    color: #00ff00;
    text-shadow: 0 0 10px #00ff00;

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }
`;

export const AwardItem = styled.div`
  background: rgba(0, 255, 0, 0.1);
  border: 2px solid #00ff00;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex-basis: calc(33.333% - 2rem);

  @media (max-width: 1024px) {
    flex-basis: calc(50% - 2rem);
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
    padding: 1.5rem;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 255, 0, 0.2);
  }

  img {
    width: 100px;
    height: 100px;
    margin-bottom: 1.5rem;
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);

    @media (max-width: 768px) {
      width: 80px;
      height: 80px;
    }
  }

  p {
    font-size: 1.2rem;
    color: #00ff00;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const CTASection = styled.div`
  margin: 5rem 0;
  text-align: center;

  @media (max-width: 768px) {
    margin: 3rem 0;
  }

  h2 {
    font-size: 2.8rem;
    margin-bottom: 2rem;
    color: #00ff00;
    text-shadow: 0 0 10px #00ff00;

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }
`;

export const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1.2rem 2.5rem;
  font-size: 1.4rem;
  color: #000000;
  background: #00ff00;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.2rem;
  }

  &:hover {
    background: #00cc00;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 255, 0, 0.3);
  }
`;