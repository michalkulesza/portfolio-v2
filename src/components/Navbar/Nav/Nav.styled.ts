import styled from "styled-components/macro";
import { Colors } from "../../../styles/snippets";
import { mediaQuery } from "../../../styles/mediaQuery";

type MainProps = {
	dark?: boolean;
};

export const Main = styled.ul(
	({ dark }: MainProps) => `
	display: flex;
	visibility: hidden;
	position: absolute;
	right: 0;

	${mediaQuery("xs")(`
		visibility: visible;
	`)}

	a{
		color: ${dark && Colors.darkGrey}
	}
`
);

export const Item = styled.li`
	margin-right: 1rem;
	padding: 0.5em;
	color: ${Colors.white};
	cursor: pointer;
	font-size: 1.1rem;

	&:last-of-type {
		margin-right: -0.5rem;
	}
	a.active {
		position: relative;
		&:after {
			content: "";
			height: 7px;
			width: 7px;
			position: absolute;
			top: 50%;
			left: -15px;
			border-radius: 50%;
			transform: translateY(-50%);
			background-color: ${Colors.purple};
		}
	}
`;
