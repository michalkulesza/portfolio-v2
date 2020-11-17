import React from "react";
import { Main } from "./Logo.styled";

type Props = {
	text: string;
	href?: string;
};

const Logo: React.FC<Props> = ({ text, href = "/" }) => {
	const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => e.preventDefault();
	return (
		<a href={href} onClick={e => handleLogoClick(e)}>
			<Main>{text}</Main>
		</a>
	);
};

export default Logo;
