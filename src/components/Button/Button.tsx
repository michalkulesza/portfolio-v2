import React from "react";
import { Main } from "./Button.styled";

type Props = {
	large?: boolean;
	small?: boolean;
	grow?: boolean;
	noShadow?: boolean;
	scaleOnHover?: boolean;
	color?: "purple";
	textColor?: "light";
	mail?: string;
	style?: object;
	children?: any;
};

const Button: React.FC<Props> = ({ mail, children, ...restProps }) => {
	return mail ? (
		<a href={`mailto:${mail}`}>
			<Main {...restProps}>{children}</Main>
		</a>
	) : (
		<Main {...restProps}>{children}</Main>
	);
};

export default Button;
