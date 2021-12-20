import {createGlobalStyle} from "styled-components";


export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  ul,ol{
    list-style: none;
  }
  html, body,#root{
    width: 100%;
    height: 100%;
  }
`;

//font-family: 'Montserrat', sans-serif;