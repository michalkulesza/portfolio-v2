import React from "react";
import { Main } from "./Logo.styled";

type Props = {
	dark?: boolean;
	text: string;
	href?: string;
};

const Logo: React.FC<Props> = ({ dark, text, href = "/" }) => {
	const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => e.preventDefault();
	return (
		<a href={href} onClick={e => handleLogoClick(e)}>
			<Main dark={dark}>{text}</Main>
		</a>
	);
};

export default Logo;
