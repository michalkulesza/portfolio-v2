import React from "react";
import { Main, Content } from "./Header.styled";
import { VideoBg } from "../../components";
import { MainTemplate } from "../../templates";

const HeaderContainer: React.FC = () => {
	return (
		<Main>
			<Content>
				<MainTemplate horizontal="center" direction="column">
					<h1 style={{ fontSize: "5em", margin: "0px" }}>Front-end oriented</h1>
					<h1 style={{ fontSize: "5em", margin: "0px" }}>Web Developer.</h1>
				</MainTemplate>
			</Content>
			<VideoBg />
		</Main>
	);
};

export default HeaderContainer;
