import React, { useEffect, useRef } from 'react';
import {
  Container,
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
  ContactCTA
} from '../styles/HomePageStyles';
import logo from '../logo.png';

const HomePage = () => {
  const heroRef = useRef(null);

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

  return (
    <Container>
      <HeroSection ref={heroRef}>
        <LogoImage src={logo} alt="IVES Design Logo" />
        <Tagline>Crafting Digital Experiences That Inspire</Tagline>
        <CTAButton to="/contact">Start Your Project</CTAButton>
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
          <h3>Project Name</h3>
          <p>Brief description of the project and its impact.</p>
        </ProjectCard>
        <ProjectCard>
          <img src="/path/to/project2.jpg" alt="Project 2" />
          <h3>Project Name</h3>
          <p>Brief description of the project and its impact.</p>
        </ProjectCard>
        <ProjectCard>
          <img src="/path/to/project3.jpg" alt="Project 3" />
          <h3>Project Name</h3>
          <p>Brief description of the project and its impact.</p>
        </ProjectCard>
      </ProjectsShowcase>

      <TestimonialSection>
        <Testimonial>
          <blockquote>"IVES Design transformed our online presence. Their work exceeded all expectations."</blockquote>
          - Jane Doe, CEO of TechCorp
        </Testimonial>
      </TestimonialSection>

      <ContactCTA>
        <h2>Ready to Elevate Your Digital Presence?</h2>
        <CTAButton to="/contact">Let's Create Something Amazing</CTAButton>
      </ContactCTA>
    </Container>
  );
};

export default HomePage;