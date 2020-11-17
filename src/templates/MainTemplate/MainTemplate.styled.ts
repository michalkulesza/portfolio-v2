import styled from "styled-components/macro";

type Props = {
	vertical: String;
	horizontal: String;
};

export const Main = styled.div(
	({ vertical, horizontal }: Props) => `
	height: 100%;
	width: 100%;
	max-width: 1190px;
	margin: 0 1em;
	display: flex;
	justify-content: ${horizontal};
	align-items: ${vertical};
`
);
