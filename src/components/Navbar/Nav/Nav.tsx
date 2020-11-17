import React from "react";
import { Main, Item } from "./Nav.styled";

type Props = {};

const Nav: React.FC<Props> = () => {
	return (
		<Main>
			<Item>Home</Item>
			<Item>About</Item>
			<Item>Works</Item>
			<Item>Contact</Item>
		</Main>
	);
};

export default Nav;
