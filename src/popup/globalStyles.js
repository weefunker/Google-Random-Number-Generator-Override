import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: auto;
    max-width: 600px;
    background-color: #0094FF;
  }

  #root {
    background-color: #22C55E !important; /* Use !important to ensure it is applied */
  }

`;
 
export default GlobalStyle;