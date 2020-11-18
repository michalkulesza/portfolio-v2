import React from "react";
import { Main, VideoContainer, Video, Poster } from "./Project.styled";
import { SmallTitle, Subtitle } from "../../components";
import { IconType } from "react-icons";

type Props = {
	data: {
		id: number;
		title: string;
		description: string;
		image: string;
		video: string;
		link: string;
		frontendUrl: string;
		backendUrl: string;
		tech: {
			name: string;
			icon: IconType;
		}[];
	};
	posterVisible: boolean;
	setVideoReady: React.Dispatch<React.SetStateAction<boolean>>;
};

const Project: React.FC<Props> = ({ data, posterVisible = true, setVideoReady }) => {
	const handleCanPlayThrough = () => setVideoReady(true);

	return (
		<Main>
			<VideoContainer>
				<Video src={data.video} onCanPlay={handleCanPlayThrough}></Video>
				<Poster src={data.image} visible={posterVisible}></Poster>
			</VideoContainer>
			<SmallTitle>Chatter</SmallTitle>
			<Subtitle>Realtime chatting service.</Subtitle>
		</Main>
	);
};

export default Project;
