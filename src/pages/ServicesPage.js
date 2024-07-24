import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 6rem 2rem;
  text-align: center;
  background-color: #f4f4f9; /* Light background color */
  color: #1a1a1a; /* Dark text color for higher contrast */
`;

const ServicesPage = () => (
  <Container>
    <h1>Our Services</h1>
    <p>Discover the services we offer.</p>
  </Container>
);

export default ServicesPage;