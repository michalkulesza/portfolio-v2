import React from "react";
import { Wrapper, Video, Overlay } from "./VideoBg.styled";

import posterImg from "../../../res/img/video-poster.jpg";

type Props = {
	video: string;
	children?: any;
};

const VideoBg: React.FC<Props> = ({ video, children, ...restProps }) => {
	return (
		<Wrapper>
			<Overlay />
			<Video autoPlay muted loop {...restProps} poster={posterImg}>
				<source src={video} type="video/mp4" />
			</Video>
		</Wrapper>
	);
};

export default VideoBg;
