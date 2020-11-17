import React from "react";
import { Main } from "./Navbar.styled";
import { MainTemplate } from "../../templates";
import Nav from "../../components/Navbar/Nav/Nav";
import NavMobile from "../../components/Navbar/NavMobile/NavMobile";
import Logo from "../../components/Navbar/Logo/Logo";

type Props = {
	logoText: string;
	children?: any;
};

const Navbar: React.FC<Props> = ({ logoText, children, ...restProps }) => {
	return (
		<Main {...restProps}>
			<MainTemplate vertical="center" horizontal="space-between">
				<Logo text={logoText} />
				<Nav />
				<NavMobile />
			</MainTemplate>
		</Main>
	);
};

export default Navbar;
