import { createGlobalStyle } from "styled-components";

import gitBackground from "../assets/gitbg.svg";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  
  }

  body {
    background: #E5E5E5 url(${gitBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
    
  }

  body, input, button {
    font: 16px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 42px 20px;
  }
`;
