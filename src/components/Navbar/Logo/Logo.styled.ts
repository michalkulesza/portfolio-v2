import styled from "styled-components/macro";
import { Colors } from "../../../styles/snippets";

type MainProps = {
	dark?: boolean;
};

export const Main = styled.div(
	({ dark }: MainProps) => `
	font-family: "Titillium Web", sans-serif;
	font-size: 1.3em;
	color: ${dark ? Colors.darkGrey : Colors.white};
	padding: 0.5em;
	margin-left: -0.5em;
	margin-bottom: 4px;
`
);
