import styled from 'styled-components';

export const ProtectedContainer = styled.div`
  text-align: center;
`;

export const ProtectedHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
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
