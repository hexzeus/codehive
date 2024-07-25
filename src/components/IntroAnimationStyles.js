import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: #121212; /* Dark background */
  color: #e0e0e0;
  text-align: center;
  position: relative;
`;

export const CodeAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 18, 18, 0.9); /* Slightly transparent to show the logo */
  overflow: hidden;
  z-index: 1;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    opacity: 0.1;
  }

  span {
    color: #1e90ff;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.5rem;
    animation: ${keyframes`
      0% { transform: translateY(0); }
      100% { transform: translateY(-100vh); }
    `} 10s linear infinite;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  animation: ${fadeIn} 1.5s ease-out forwards;
`;

export const LogoImage = styled.img`
  width: 150px; /* Adjust size as needed */
  height: 150px;
  filter: drop-shadow(0 0 20px #1e90ff); /* More pronounced drop shadow */
  animation: ${fadeIn} 1.5s ease-out forwards;
  transform: translateZ(0); /* Enable GPU rendering for 3D effect */
  perspective: 1000px; /* Add perspective for 3D effect */
  &:hover {
    transform: scale(1.1); /* Slightly enlarge on hover */
    filter: drop-shadow(0 0 30px #1e90ff);
  }
`;

export const PasswordInput = styled.input`
  margin-top: 2rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  text-align: center;
  background-color: #1f1f1f;
  color: #e0e0e0;
  z-index: 2;
  animation: ${fadeIn} 1.5s ease-out forwards;
  -webkit-text-security: disc;
`;
