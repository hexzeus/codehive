import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #0b0b0b; /* Ultra dark background */
    color: #e0e0e0; /* Light text color */
    margin: 0;
    padding: 0;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 700;
    color: #ffffff; /* White text for contrast */
  }

  a {
    text-decoration: none;
    color: #1e90ff; /* Electric blue for links */
  }

  .container {
    padding: 2rem;
  }

  @media (max-width: 768px) {
    body {
      padding: 0;
    }
  }

  #root {
    padding-top: 4rem; /* Adjust this value to match the height of your navbar */
  }
`;

export default GlobalStyles;
