import React, { useState } from 'react';
import {
  Container,
  CodeAnimation,
  Section,
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
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [invalidFields, setInvalidFields] = useState([]);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
    setInvalidFields(invalidFields.filter(field => field !== e.target.name));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newInvalidFields = [];
    if (formState.name.trim() === '') newInvalidFields.push('name');
    if (formState.email.trim() === '' || !formState.email.includes('@')) newInvalidFields.push('email');
    if (formState.message.trim() === '') newInvalidFields.push('message');

    if (newInvalidFields.length > 0) {
      setInvalidFields(newInvalidFields);
      return;
    }

    setStatus('loading');
    // Simulating an API call
    setTimeout(() => {
      if (Math.random() > 0.5) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    }, 2000);
  };

  return (
    <Container>
      <CodeAnimation>
        {[...Array(50)].map((_, index) => (
          <span key={index} style={{ left: `${Math.random() * 100}%`, animationDuration: `${Math.random() * 10 + 5}s` }}>
            {Math.random().toString(2).substr(2, 8)}
          </span>
        ))}
      </CodeAnimation>
      <Section>
        <Title>Initialize Contact</Title>
        <Subtitle>Connect with IVES HUB - Your Gateway to Digital Innovation</Subtitle>
      </Section>
      <Section>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            value={formState.name}
            onChange={handleChange}
            className={invalidFields.includes('name') ? 'invalid' : ''}
          />
          <Input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            value={formState.email}
            onChange={handleChange}
            className={invalidFields.includes('email') ? 'invalid' : ''}
          />
          <TextArea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formState.message}
            onChange={handleChange}
            className={invalidFields.includes('message') ? 'invalid' : ''}
          />
          <Button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? <LoadingSpinner /> : 'Transmit Message'}
          </Button>
        </Form>
        {status === 'success' && <SuccessMessage>Message successfully transmitted!</SuccessMessage>}
        {status === 'error' && <ErrorMessage>Transmission error. Please try again.</ErrorMessage>}
      </Section>
      <Section>
        <ContactInfo>
          <h3>Contact Information</h3>
          <p><FaMapMarkerAlt /> 123 Cyber Street, Digital City, 12345</p>
          <p><FaPhone /> +1 (123) 456-7890</p>
          <p><FaEnvelope /> contact@iveshub.com</p>
        </ContactInfo>
        <SocialLinks>
          <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></SocialIcon>
          <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></SocialIcon>
          <SocialIcon href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></SocialIcon>
        </SocialLinks>
      </Section>
      <MapContainer>
        <iframe
          title="IVES HUB Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1847827911267!2d-73.9859759848615!3d40.748440779328146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1625684879687!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </MapContainer>
    </Container>
  );
};

export default ContactPage;