import React from "react";
import { Main } from "./MainTemplate.styled";

type Props = {
	vertical?: string;
	horizontal?: string;
	direction?: string;
	children?: any;
};

const MainTemplate: React.FC<Props> = ({
	vertical = "flex-start",
	horizontal = "flex-start",
	direction = "initial",
	children,
}) => {
	return (
		<Main vertical={vertical} horizontal={horizontal} direction={direction}>
			{children}
		</Main>
	);
};

export default MainTemplate;
