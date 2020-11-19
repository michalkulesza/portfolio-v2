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
	url?: string;
	style?: object;
	children?: any;
};

const Button: React.FC<Props> = ({ url, children, ...restProps }) => {
	return url ? (
		<a href={url} target="_blank" rel="noreferrer" style={{ display: "flex", flex: 1 }}>
			<Main {...restProps}>{children}</Main>
		</a>
	) : (
		<Main {...restProps}>{children}</Main>
	);
};

export default Button;
