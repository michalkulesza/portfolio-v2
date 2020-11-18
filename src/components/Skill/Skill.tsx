import React from "react";
import { Main } from "./Skill.styled";

type Props = {
	children: any;
};

const Skill: React.FC<Props> = ({ children }) => {
	return <Main>{children}</Main>;
};

export default Skill;
