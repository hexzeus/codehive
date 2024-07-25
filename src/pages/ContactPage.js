import React from 'react';
import { Container, Title, Subtitle, Form, Input, TextArea, Button } from '../styles/ContactPageStyles';

const ContactPage = () => (
  <Container>
    <Title>Contact Us</Title>
    <Subtitle>Get in touch with the IVES HUB team.</Subtitle>
    <Form>
      <Input type="text" placeholder="Name" required />
      <Input type="email" placeholder="Email" required />
      <TextArea placeholder="Message" rows="5" required></TextArea>
      <Button type="submit">Send Message</Button>
    </Form>
  </Container>
);

export default ContactPage;
