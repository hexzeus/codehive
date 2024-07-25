import styled from 'styled-components';

export const Container = styled.div`
  padding: 6rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #121212 100%);
  color: #e0e0e0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #61dafb;
  }

  p {
    font-size: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
    color: #bbbbbb;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
