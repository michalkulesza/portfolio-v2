import React from "react";
import { Main, Content } from "./Header.styled";
import { Button, Title, LargeTitle, VideoBg } from "../../components";
import { MainTemplate } from "../../templates";

import video from "../../res/vid/backgroundVideo.webm";
import { Colors } from "../../styles/snippets";
import { headerData } from "../../fixtures/header";

const HeaderContainer: React.FC = () => {
	return (
		<Main>
			<Content>
				<MainTemplate horizontal="center" direction="column">
					<LargeTitle>{headerData.mainText}</LargeTitle>
					<Title style={{ textAlign: "left", color: Colors.lightGrey, fontSize: "1.5rem", fontWeight: "400" }}>
						{headerData.subText}
					</Title>
					{headerData.buttons.map(button => (
						<Button
							key={button.id}
							url={button.url}
							color="purple"
							textColor="light"
							scaleOnHover
							large
							style={{ marginRight: "1rem" }}
						>
							{button.text}
						</Button>
					))}
				</MainTemplate>
			</Content>
			<VideoBg video={video} />
		</Main>
	);
};

export default HeaderContainer;
