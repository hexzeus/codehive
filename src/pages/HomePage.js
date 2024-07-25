import React from 'react';
import { Container, Services, Service, Features, Feature, Testimonials, Testimonial, CallToAction, Button } from '../styles/HomePageStyles';

const HomePage = () => {
  return (
    <Container>
      <Services>
        <Service>
          <h3>Web Development</h3>
          <p>We create stunning and efficient websites tailored to your needs.</p>
        </Service>
        <Service>
          <h3>Mobile Development</h3>
          <p>Our mobile apps are optimized for performance and user experience.</p>
        </Service>
        <Service>
          <h3>UI/UX Design</h3>
          <p>We design intuitive and beautiful user interfaces.</p>
        </Service>
      </Services>
      <Features>
        <Feature>
          <h3>High Performance</h3>
          <p>Our products are built with performance in mind.</p>
        </Feature>
        <Feature>
          <h3>Scalability</h3>
          <p>We ensure your product can grow with your business.</p>
        </Feature>
        <Feature>
          <h3>Security</h3>
          <p>We prioritize security to protect your data and users.</p>
        </Feature>
      </Features>
      <Testimonials>
        <Testimonial>
          <p>"IVES HUB transformed our online presence. Our traffic has increased and our users love the new site!"</p>
          <h4>- Satisfied Client</h4>
        </Testimonial>
        <Testimonial>
          <p>"The mobile app developed by IVES HUB is fast and user-friendly. Our customers can't stop raving about it."</p>
          <h4>- Happy Customer</h4>
        </Testimonial>
      </Testimonials>
      <CallToAction>
        <h3>Ready to take your project to the next level?</h3>
        <Button>Contact Us</Button>
      </CallToAction>
    </Container>
  );
};

export default HomePage;
