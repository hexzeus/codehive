import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f9;
    color: #333;
    margin: 0;
    padding: 0;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .container {
    padding: 2rem;
  }

  @media (max-width: 768px) {
    body {
      padding: 0 1rem;
    }
  }
`;

export default GlobalStyles;
