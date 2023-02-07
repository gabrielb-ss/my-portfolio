import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  * {
    border: 0px solid black;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: rgba(255, 255, 255, 0.8);
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: #190E2F;
  }
`
