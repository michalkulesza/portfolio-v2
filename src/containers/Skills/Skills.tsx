import React from "react";
import { Main } from "./Skills.styled";
import { SectionTemplate } from "../../templates";
import { Subtitle, Title, Grid, Skill } from "../../components";
import { Colors } from "../../styles/colors";

import { skillsData } from "../../fixtures/skills";

type Props = {};

const Skills: React.FC<Props> = () => {
	return (
		<Main style={{ backgroundColor: `${Colors.lightGrey}` }}>
			<SectionTemplate>
				<Subtitle>{skillsData.subtitle}</Subtitle>
				<Title>{skillsData.title}</Title>
				<Grid>
					{skillsData.skills.map(skill => (
						<Skill key={skill.id}>
							<skill.icon />
							<Subtitle style={{ marginTop: "1.5rem" }}>{skill.title}</Subtitle>
						</Skill>
					))}
				</Grid>
			</SectionTemplate>
		</Main>
	);
};

export default Skills;
