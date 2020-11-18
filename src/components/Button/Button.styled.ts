import styled from "styled-components/macro";
import { Colors } from "../../styles/snippets";

type MainProps = {
	large?: boolean;
};

export const Main = styled.div(
	({ large }: MainProps) => `
   position: relative;
	padding: ${large ? "1em 2.5em" : "0.8em 1.5em"};
   border: ${large ? "2px" : "1px"} solid ${Colors.white};
   border-radius: 30px;
   cursor: pointer;
   font-size: ${large ? "1.2em" : "1em"};
   transition: all 0.05s ease-in-out;
   overflow: hidden;
   
   &::after{
      content:"";
      position: absolute;
      top: 100%;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: ${Colors.white};
      z-index: -1;
      transition: all 0.1s ease-in-out;
   }
   
   &:hover{
      color: ${Colors.darkGrey};

      &::after{
         content:"";
         position: absolute;
         top: 0%;
         left: 0;
         height: 100%;
         width: 100%;
         background-color: ${Colors.white};
         z-index: -1;
         transition: all 0.1s ease-in-out;
      }
   }
   
   
`
);
