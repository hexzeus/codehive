import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
`;

export const LoginHeader = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

export const LoginLogo = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 1rem;
`;

export const IdentityButton = styled.div`
  cursor: pointer;
  margin: 0.5em;
  padding: 0.75em 1.5em;
  border: 1px solid #007bff;
  border-radius: 3px;
  color: #fff;
  background-color: #007bff;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;
