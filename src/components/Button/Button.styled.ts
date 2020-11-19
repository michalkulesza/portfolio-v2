import styled from "styled-components/macro";
import { Colors, Shadow, Transition } from "../../styles/snippets";

type MainProps = {
	large?: boolean;
	small?: boolean;
	noShadow?: boolean;
};

export const Main = styled.div(
	({ large, small, noShadow }: MainProps) => `
   position: relative;
	padding: ${large ? "1rem 2.5rem" : small ? "0.6rem 1.2rem" : "0.8rem 1.5rem"};
   // border: ${large ? "2px" : "1px"} solid ${Colors.white};
   background-color: ${Colors.lightGrey};
   width: fit-content;
   color: ${Colors.grey};
   border-radius: 3px;
   cursor: pointer;
   font-size: ${large ? "1.2rem" : small ? "0.9rem" : "1rem"};
   overflow: hidden;
   box-shadow: ${noShadow ? "" : Shadow.small};
   transition: ${Transition(0.3)};
   flex: 1;
   text-align: center;
   
   &:hover{
      color: ${Colors.darkGrey};
      filter: saturate(4);

   }
   
   
`
);
