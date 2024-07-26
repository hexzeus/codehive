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
import { FaCode, FaMobileAlt, FaPaintBrush, FaSearch, FaShoppingCart } from 'react-icons/fa';

const ServicesPage = () => (
  <Container>
    <CodeAnimation>
      {[...Array(50)].map((_, index) => (
        <span key={index}>{Math.random().toString(2).substr(2, 8)}</span>
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
        <p>We create stunning and efficient websites tailored to your needs.</p>
      </ServiceItem>
      <ServiceItem>
        <Icon><FaMobileAlt /></Icon>
        <h3>Mobile Development</h3>
        <p>Our mobile apps are optimized for performance and user experience.</p>
      </ServiceItem>
      <ServiceItem>
        <Icon><FaPaintBrush /></Icon>
        <h3>UI/UX Design</h3>
        <p>We design intuitive and beautiful user interfaces.</p>
      </ServiceItem>
      <ServiceItem>
        <Icon><FaSearch /></Icon>
        <h3>SEO Optimization</h3>
        <p>Our SEO strategies help your website rank higher in search results.</p>
      </ServiceItem>
      <ServiceItem>
        <Icon><FaShoppingCart /></Icon>
        <h3>E-commerce Solutions</h3>
        <p>We build robust e-commerce platforms that drive sales and customer engagement.</p>
      </ServiceItem>
    </ServiceList>
    <TestimonialSection>
      <Testimonial>
        "IVES Design's services have transformed our digital presence. Their expertise in web development and UI/UX design is unparalleled."
        - Jane Doe, CEO of TechCorp
      </Testimonial>
    </TestimonialSection>
    <CTASection>
      <h2>Ready to Elevate Your Digital Presence?</h2>
      <CTAButton to="/contact">Initiate Project</CTAButton>
    </CTASection>
  </Container>
);

export default ServicesPage;