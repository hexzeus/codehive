import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(135deg, #1f1c2c, #928dab);
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 300;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
