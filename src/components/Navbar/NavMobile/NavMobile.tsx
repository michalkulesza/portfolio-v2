import React from "react";
import { Main, Nav, Item } from "./NavMobile.styled";

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

type Props = {
	data: {
		id: number;
		name: string;
		url: string;
	}[];
	mobileMenuVisible: boolean;
	setMobileMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavMobile: React.FC<Props> = ({ data, mobileMenuVisible, setMobileMenuVisible }) => {
	const handleMenuTriggerMouseDown = () => setMobileMenuVisible(!mobileMenuVisible);
	const handleMenuItemClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		setMobileMenuVisible(false);
	};

	return (
		<Main>
			{mobileMenuVisible ? (
				<MdClose onMouseDown={handleMenuTriggerMouseDown} style={{ transform: "scale(1.8)" }} />
			) : (
				<FiMenu onMouseDown={handleMenuTriggerMouseDown} style={{ transform: "scale(1.4)" }} />
			)}
			<Nav mobileMenuVisible={mobileMenuVisible}>
				{data.map(item => (
					<a href={item.url} key={item.id} onClick={e => handleMenuItemClick(e)}>
						<Item>{item.name}</Item>
					</a>
				))}
			</Nav>
		</Main>
	);
};

export default NavMobile;
