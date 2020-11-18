import React from "react";
import { Main, Container } from "./Grid.styled";

type Props = {
	children: any;
	col?: number;
	style?: object;
};

const Grid: React.FC<Props> = ({ col = 4, children, ...restProps }) => {
	return (
		<Main col={col} {...restProps}>
			{children.length > 1 ? children.map((child: JSX.Element) => <Container>{child}</Container>) : children}
		</Main>
	);
};

export default Grid;
