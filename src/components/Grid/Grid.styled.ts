import styled from "styled-components/macro";
import { mediaQuery } from "../../styles/mediaQuery";

type mainProps = {
	col: number;
};

export const Main = styled.div(
	({ col }: mainProps) => `
	display: grid;
	grid-template-columns: repeat(${Math.floor(col / 2)}, 1fr);
	height: 100%;
	width: 100%;
	
	${mediaQuery("sm")(`
	grid-template-columns: repeat(${col}, 1fr);
`)}

`
);

export const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem 1rem;
`;
