import React from "react";
import { Main } from "./Works.styled";
import { SectionTemplate } from "../../templates";
import { Subtitle, Title, Grid } from "../../components";
import { ProjectContainer } from "../../containers";

import { worksData } from "../../fixtures/works";
import { WORKS } from "../../constants/routes";

type Props = {};

const Works: React.FC<Props> = () => {
	return (
		<Main id={WORKS}>
			<SectionTemplate>
				<Subtitle>{worksData.subtitle}</Subtitle>
				<Title>{worksData.title}</Title>
				<Grid col={2}>
					{worksData.data.map(work => (
						<ProjectContainer key={work.id} data={work}></ProjectContainer>
					))}
				</Grid>
			</SectionTemplate>
		</Main>
	);
};

export default Works;
