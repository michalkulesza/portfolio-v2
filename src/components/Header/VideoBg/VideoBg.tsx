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
			<Video autoPlay muted loop {...restProps}>
				<source src={video} type="video/webm" />
			</Video>
		</Wrapper>
	);
};

export default VideoBg;
