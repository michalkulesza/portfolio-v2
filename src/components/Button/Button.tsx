import React from "react";
import { Main } from "./Button.styled";

type Props = {
	large?: boolean;
	small?: boolean;
	noShadow?: boolean;
	style?: object;
	children?: any;
};

const Button: React.FC<Props> = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

export default Button;
