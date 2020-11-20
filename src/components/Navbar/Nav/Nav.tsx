import React from "react";
import { Main, Item } from "./Nav.styled";
import { Link } from "react-scroll";

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
					<Link
						activeClass="active"
						to="target"
						spy={true}
						smooth={true}
						hashSpy={true}
						offset={50}
						duration={500}
						delay={1000}
						isDynamic={true}
						ignoreCancelEvents={false}
					>
						Your name
					</Link>
					<a href={item.url} onClick={e => handleItemClick(e)}>
						{item.name}
					</a>
				</Item>
			))}
		</Main>
	);
};

export default Nav;
