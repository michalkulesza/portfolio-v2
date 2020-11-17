import React from "react";
import { Wrapper, Video } from "./VideoBg.styled";

import video from "../../../res/vid/backgroundVideo.mp4";

type Props = {
	children?: any;
};

const VideoBg: React.FC<Props> = ({ children, ...restProps }) => {
	return (
		<Wrapper>
			<Video src={video} muted loop {...restProps}></Video>
		</Wrapper>
	);
};

export default VideoBg;
