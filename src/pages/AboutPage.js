import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const AboutPage = () => (
    <Container>
        <h1>About Us</h1>
        <p>Learn more about CodeHive and our mission.</p>
    </Container>
);

export default AboutPage;