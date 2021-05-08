import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;800&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: "Open Sans", sans-serif;
  }

  #root {
    height: 100%;
  }

  blockquote {
    margin: 16px 0;
    padding: 8px 32px;
    border-left-style: solid;
    border-left-width: 2px;
    border-color: #d7d7d7
  }
`;

export default GlobalStyle;
