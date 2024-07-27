import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const ProductSection = styled.section`
  padding: 4rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  color: #0f0;
`;

export const ProductCard = styled.div`
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid #0f0;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 255, 0, 0.3);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ProductName = styled.h3`
  font-size: 1.2rem;
  color: #0f0;
  margin: 0.5rem 0;
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
  color: #0f0;
  margin: 0.5rem 0;
`;

export const CTAButton = styled.button`
  background-color: #0f0;
  color: #000;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00c000;
  }
`;

export const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 255, 0, 0.1);
  border-left: 4px solid #0f0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: 2rem auto;
`;

export const ErrorMessage = styled.div`
  color: #ff0000;
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid #ff0000;
  padding: 1rem;
  border-radius: 4px;
  margin: 2rem 0;
  text-align: center;
`;