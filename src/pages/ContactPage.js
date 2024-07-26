import React, { useState } from 'react';
import {
  Container,
  Title,
  Subtitle,
  Form,
  Input,
  TextArea,
  Button,
  ContactInfo,
  SocialLinks,
  SocialIcon,
  MapContainer,
  SuccessMessage,
  ErrorMessage,
  LoadingSpinner
} from '../styles/ContactPageStyles';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    // Simulating an API call
    setTimeout(() => {
      if (Math.random() > 0.5) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 2000);
  };

  return (
    <Container>
      <Title>Get in Touch</Title>
      <Subtitle>Let's create something amazing together</Subtitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formState.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formState.email}
          onChange={handleChange}
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          value={formState.message}
          onChange={handleChange}
        ></TextArea>
        <Button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? <LoadingSpinner /> : 'Send Message'}
        </Button>
      </Form>
      {status === 'success' && <SuccessMessage>Message sent successfully!</SuccessMessage>}
      {status === 'error' && <ErrorMessage>Oops! Something went wrong. Please try again.</ErrorMessage>}
      <ContactInfo>
        <h3>Contact Information</h3>
        <p>📍 123 Web Dev Street, Digital City, 12345</p>
        <p>📞 +1 (123) 456-7890</p>
        <p>✉️ hello@ivesdesign.com</p>
      </ContactInfo>
      <SocialLinks>
        <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</SocialIcon>
        <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</SocialIcon>
        <SocialIcon href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</SocialIcon>
      </SocialLinks>
      <MapContainer>
        <iframe
          title="IVES Design Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1847827911267!2d-73.9859759848615!3d40.748440779328146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1625684879687!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </MapContainer>
    </Container>
  );
};

export default ContactPage;