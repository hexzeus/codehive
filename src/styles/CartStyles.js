import styled, { keyframes } from 'styled-components';

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
  background-color: #000;
  color: #00ff00;
  min-height: 100vh;
  padding: 2rem;
  font-family: 'Courier New', monospace;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px #00ff00;
`;

export const CartItem = styled.div`
  background-color: rgba(0, 50, 0, 0.5);
  border: 1px solid #00ff00;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-out;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ItemDetails = styled.div`
  flex: 1;
`;

export const ItemName = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
`;

export const ItemPrice = styled.p`
  margin: 0;
  font-size: 1rem;
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

  &:hover {
    background-color: #00ff00;
    color: #000;
  }
`;

export const Quantity = styled.span`
  margin: 0 0.5rem;
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ff0000;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #ff3333;
    text-shadow: 0 0 10px #ff0000;
  }
`;

export const Total = styled.p`
  font-size: 1.5rem;
  text-align: right;
  margin-top: 2rem;
`;

export const EmptyCart = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 3rem;
`;

export const ActionButton = styled.button`
  background-color: #00ff00;
  color: #000;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  margin: 2rem auto 0;
  animation: ${glowAnimation} 1.5s infinite;

  &:hover {
    background-color: #00cc00;
    box-shadow: 0 0 15px #00ff00;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;