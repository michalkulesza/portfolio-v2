import styled from "styled-components/macro";

type Props = {
	vertical: string;
	horizontal: string;
	direction: string;
};

export const Main = styled.div(
	({ vertical, horizontal, direction }: Props) => `
	position: relative;
	height: 100%;
	width: 100%;
	max-width: 90%;
	margin: 0 1em;
	display: flex;
	justify-content: ${horizontal};
	align-items: ${vertical};
	flex-direction: ${direction};
	`
);
