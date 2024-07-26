import React from 'react';
import {
  Container,
  Section,
  Title,
  Subtitle,
  ServiceList,
  ServiceItem,
  Icon,
  CTASection,
  CTAButton,
  TestimonialSection,
  Testimonial
} from '../styles/ServicesPageStyles';
import { FaCode, FaMobileAlt, FaPaintBrush, FaSearch, FaShoppingCart } from 'react-icons/fa';

const ServicesPage = () => (
  <Container>
    <Section>
      <Title>Our Expertise</Title>
      <Subtitle>Elevate your digital presence with our cutting-edge services</Subtitle>
    </Section>
    <ServiceList>
      <ServiceItem>
        <Icon><FaCode /></Icon>
        <h3>Web Development</h3>
        <p>We craft responsive, high-performance websites that captivate and convert.</p>
      </ServiceItem>
      <ServiceItem>
        <Icon><FaMobileAlt /></Icon>
        <h3>Mobile Development</h3>
        <p>Our mobile apps blend intuitive design with powerful functionality.</p>
      </ServiceItem>
      <ServiceItem>
        <Icon><FaPaintBrush /></Icon>
        <h3>UI/UX Design</h3>
        <p>We create visually stunning interfaces that users love to interact with.</p>
      </ServiceItem>
      <ServiceItem>
        <Icon><FaSearch /></Icon>
        <h3>SEO Optimization</h3>
        <p>Boost your visibility and climb the search rankings with our SEO strategies.</p>
      </ServiceItem>
      <ServiceItem>
        <Icon><FaShoppingCart /></Icon>
        <h3>E-commerce Solutions</h3>
        <p>We build scalable e-commerce platforms that drive sales and growth.</p>
      </ServiceItem>
    </ServiceList>
    <TestimonialSection>
      <Testimonial>
        "IVES Design transformed our online presence. Their expertise in web development and UI/UX design resulted in a website that not only looks great but performs exceptionally well."
        - John Doe, CEO of TechCorp
      </Testimonial>
    </TestimonialSection>
    <CTASection>
      <h2>Ready to Elevate Your Digital Presence?</h2>
      <CTAButton to="/contact">Get Started Today</CTAButton>
    </CTASection>
  </Container>
);

export default ServicesPage;