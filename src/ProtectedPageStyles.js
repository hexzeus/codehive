import styled from 'styled-components';

export const ProtectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #1f1c2c, #928dab);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

export const ProtectedHeader = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  color: #ffffff;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
  }
`;

export const ProtectedContent = styled.div`
  text-align: center;
  color: #ffffff;
  margin-bottom: 2rem;

  p {
    font-size: 1.1rem;
    margin: 0.5rem 0;
  }
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
