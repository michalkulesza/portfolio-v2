import styled from "styled-components/macro";

type mainProps = {
	col: number;
	row: number;
};

export const Main = styled.div(
	({ col, row }: mainProps) => `
	display: grid;
	grid-template-columns: repeat(${col}, 1fr);
	grid-template-rows: repeat(${row}, 1fr);
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
`;
