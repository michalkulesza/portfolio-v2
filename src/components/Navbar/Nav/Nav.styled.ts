import styled from "styled-components/macro";
import { Colors } from "../../../styles/colors";
import { respondTo } from "../../../styles/respondTo";

export const Main = styled.ul`
	display: flex;
	visibility: hidden;
	position: absolute;
	right: 0;

	${respondTo.xs`
		visibility: visible;
	`}
`;

export const Item = styled.li`
	margin-right: 1em;
	padding: 0.5em;
	color: ${Colors.white};
	cursor: pointer;

	&:last-of-type {
		margin-right: -0.5em;
	}
`;
