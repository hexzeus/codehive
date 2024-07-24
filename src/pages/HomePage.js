// src/pages/HomePage.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const HomePage = () => (
    <Container>
        <h1>Welcome to CodeHive</h1>
        <p>Your go-to solution for modern web development.</p>
    </Container>
);

export default HomePage;
