import styled from "styled-components/macro";

type Props = {
	vertical: String;
	horizontal: String;
};

export const Main = styled.div(
	({ vertical, horizontal }: Props) => `
	position: relative;
	height: 100%;
	width: 100%;
	max-width: 90%;
	margin: 0 1em;
	display: flex;
	justify-content: ${horizontal};
	align-items: ${vertical};
`
);
