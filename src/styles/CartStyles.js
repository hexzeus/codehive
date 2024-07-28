import styled, { keyframes } from 'styled-components';

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

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px #00ff00; }
  50% { box-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00; }
  100% { box-shadow: 0 0 5px #00ff00; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  background: #000000;
  color: #00ff00;
  min-height: 100vh;
  padding: 4rem 2rem;
  font-family: 'Orbitron', sans-serif;
  overflow-x: hidden;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px #00ff00;
  animation: ${glitch} 3s infinite;
`;

export const CartItem = styled.div`
  background-color: rgba(0, 255, 0, 0.1);
  border: 1px solid #00ff00;
  border-radius: 20px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-out;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 255, 0, 0.2);
  }
`;

export const ItemDetails = styled.div`
  flex: 1;
`;

export const ItemName = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: #00ff00;
`;

export const ItemPrice = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #00cc00;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const QuantityButton = styled.button`
  background-color: transparent;
  border: 1px solid #00ff00;
  color: #00ff00;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 50%;

  &:hover {
    background-color: #00ff00;
    color: #000;
    box-shadow: 0 0 10px #00ff00;
  }
`;

export const Quantity = styled.span`
  margin: 0 0.5rem;
  color: #00ff00;
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ff0000;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;

  &:hover {
    color: #ff3333;
    text-shadow: 0 0 10px #ff0000;
  }
`;

export const Total = styled.p`
  font-size: 1.5rem;
  text-align: right;
  margin-top: 2rem;
  color: #00ff00;
  text-shadow: 0 0 5px #00ff00;
`;

export const EmptyCart = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 3rem;
  color: #00ff00;
  text-shadow: 0 0 5px #00ff00;
`;

export const ActionButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: #000000;
  background: #00ff00;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  margin: 2rem auto 0;
  animation: ${glowAnimation} 1.5s infinite;
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: #00cc00;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 255, 0, 0.3);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;