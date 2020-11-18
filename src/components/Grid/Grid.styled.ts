import styled from "styled-components/macro";

type mainProps = {
	col: number;
};

export const Main = styled.div(
	({ col }: mainProps) => `
	display: grid;
	grid-template-columns: repeat(${col}, 1fr);
	height: 100%;
	width: 100%;
`
);

export const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
`;
