import { createGlobalStyle } from "styled-components";
import { Colors } from "./snippets";

export const GlobalStyles = createGlobalStyle`
   html, body {
      font-family: 'Lato', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #FFFFFF;
      color: #fff;
      font-size: 16px;
      overscroll-behavior: none;
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
   }

   a{
      text-decoration: none;
      color: #fff
   }

   p{
      color: ${Colors.darkGrey};
      font-size: 1.1rem;
      line-height: 1.7rem;
      white-space: pre-line;
      margin: 0;
   }
`;
