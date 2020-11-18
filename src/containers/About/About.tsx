import React from "react";
import { Main } from "./About.styled";
import { SectionTemplate } from "../../templates";
import { Subtitle, Title } from "../../components";
import { aboutData } from "../../fixtures/about";

type Props = {};
const AboutContainer: React.FC<Props> = () => {
	return (
		<Main>
			<SectionTemplate>
				<Subtitle>{aboutData.subtitle}</Subtitle>
				<Title style={{ whiteSpace: "pre-line" }}>{aboutData.title}</Title>
				<p style={{ textAlign: "center", whiteSpace: "pre-line" }}>{aboutData.text}</p>
			</SectionTemplate>
		</Main>
	);
};

export default AboutContainer;
