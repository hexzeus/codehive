import styled from 'styled-components';
import logo from '../logo.png';

export const Container = styled.div`
  padding: 6rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #151515 0%, #0b0b0b 100%);
  color: #e0e0e0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative; /* Ensure positioning context for the background image */

  &::before {
    content: "";
    background: url(${logo}) no-repeat center center;
    background-size: 80%; /* Adjust size as needed */
    opacity: 0.05; /* Adjust opacity to make it ghosted */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #1e90ff; /* Electric blue for headers */
    position: relative; /* Ensure proper stacking context */
    z-index: 1; /* Ensure content is above the background image */
  }

  p {
    font-size: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
    color: #b3b3b3;
    position: relative; /* Ensure proper stacking context */
    z-index: 1; /* Ensure content is above the background image */
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
