// src/StyledComponents.js
import styled from 'styled-components';

export const AppContainer = styled.div`
  text-align: center;
`;

export const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const AppLink = styled.a`
  color: #61dafb;
`;

export const IdentityButton = styled.div`
  cursor: pointer;
  margin: 1em;
  padding: 0.5em 1em;
  border: 1px solid #61dafb;
  border-radius: 3px;
  color: #61dafb;
  background-color: transparent;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: #61dafb;
    color: white;
  }
`;

export const LogoutButton = styled.button`
  cursor: pointer;
  margin: 1em;
  padding: 0.5em 1em;
  border: 1px solid #61dafb;
  border-radius: 3px;
  color: #61dafb;
  background-color: transparent;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: #61dafb;
    color: white;
  }
`;
