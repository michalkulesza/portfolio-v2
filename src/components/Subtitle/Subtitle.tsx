import React from "react";
import { Main } from "./Subtitle.styled";

type Props = {
	children?: any;
};

const Subtitle: React.FC<Props> = ({ children }) => {
	return <Main>{children}</Main>;
};

export default Subtitle;
