import React from "react";
import { Main } from "./Button.styled";

type Props = {
	large?: boolean;
	small?: boolean;
	children?: any;
	style?: object;
};

const Button: React.FC<Props> = ({ large, small, children, ...restProps }) => {
	return (
		<Main large={large} small={small} {...restProps}>
			{children}
		</Main>
	);
};

export default Button;
