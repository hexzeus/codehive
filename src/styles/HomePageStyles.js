// HomePageStyles.js
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

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
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
  background: #000000;
  color: #00ff00;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

export const CodeAnimation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  & > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }

  span {
    position: absolute;
    top: -100%;
    color: #00ff00;
    font-family: 'Courier New', monospace;
    font-size: 1rem;
    text-shadow: 0 0 5px #00ff00;
    animation: ${matrixRain} 10s linear infinite;
    opacity: 0.8;
  }
`;

export const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  position: relative;
`;

export const LogoImage = styled.img`
  width: 200px;
  height: auto;
  animation: ${float} 6s ease-in-out infinite;
  filter: drop-shadow(0 0 20px #00ff00);
`;

export const Tagline = styled.h1`
  font-size: 2.5rem;
  margin: 2rem 0;
  text-shadow: 0 0 10px #00ff00;
  animation: ${glitch} 3s infinite;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const CTAButton = styled(Link)`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: #000000;
  background: #00ff00;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 1s ease-out 1s both;

  &:hover {
    background: #00cc00;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 255, 0, 0.3);
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

export const FeaturesSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 4rem 2rem;
  background: rgba(0, 255, 0, 0.05);
`;

export const FeatureCard = styled.div`
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid #00ff00;
  border-radius: 20px;
  padding: 2rem;
  margin: 1rem;
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 255, 0, 0.2);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #00ff00;
  }

  p {
    color: #00cc00;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

export const ProjectsShowcase = styled.section`
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #00ff00;
    text-shadow: 0 0 10px #00ff00;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

export const ProjectCard = styled.div`
  display: inline-block;
  width: 300px;
  margin: 1rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid #00ff00;
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 255, 0, 0.2);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    font-size: 1.2rem;
    margin: 1rem 0;
    color: #00ff00;
  }

  p {
    padding: 0 1rem 1rem;
    color: #00cc00;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

export const TestimonialSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: rgba(0, 255, 0, 0.05);
`;

export const Testimonial = styled.div`
  max-width: 800px;
  margin: 0 auto;

  blockquote {
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 1rem;
    color: #00ff00;
  }

  cite {
    font-size: 1.2rem;
    color: #00cc00;
  }

  @media (max-width: 768px) {
    blockquote {
      font-size: 1.2rem;
    }
    cite {
      font-size: 1rem;
    }
  }
`;

export const ContactCTA = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: rgba(0, 255, 0, 0.05);

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #00ff00;
    text-shadow: 0 0 10px #00ff00;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

export const ParticleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

export const Particle = styled.div`
  position: absolute;
  background-color: #00ff00;
  border-radius: 50%;
  opacity: 0.5;
  pointer-events: none;
  z-index: 1;
`;


const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;


export const HomePageStyles = {
  Container,
  CodeAnimation,
  HeroSection,
  LogoImage,
  Tagline,
  CTAButton,
  FeaturesSection,
  FeatureCard,
  ProjectsShowcase,
  ProjectCard,
  TestimonialSection,
  Testimonial,
  ContactCTA,
  ParticleContainer,
  Particle,
  // Animations
  matrixRain,
  fadeInUp,
  float,
  glitch,
  spin
};