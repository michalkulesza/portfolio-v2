import React from "react";
import { Main } from "./Button.styled";

type Props = {
	large?: boolean;
	children?: any;
};

const Button: React.FC<Props> = ({ large, children, ...restProps }) => {
	return (
		<Main large={large} {...restProps}>
			{children}
		</Main>
	);
};

export default Button;
