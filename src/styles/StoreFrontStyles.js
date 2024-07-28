import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';

const glitch = keyframes`
  0% {
    text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff,
      0.025em 0.05em 0 #fffc00;
  }
  14% {
    text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff,
      0.025em 0.05em 0 #fffc00;
  }
  15% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.025em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
  49% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.025em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
  50% {
    text-shadow: 0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff,
      0 -0.05em 0 #fffc00;
  }
  99% {
    text-shadow: 0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff,
      0 -0.05em 0 #fffc00;
  }
  100% {
    text-shadow: -0.025em 0 0 #00fffc, -0.025em -0.025em 0 #fc00ff,
      -0.025em -0.05em 0 #fffc00;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background: linear-gradient(to bottom, #000000, #1a1a1a);
  min-height: 100vh;
  color: #0f0;
  font-family: 'Orbitron', sans-serif;

  h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2rem;
    text-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
    animation: ${glitch} 3s infinite;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

export const ProductCard = styled.div`
  background: rgba(0, 255, 0, 0.05);
  border: 1px solid #0f0;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 255, 0, 0.2);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-bottom: 1px solid #0f0;
`;

export const ProductInfo = styled.div`
  padding: 1rem;
  position: relative;
`;

export const ProductName = styled.h3`
  font-size: 1.2rem;
  color: #0f0;
  margin: 0.5rem 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const ProductPrice = styled.p`
  font-size: 1.1rem;
  color: #0f0;
  margin: 0.5rem 0;
  font-weight: bold;
`;

export const CTAButton = styled.button`
  background-color: #0f0;
  color: #000;
  border: none;
  padding: 0.7rem 1.2rem;
  font-size: 1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 100%;
  margin-top: 0.5rem;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #00ff00;
    box-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
  }

  ${props => props.$active && css`
    background-color: #00ff00;
    box-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
  `}

  ${props => props.$loading && css`
    pointer-events: none;
    opacity: 0.7;
  `}
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 255, 0, 0.1);
  border-left: 4px solid #0f0;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 1rem;
`;

export const LoadingText = styled.p`
  color: #0f0;
  font-size: 1.2rem;
  text-align: center;
`;

export const ErrorMessage = styled.div`
  color: #ff0000;
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid #ff0000;
  padding: 1rem;
  border-radius: 10px;
  margin: 2rem 0;
  text-align: center;
  font-size: 1.1rem;
`;

export const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;

  ${CTAButton} {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  border-radius: 25px;
  border: 1px solid #0f0;
  background: rgba(0, 255, 0, 0.05);
  color: #0f0;
  margin-bottom: 2rem;
  font-family: 'Orbitron', sans-serif;

  &::placeholder {
    color: rgba(0, 255, 0, 0.5);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  }
`;

export const PlaceholderImage = styled.div`
  width: 100%;
  height: 250px;
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0f0;
  font-size: 14px;
  border: 1px solid #0f0;
  border-radius: 15px;
`;

export const AddedToCartMessage = styled(motion.div)`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #0f0;
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-align: center;
  font-size: 0.9rem;
  font-weight: bold;
  box-shadow: 0 2px 10px rgba(0, 255, 0, 0.3);
  z-index: 10;
  white-space: nowrap;
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const LoadingSpinnerOverlay = styled(LoadingSpinner)`
  position: absolute;
  z-index: 101;
`;