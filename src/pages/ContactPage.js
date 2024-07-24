import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 6rem 2rem;
  text-align: center;
  background-color: #f4f4f9; /* Light background color */
  color: #1a1a1a; /* Dark text color for higher contrast */
`;

const ContactPage = () => (
  <Container>
    <h1>Contact Us</h1>
    <p>Get in touch with the CodeHive team.</p>
  </Container>
);

export default ContactPage;