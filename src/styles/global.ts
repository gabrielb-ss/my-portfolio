import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  * {
    border: 0px solid white;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    color: rgba(255, 255, 255, 0.8);
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: #190E2F;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 1rem;
    height: 1rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 .5rem grey; 
    border-radius: 1rem;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: white; 
    border-radius: 1rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: gray; 
}
`
 
