import styled from "styled-components/macro";
import { mediaQuery } from "../../styles/mediaQuery";

export const Main = styled.h1`
	font-size: 10vw;
	margin: 0 0 0.2rem 0;
	white-space: pre-line;

	${mediaQuery("sm")(`
		font-size: 5rem;
	`)}
`;
