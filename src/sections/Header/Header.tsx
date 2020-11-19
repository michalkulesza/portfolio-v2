import React from "react";
import { Main, Content } from "./Header.styled";
import { Button, VideoBg } from "../../components";
import { MainTemplate } from "../../templates";

import video from "../../res/vid/backgroundVideo.webm";

const HeaderContainer: React.FC = () => {
	return (
		<Main>
			<Content>
				<MainTemplate horizontal="center" direction="column">
					<h1 style={{ fontSize: "5em", margin: "0px" }}>Hi, my name is Michal.</h1>
					<h1 style={{ fontSize: "5em", margin: "0px", marginBottom: "0.2em" }}>
						Web developer with a Front-end focus.
					</h1>
					<Button color="purple" textColor="light" scaleOnHover large>
						What do I do
					</Button>
				</MainTemplate>
			</Content>
			<VideoBg video={video} />
		</Main>
	);
};

export default HeaderContainer;
