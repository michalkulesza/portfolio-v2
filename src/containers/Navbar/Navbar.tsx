import React, { useState } from "react";
import { Main } from "./Navbar.styled";
import { MainTemplate } from "../../templates";
import Nav from "../../components/Navbar/Nav/Nav";
import NavMobile from "../../components/Navbar/NavMobile/NavMobile";
import Logo from "../../components/Navbar/Logo/Logo";

type Props = {};

const Navbar: React.FC<Props> = () => {
	const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

	return (
		<Main>
			<MainTemplate vertical="center" horizontal="space-between">
				<Logo text="michalkulesza" />
				<Nav />
				<NavMobile mobileMenuVisible={mobileMenuVisible} setMobileMenuVisible={setMobileMenuVisible} />
			</MainTemplate>
		</Main>
	);
};

export default Navbar;
