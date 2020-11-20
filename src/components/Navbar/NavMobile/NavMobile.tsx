import React from "react";
import { Main, Nav, Item } from "./NavMobile.styled";

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";

type Props = {
	altColor?: boolean;
	data: {
		id: number;
		name: string;
		url: string;
	}[];
	mobileMenuVisible: boolean;
	setMobileMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavMobile: React.FC<Props> = ({ altColor, data, mobileMenuVisible, setMobileMenuVisible }) => {
	const handleMenuTriggerMouseDown = () => setMobileMenuVisible(!mobileMenuVisible);

	return (
		<Main altColor={altColor}>
			{mobileMenuVisible ? (
				<MdClose onMouseDown={handleMenuTriggerMouseDown} style={{ transform: "scale(1.8)" }} />
			) : (
				<FiMenu onMouseDown={handleMenuTriggerMouseDown} style={{ transform: "scale(1.4)" }} />
			)}
			<Nav altColor={altColor} mobileMenuVisible={mobileMenuVisible}>
				{data.map(item => (
					<Item key={item.id}>
						<Link to={item.url} spy hashSpy smooth={true} duration={500} isDynamic={true} ignoreCancelEvents={true}>
							<span>{item.name}</span>
						</Link>
					</Item>
				))}
			</Nav>
		</Main>
	);
};

export default NavMobile;
