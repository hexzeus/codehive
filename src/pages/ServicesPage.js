import React from 'react';
import { Container, Section, Title, Subtitle, ServiceList, ServiceItem } from '../styles/ServicesPageStyles';

const ServicesPage = () => (
  <Container>
    <Section>
      <Title>Our Services</Title>
      <Subtitle>Discover the services we offer.</Subtitle>
    </Section>
    <ServiceList>
      <ServiceItem>
        <h3>Web Development</h3>
        <p>We create stunning and efficient websites tailored to your needs.</p>
      </ServiceItem>
      <ServiceItem>
        <h3>Mobile Development</h3>
        <p>Our mobile apps are optimized for performance and user experience.</p>
      </ServiceItem>
      <ServiceItem>
        <h3>UI/UX Design</h3>
        <p>We design intuitive and beautiful user interfaces.</p>
      </ServiceItem>
      <ServiceItem>
        <h3>SEO Optimization</h3>
        <p>Our SEO strategies help your website rank higher in search results.</p>
      </ServiceItem>
      <ServiceItem>
        <h3>E-commerce Solutions</h3>
        <p>We build robust e-commerce platforms that drive sales and customer engagement.</p>
      </ServiceItem>
    </ServiceList>
  </Container>
);

export default ServicesPage;
