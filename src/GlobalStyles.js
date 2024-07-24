// src/GlobalStyles.js
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
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #282c34;
    color: white;
  }

  nav a {
    margin: 0 1rem;
    font-weight: bold;
    color: white;
  }

  nav a:hover {
    color: #61dafb;
  }

  .container {
    padding: 2rem;
  }
`;

export default GlobalStyles;
