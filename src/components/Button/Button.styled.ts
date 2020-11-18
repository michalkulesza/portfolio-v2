import styled from "styled-components/macro";
import { Colors, Shadow } from "../../styles/snippets";

type MainProps = {
	large?: boolean;
	small?: boolean;
};

export const Main = styled.div(
	({ large, small }: MainProps) => `
   position: relative;
	padding: ${large ? "1rem 2.5rem" : small ? "0.5rem 1rem" : "0.8rem 1.5rem"};
   // border: ${large ? "2px" : "1px"} solid ${Colors.white};
   background-color: ${Colors.lightGrey};
   width: fit-content;
   color: ${Colors.grey};
   border-radius: 3px;
   cursor: pointer;
   font-size: ${large ? "1.2rem" : "1rem"};
   transition: all 0.05s ease-in-out;
   overflow: hidden;
   box-shadow: ${Shadow.small};
   
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
