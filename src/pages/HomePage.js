import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 6rem 2rem;
  text-align: center;
  background-color: #f4f4f9; /* Light background color */
  color: #1a1a1a; /* Dark text color for higher contrast */
`;

const HomePage = () => (
  <Container>
    <h1>Welcome to CodeHive</h1>
    <p>Your go-to solution for modern web development.</p>
  </Container>
);

export default HomePage;