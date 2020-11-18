import React from "react";
import { Main } from "./Subtitle.styled";

type Props = {
	children?: any;
	style?: object;
};

const Subtitle: React.FC<Props> = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

export default Subtitle;
