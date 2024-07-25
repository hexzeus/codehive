import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html {
    font-family: 'Roboto', sans-serif;
    background-color: #0b0b0b;
    color: #e0e0e0;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    height: 100%;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 700;
    color: #ffffff;
  }

  a {
    text-decoration: none;
    color: #1e90ff;
  }

  .container {
    padding: 2rem;
  }

  @media (max-width: 768px) {
    body {
      padding: 0;
    }
  }
`;

export default GlobalStyles;
