import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   html, body {
      font-family: 'Lato', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #FFFFFF;
      color: #fff;
      font-size: 16px;
      }

   ul,li{
      margin: 0;
      padding: 0;
      list-style: none;
   }

   input{
      padding: 0;
      border: 0;
   }

   button{
      cursor: pointer;
      border: none;
      &:focus{
         outline: none;
      }
   }

   *{
      box-sizing: border-box;
      user-select: none;
   }

   a{
      text-decoration: none;
      color: #fff
   }
`;
