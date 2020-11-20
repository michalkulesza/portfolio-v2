import React from "react";
import { Main } from "./LargeTitle.styled";

type Props = {
	children: any;
	style?: object;
};

const LargeTitle: React.FC<Props> = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

export default LargeTitle;
