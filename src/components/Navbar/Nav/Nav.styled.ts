import styled from "styled-components/macro";
import { Colors } from "../../../styles/colors";

export const Main = styled.ul`
	display: flex;
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
