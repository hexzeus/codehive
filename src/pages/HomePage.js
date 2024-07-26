// HomePage.js
import React, { useEffect, useRef, useState } from 'react';
import {
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
  Particle
} from '../styles/HomePageStyles';
import logo from '../logo.png';

const generateBinary = () => {
  return Array(1000).fill().map(() => Math.random() > 0.5 ? '1' : '0').join('');
};

const HomePage = () => {
  const heroRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setParticles(
        Array(50).fill().map(() => ({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2
        }))
      );
    }
  }, []);

  return (
    <Container ref={containerRef}>
      <CodeAnimation>
        <div>
          {[...Array(50)].map((_, index) => (
            <span key={index}>{generateBinary()}</span>
          ))}
        </div>
      </CodeAnimation>
      <HeroSection ref={heroRef}>
        <LogoImage src={logo} alt="IVES HUB Logo" />
        <Tagline>Crafting Digital Experiences That Inspire</Tagline>
        <CTAButton to="/contact">Initiate Project</CTAButton>
      </HeroSection>
      <FeaturesSection>
        <FeatureCard>
          <h3>Innovative Design</h3>
          <p>Pushing boundaries with cutting-edge aesthetics</p>
        </FeatureCard>
        <FeatureCard>
          <h3>Robust Development</h3>
          <p>Building scalable solutions for the modern web</p>
        </FeatureCard>
        <FeatureCard>
          <h3>User-Centric Approach</h3>
          <p>Creating intuitive experiences that delight users</p>
        </FeatureCard>
      </FeaturesSection>
      <ProjectsShowcase>
        <h2>Featured Projects</h2>
        <ProjectCard>
          <img src="/path/to/project1.jpg" alt="Project 1" />
          <h3>Project Alpha</h3>
          <p>Revolutionizing user interfaces with AI-driven design.</p>
        </ProjectCard>
        <ProjectCard>
          <img src="/path/to/project2.jpg" alt="Project 2" />
          <h3>Project Beta</h3>
          <p>Blockchain-based solution for secure data management.</p>
        </ProjectCard>
        <ProjectCard>
          <img src="/path/to/project3.jpg" alt="Project 3" />
          <h3>Project Gamma</h3>
          <p>IoT platform for smart city infrastructure optimization.</p>
        </ProjectCard>
      </ProjectsShowcase>
      <TestimonialSection>
        <Testimonial>
          <blockquote>"IVES Design's work transcends conventional web development. They've propelled our digital presence into the future."</blockquote>
          - Dr. Jane Smith, CTO of FutureTech Industries
        </Testimonial>
      </TestimonialSection>
      <ContactCTA>
        <h2>Ready to Revolutionize Your Digital Presence?</h2>
        <CTAButton to="/contact">Initiate Collaboration</CTAButton>
      </ContactCTA>
      <ParticleContainer>
        {particles.map((particle, index) => (
          <Particle
            key={index}
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
          />
        ))}
      </ParticleContainer>
    </Container>
  );
};

export default HomePage;