import React, { useEffect, useRef, useState, useCallback } from 'react';
import { HomePageStyles } from '../styles/HomePageStyles';
import logo from '../logo.png';
import { FaRocket, FaCode, FaUsers } from 'react-icons/fa';

const generateBinary = () => {
  return Array(1000).fill().map(() => Math.random() > 0.5 ? '1' : '0').join('');
};

const HomePage = () => {
  const {
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
    ScrollPrompt,
    Section,
    SectionTitle,
    ProgressBar
  } = HomePageStyles;

  const [scrollProgress, setScrollProgress] = useState(0);
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const totalScroll = docHeight - windowHeight;
    const progress = (scrollPosition / totalScroll) * 100;
    setScrollProgress(progress);

    if (heroRef.current) {
      const opacity = 1 - Math.min(scrollPosition / windowHeight, 1);
      heroRef.current.style.opacity = opacity;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setParticles(
        Array(100).fill().map(() => ({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2
        }))
      );
    }
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => ({
          ...particle,
          x: (particle.x + particle.speedX + containerRef.current.clientWidth) % containerRef.current.clientWidth,
          y: (particle.y + particle.speedY + containerRef.current.clientHeight) % containerRef.current.clientHeight
        }))
      );
      requestAnimationFrame(animateParticles);
    };
    animateParticles();
  }, []);

  return (
    <Container ref={containerRef}>
      <ProgressBar style={{ width: `${scrollProgress}%` }} />
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
        <ScrollPrompt>Scroll to Explore</ScrollPrompt>
      </HeroSection>
      <Section>
        <SectionTitle>Our Expertise</SectionTitle>
        <FeaturesSection>
          <FeatureCard>
            <FaRocket />
            <h3>Innovative Design</h3>
            <p>Pushing boundaries with cutting-edge aesthetics and user experiences that captivate and engage.</p>
          </FeatureCard>
          <FeatureCard>
            <FaCode />
            <h3>Robust Development</h3>
            <p>Building scalable, high-performance solutions that stand the test of time and technological evolution.</p>
          </FeatureCard>
          <FeatureCard>
            <FaUsers />
            <h3>User-Centric Approach</h3>
            <p>Creating intuitive, accessible experiences that delight users and drive business growth.</p>
          </FeatureCard>
        </FeaturesSection>
      </Section>
      <Section>
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectsShowcase>
          <ProjectCard>
            <img src="/path/to/project1.jpg" alt="Project Alpha" />
            <h3>Project Alpha</h3>
            <p>Revolutionizing user interfaces with AI-driven design, creating adaptive and predictive user experiences.</p>
          </ProjectCard>
          <ProjectCard>
            <img src="/path/to/project2.jpg" alt="Project Beta" />
            <h3>Project Beta</h3>
            <p>Blockchain-based solution for secure data management, ensuring transparency and immutability in critical systems.</p>
          </ProjectCard>
          <ProjectCard>
            <img src="/path/to/project3.jpg" alt="Project Gamma" />
            <h3>Project Gamma</h3>
            <p>IoT platform for smart city infrastructure optimization, enhancing urban living through data-driven decision making.</p>
          </ProjectCard>
        </ProjectsShowcase>
      </Section>
      <TestimonialSection>
        <SectionTitle>Client Testimonials</SectionTitle>
        <Testimonial>
          <blockquote>"IVES Design's work transcends conventional web development. They've propelled our digital presence into the future, setting new standards in user engagement and technological innovation."</blockquote>
          - Dr. Jane Smith, CTO of FutureTech Industries
        </Testimonial>
      </TestimonialSection>
      <ContactCTA>
        <h2>Ready to Revolutionize Your Digital Presence?</h2>
        <p>Let's create something extraordinary together.</p>
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