import React from "react";
import { Main, Item } from "./Nav.styled";

type Props = {
	data: {
		id: number;
		name: string;
		url: string;
	}[];
};

const Nav: React.FC<Props> = ({ data }) => {
	const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => e.preventDefault();

	return (
		<Main>
			{data.map(item => (
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
