import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${({ theme }) => theme.mainColor};
    overflow-x: hidden;
    margin: 0;
    color: ${( {theme }) => theme.textcolormain};
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.fontColor};
  }
  
  body {
    background: ${({ theme }) => theme.primaryLightBlue};
  }
`

export default GlobalStyle;