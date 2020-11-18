import React from "react";
import { Main } from "./SmallTitle.styled";

type Props = {
	children: string;
};

const SmallTitle: React.FC<Props> = ({ children }) => {
	return <Main>{children}</Main>;
};

export default SmallTitle;
