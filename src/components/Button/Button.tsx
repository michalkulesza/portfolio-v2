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
	newTab?: boolean;
	url?: string;
	style?: object;
	children?: any;
};

const Button: React.FC<Props> = ({ newTab, grow, url, children, ...restProps }) => {
	return url ? (
		<a href={url} target={newTab ? "_blank" : ""} rel="noreferrer" style={grow ? { display: "flex", flexGrow: 1 } : {}}>
			<Main grow={grow} {...restProps}>
				{children}
			</Main>
		</a>
	) : (
		<Main grow={grow} {...restProps}>
			{children}
		</Main>
	);
};

export default Button;
