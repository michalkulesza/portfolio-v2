import React from "react";
import { Main } from "./Title.styled";

type Props = {
	children?: any;
	style?: object;
};

const Title: React.FC<Props> = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

export default Title;
