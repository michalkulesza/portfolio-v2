import styled from "styled-components/macro";
import { Colors, Transition } from "../../../styles/snippets";
import { mediaQuery } from "../../../styles/mediaQuery";

type MainProps = {
	altColor?: boolean;
};

type NavProps = {
	altColor?: boolean;
	mobileMenuVisible: boolean;
};

export const Main = styled.div(
	({ altColor }: MainProps) => `
	visibility: visible;
	position: absolute;
	right: 0;
	width: 100%;
	display: flex;
	justify-content: flex-end;

	${mediaQuery("xs")(`
	   visibility: hidden;
	`)};
	
	svg{
		fill: ${altColor && Colors.darkGrey};
		stroke: ${altColor && Colors.darkGrey};
	}`
);

export const Nav = styled.ul(
	({ mobileMenuVisible, altColor }: NavProps) => `
	position: absolute;
	width: 100%;
	background-color: ${altColor ? Colors.greyish : Colors.darkGrey};
	top: calc(100% + 3rem);
	border-radius: 5px;
	overflow: hidden;
	box-shadow: 0 50px 100px -20px rgba(50,50,93,0.25),0 30px 60px -30px rgba(0,0,0,0.3);;
	transform: ${
		mobileMenuVisible ? "perspective(2000px) rotateX(0deg) scale(1)" : "perspective(2000px) rotateX(-20deg) scale(0.96)"
	};
	opacity: ${mobileMenuVisible ? "1" : "0"};
	pointer-events: ${mobileMenuVisible ? "all" : "none"};
	transition: ${Transition(0.2)};

	span{
		color:  ${altColor ? Colors.darkGrey : Colors.lightGrey}
	}
	`
);

export const Item = styled.li`
	width: 100%;
	text-align: center;
	padding: 1em 0;
`;
