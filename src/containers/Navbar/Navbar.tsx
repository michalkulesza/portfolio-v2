import React, { useState } from "react";
import { Main } from "./Navbar.styled";
import { MainTemplate } from "../../templates";
import Nav from "../../components/Navbar/Nav/Nav";
import NavMobile from "../../components/Navbar/NavMobile/NavMobile";
import Logo from "../../components/Navbar/Logo/Logo";

import { menuData } from "../../fixtures/navigation";

type Props = {};

const Navbar: React.FC<Props> = () => {
	const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

	return (
		<Main>
			<MainTemplate vertical="center" horizontal="space-between">
				<Logo text="michalkulesza" />
				<Nav data={menuData} />
				<NavMobile data={menuData} mobileMenuVisible={mobileMenuVisible} setMobileMenuVisible={setMobileMenuVisible} />
			</MainTemplate>
		</Main>
	);
};

export default Navbar;
