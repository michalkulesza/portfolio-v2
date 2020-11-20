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
	return (
		<Main>
			{data.map(item => (
				<Item key={item.id}>
					<Link
						to={item.url}
						spy
						hashSpy
						activeClass="active"
						smooth={true}
						duration={500}
						isDynamic={true}
						ignoreCancelEvents={false}
					>
						{item.name}
					</Link>
				</Item>
			))}
		</Main>
	);
};

export default Nav;
