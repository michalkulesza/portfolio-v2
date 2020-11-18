import React from "react";
import { Main } from "./Tag.styled";

type Props = {
	children: any;
};

const Tag: React.FC<Props> = ({ children }) => {
	return <Main>{children}</Main>;
};

export default Tag;
