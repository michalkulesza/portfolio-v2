import React from "react";
import { Main, Content } from "./Header.styled";
import { Button, Title, VideoBg } from "../../components";
import { MainTemplate } from "../../templates";

import video from "../../res/vid/backgroundVideo.webm";
import { Colors } from "../../styles/snippets";

const HeaderContainer: React.FC = () => {
	return (
		<Main>
			<Content>
				<MainTemplate horizontal="center" direction="column">
					<h1 style={{ fontSize: "5em", margin: "0px" }}>Hi, my name is Michal.</h1>
					<h1 style={{ fontSize: "5em", margin: "0px", marginBottom: "0.2em" }}>
						Web developer with a Front-end focus.
					</h1>
					<Title style={{ textAlign: "left", color: Colors.lightGrey, fontSize: "1.5rem", fontWeight: "400" }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vero corporis,
						<br />
						optio facilis nesciunt fuga quaerat. Accusamus quod maiores aliquam!
					</Title>
					<Button color="purple" textColor="light" scaleOnHover large style={{ marginRight: "1rem" }}>
						My works
					</Button>
				</MainTemplate>
			</Content>
			<VideoBg video={video} />
		</Main>
	);
};

export default HeaderContainer;
