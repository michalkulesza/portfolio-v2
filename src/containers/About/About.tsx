import React from "react";
import { Main } from "./About.styled";
import { SectionTemplate } from "../../templates";
import { Subtitle } from "../../components";

type Props = {};

const AboutContainer: React.FC<Props> = () => {
	return (
		<Main>
			<SectionTemplate>
				<Subtitle>Summary</Subtitle>
			</SectionTemplate>
		</Main>
	);
};

export default AboutContainer;
