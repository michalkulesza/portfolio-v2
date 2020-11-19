import React from "react";
import { IconType } from "react-icons/lib";
import { Main, Icon, Text } from "./Tag.styled";

type Props = {
	data: {
		id: number;
		name: string;
		icon: IconType;
	};
};

const Tag: React.FC<Props> = ({ data }) => {
	return (
		<Main>
			<Icon>
				<data.icon />
			</Icon>
			<Text>{data.name}</Text>
		</Main>
	);
};

export default Tag;
