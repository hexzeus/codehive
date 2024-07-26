import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
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

export const Container = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  color: #ffffff;
  min-height: 100vh;
  overflow-x: hidden;
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
  width: 300px;
  height: auto;
  animation: ${float} 6s ease-in-out infinite;
`;

export const Tagline = styled.h1`
  font-size: 3rem;
  margin: 2rem 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  animation: ${fadeInUp} 1s ease-out 0.5s both;
`;

export const CTAButton = styled(Link)`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid #ffffff;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 1s ease-out 1s both;

  &:hover {
    background: #ffffff;
    color: #23a6d5;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
`;

export const FeaturesSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

export const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  margin: 1rem;
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const ProjectsShowcase = styled.section`
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

export const ProjectCard = styled.div`
  display: inline-block;
  width: 300px;
  margin: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  p {
    padding: 0 1rem 1rem;
  }
`;

export const TestimonialSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.1);
`;

export const Testimonial = styled.div`
  max-width: 800px;
  margin: 0 auto;

  blockquote {
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 1rem;
  }

  cite {
    font-size: 1.2rem;
  }
`;

export const ContactCTA = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

// Add responsive styles
const media = {
  desktop: '@media(min-width: 1024px)',
  tablet: '@media(min-width: 768px)',
  phone: '@media(min-width: 320px)',
};

Object.keys(media).forEach(key => {
  [Container, HeroSection, LogoImage, Tagline, CTAButton, FeaturesSection, FeatureCard, ProjectsShowcase, ProjectCard, TestimonialSection, Testimonial, ContactCTA].forEach(component => {
    component.styles += `
      ${media[key]} {
        font-size: ${key === 'desktop' ? '100%' : key === 'tablet' ? '90%' : '80%'};
      }
    `;
  });
});