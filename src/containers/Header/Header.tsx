import React from "react";
import { Main, Content } from "./Header.styled";
import { Button, VideoBg } from "../../components";
import { MainTemplate } from "../../templates";

const HeaderContainer: React.FC = () => {
	return (
		<Main>
			<Content>
				<MainTemplate horizontal="center" direction="column">
					<h1 style={{ fontSize: "5em", margin: "0px" }}>Front-end oriented</h1>
					<h1 style={{ fontSize: "5em", margin: "0px", marginBottom: "0.2em" }}>Web Developer.</h1>
					<Button large>What do I do</Button>
				</MainTemplate>
			</Content>
			<VideoBg />
		</Main>
	);
};

export default HeaderContainer;
