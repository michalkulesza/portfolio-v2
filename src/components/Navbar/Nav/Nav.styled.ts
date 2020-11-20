import styled from "styled-components/macro";
import { Colors } from "../../../styles/snippets";
import { mediaQuery } from "../../../styles/mediaQuery";

export const Main = styled.ul`
	display: flex;
	visibility: hidden;
	position: absolute;
	right: 0;

	${mediaQuery("xs")(`
		visibility: visible;
	`)}
`;

export const Item = styled.li`
	margin-right: 1rem;
	padding: 0.5em;
	color: ${Colors.white};
	cursor: pointer;
	font-size: 1.2rem;

	&:last-of-type {
		margin-right: -0.5rem;
	}
`;
