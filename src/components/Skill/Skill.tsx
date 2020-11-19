import React from "react";
import { IconType } from "react-icons/lib";
import Subtitle from "../Subtitle/Subtitle";
import { Main, Icon } from "./Skill.styled";

type Props = {
	data: {
		id: number;
		title: string;
		icon: IconType;
	};
};

const Skill: React.FC<Props> = ({ data }) => {
	return (
		<Main>
			<Icon>
				<data.icon />
			</Icon>
			<Subtitle>{data.title}</Subtitle>
		</Main>
	);
};

export default Skill;
