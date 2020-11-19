import styled from "styled-components/macro";
import { Colors, Shadow, Transition } from "../../styles/snippets";

type MainProps = {
	large?: boolean;
	small?: boolean;
	grow?: boolean;
	noShadow?: boolean;
	scaleOnHover?: boolean;
	color?: "purple";
	textColor?: "light";
};

export const Main = styled.div(
	({ large, small, grow, noShadow, scaleOnHover, color, textColor }: MainProps) => `
   display:flex;
   justify-content: center;
   align-items: center;
   position: relative;
	padding: ${large ? "1rem 2.5rem" : small ? "0.8rem 0" : "0.8rem 1.5rem"};
   background-color: ${color === "purple" ? Colors.purple : Colors.greyish};
   width: fit-content;
   color: ${textColor === "light" ? Colors.white : Colors.grey};
   border-radius: 3px;
   cursor: pointer;
   font-size: ${large ? "1.2rem" : small ? "0.9rem" : "1rem"};
   overflow: hidden;
   box-shadow: ${noShadow ? "" : Shadow.small};
   transition: ${Transition(0.3, "filter")}, ${Transition(0.15, "transform")};
   ${grow && "flex: 1;"}
   white-space: no-wrap;
   
   &:hover{
      color: ${textColor === "light" ? Colors.lightGrey : Colors.darkGrey};
      filter: saturate(4);
      ${scaleOnHover && "transform: scale(0.95);"}
   }
   
   svg{
      transform: scale(1.2);
      margin-left: 0.2rem;
   }

   
`
);
