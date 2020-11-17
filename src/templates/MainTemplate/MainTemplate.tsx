import React from "react";
import { Main } from "./MainTemplate.styled";

type Props = {
	vertical?: String;
	horizontal?: String;
	children?: any;
};

const MainTemplate: React.FC<Props> = ({ vertical = "flex-start", horizontal = "flex-start", children }) => {
	return (
		<Main vertical={vertical} horizontal={horizontal}>
			{children}
		</Main>
	);
};

export default MainTemplate;
