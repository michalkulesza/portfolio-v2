import React from "react";
import { Main } from "./Logo.styled";

type Props = {
	text: string;
	href?: string;
};

const Logo: React.FC<Props> = ({ text, href = "/" }) => {
	return (
		<a href={href}>
			<Main>{text}</Main>
		</a>
	);
};

export default Logo;
