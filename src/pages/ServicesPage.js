import React from 'react';
import {
  Container,
  CodeAnimation,
  Section,
  Title,
  Subtitle,
  ServiceList,
  ServiceItem,
  Icon,
  TestimonialSection,
  Testimonial,
  CTASection,
  CTAButton
} from '../styles/ServicesPageStyles';
import { FaCode, FaMobileAlt, FaPaintBrush, FaSearch, FaShoppingCart, FaRocket } from 'react-icons/fa';

const ServicesPage = () => (
  <Container>
    <CodeAnimation>
      {[...Array(50)].map((_, index) => (
        <span key={index} style={{ left: `${Math.random() * 100}%`, animationDuration: `${Math.random() * 10 + 5}s` }}>
          {Math.random().toString(2).substr(2, 8)}
        </span>
      ))}
    </CodeAnimation>
    <Section>
      <Title>Our Services</Title>
      <Subtitle>Cutting-edge solutions for the digital age</Subtitle>
    </Section>
    <ServiceList>
      <ServiceItem>
        <Icon><FaCode /></Icon>
        <h3>Web Development</h3>
        <p>We create stunning, efficient websites tailored to your unique needs and goals.</p>
      </ServiceItem>
      <ServiceItem>
        <Icon><FaMobileAlt /></Icon>
        <h3>Mobile Development</h3>
        <p>Our mobile apps are optimized for performance, user experience, and cross-platform compatibility.</p>
      </ServiceItem>
      <ServiceItem>
        <Icon><FaPaintBrush /></Icon>
        <h3>UI/UX Design</h3>
        <p>We design intuitive and beautiful user interfaces that enhance user engagement and satisfaction.</p>
      </ServiceItem>
      <ServiceItem>
        <Icon><FaSearch /></Icon>
        <h3>SEO Optimization</h3>
        <p>Our data-driven SEO strategies help your website rank higher and attract quality traffic.</p>
      </ServiceItem>
      <ServiceItem>
        <Icon><FaShoppingCart /></Icon>
        <h3>E-commerce Solutions</h3>
        <p>We build robust e-commerce platforms that drive sales, improve customer experience, and scale with your business.</p>
      </ServiceItem>
      <ServiceItem>
        <Icon><FaRocket /></Icon>
        <h3>Digital Strategy</h3>
        <p>We help you navigate the digital landscape with tailored strategies for growth and innovation.</p>
      </ServiceItem>
    </ServiceList>
    <TestimonialSection>
      <Testimonial>
        "IVES Design's services have transformed our digital presence. Their expertise in web development and UI/UX design is unparalleled. They didn't just meet our expectations; they exceeded them in every way."
        - Jane Doe, CEO of TechCorp
      </Testimonial>
    </TestimonialSection>
    <CTASection>
      <h2>Ready to Elevate Your Digital Presence?</h2>
      <CTAButton to="/contact">Initiate Your Project</CTAButton>
    </CTASection>
  </Container>
);

export default ServicesPage;