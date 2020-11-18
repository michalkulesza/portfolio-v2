import styled from "styled-components/macro";
import { Colors } from "../../../styles/snippets";
import { respondTo } from "../../../styles/respondTo";

type NavProps = {
	mobileMenuVisible: boolean;
};

export const Main = styled.div`
	visibility: visible;
	position: absolute;
	right: 0;
	width: 100%;
	display: flex;
	justify-content: flex-end;

	${respondTo.xs`
	   visibility: hidden;
   `};
`;

export const Nav = styled.ul(
	({ mobileMenuVisible }: NavProps) => `
	position: absolute;
	width: 100%;
	background-color: ${Colors.darkGrey};
	top: calc(100% + 1em);
	border-radius: 5px;
	overflow: hidden;
	box-shadow: 0 50px 100px -20px rgba(50,50,93,0.25),0 30px 60px -30px rgba(0,0,0,0.3);;
	transform: ${
		mobileMenuVisible ? "perspective(2000px) rotateX(0deg) scale(1)" : "perspective(2000px) rotateX(-20deg) scale(0.96)"
	};
	opacity: ${mobileMenuVisible ? "1" : "0"};
	pointer-events: ${mobileMenuVisible ? "all" : "none"};
	transition: all 0.2s ease-in-out;
	`
);

export const Item = styled.li`
	width: 100%;
	text-align: center;
	padding: 1em 0;
`;
