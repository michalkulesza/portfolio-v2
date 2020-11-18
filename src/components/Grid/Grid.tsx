import React from "react";
import { Main, Container } from "./Grid.styled";

type Props = {
	children: any;
	col?: number;
	row?: number;
};

const Grid: React.FC<Props> = ({ col = 2, row = 1, children }) => {
	return (
		<Main col={col} row={row}>
			{children.map((child: JSX.Element) => (
				<Container>{child}</Container>
			))}
		</Main>
	);
};

export default Grid;
