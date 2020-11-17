import React from "react";
import { Main, Item } from "./Nav.styled";

import { menuData } from "../../../fixtures/navigation";

type Props = {};

const Nav: React.FC<Props> = () => {
	const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => e.preventDefault();

	return (
		<Main>
			{menuData.map(item => (
				<Item key={item.id}>
					<a href={item.url} onClick={e => handleItemClick(e)}>
						{item.name}
					</a>
				</Item>
			))}
		</Main>
	);
};

export default Nav;
