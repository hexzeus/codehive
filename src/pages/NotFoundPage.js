// src/pages/NotFoundPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  color: #3498db;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const NotFoundPage = () => (
    <NotFoundWrapper>
        <Title>404</Title>
        <Message>Oops! The page you're looking for doesn't exist.</Message>
        <StyledLink to="/home">Go back to Home</StyledLink>
    </NotFoundWrapper>
);

export default NotFoundPage;