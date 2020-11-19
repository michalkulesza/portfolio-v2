import React from "react";
import { Wrapper, Video, Overlay } from "./VideoBg.styled";

type Props = {
	video: string;
	children?: any;
};

const VideoBg: React.FC<Props> = ({ video, children, ...restProps }) => {
	return (
		<Wrapper>
			<Overlay />
			<Video src={video} autoPlay muted loop {...restProps}></Video>
		</Wrapper>
	);
};

export default VideoBg;
