import React, { useEffect, useState } from "react";
import useScrollPosition from "@react-hook/window-scroll";
import { Main } from "./Navbar.styled";
import { MainTemplate } from "../../templates";
import Nav from "../../components/Navbar/Nav/Nav";
import NavMobile from "../../components/Navbar/NavMobile/NavMobile";
import Logo from "../../components/Navbar/Logo/Logo";

import { menuData } from "../../fixtures/navigation";

type Props = {};

const Navbar: React.FC<Props> = () => {
	const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
	const [navVisible, setNavVisible] = useState(false);
	const [prevScrolledValue, setPrevScrolledValue] = useState(0);
	const scrolled = useScrollPosition();

	useEffect(() => {
		if (prevScrolledValue > scrolled) setNavVisible(true);
		if (navVisible && scrolled > prevScrolledValue) setNavVisible(false);
		setPrevScrolledValue(scrolled);
	}, [prevScrolledValue, scrolled, navVisible]);

	useEffect(() => {
		scrolled >= 100 && setMobileMenuVisible(false);
	}, [scrolled]);

	return (
		<Main visible={navVisible} scrolled={scrolled}>
			<MainTemplate vertical="center" horizontal="space-between">
				<Logo dark={navVisible && scrolled >= 100} text="michalkulesza" />
				<Nav dark={navVisible && scrolled >= 100} data={menuData} />
				<NavMobile
					altColor={navVisible && scrolled >= 100}
					data={menuData}
					mobileMenuVisible={mobileMenuVisible}
					setMobileMenuVisible={setMobileMenuVisible}
				/>
			</MainTemplate>
		</Main>
	);
};

export default Navbar;
