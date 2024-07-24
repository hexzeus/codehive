import styled from 'styled-components';

export const ProtectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const ProtectedHeader = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

export const LogoutButton = styled.button`
  cursor: pointer;
  margin: 1em;
  padding: 0.75em 1.5em;
  border: 1px solid #dc3545;
  border-radius: 3px;
  color: #fff;
  background-color: #dc3545;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: #c82333;
  }
`;
