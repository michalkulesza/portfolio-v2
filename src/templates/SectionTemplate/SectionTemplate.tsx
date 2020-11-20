import React from "react";
import { Main } from "./SectionTemplate.styled";

type Props = {
	style?: object;
	children?: any;
};

const SectionTemplate: React.FC<Props> = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

export default SectionTemplate;
