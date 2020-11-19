import React from "react";
import {
	Main,
	VideoContainer,
	ContentContainer,
	ButtonsContainer,
	Video,
	Poster,
	TagsContainer,
} from "./Project.styled";
import { SmallTitle, Subtitle, Tag, Button } from "../../components";
import { IconType } from "react-icons";
import { Colors } from "../../styles/snippets";

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
		tags: {
			id: number;
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
			<ContentContainer>
				<span>
					<SmallTitle>{data.title}</SmallTitle>
					<TagsContainer style={{ marginLeft: "0.8rem" }}>
						{data.tags.map(tag => (
							<Tag key={tag.id} data={tag} />
						))}
					</TagsContainer>
				</span>
				<Subtitle style={{ marginBottom: "0.7rem" }}>{data.description}</Subtitle>
				<ButtonsContainer>
					<Button small style={{ marginRight: "0.5rem", backgroundColor: Colors.purple, color: Colors.white }}>
						Preview
					</Button>
					<Button small noShadow style={{ marginRight: "0.5rem", backgroundColor: Colors.greyish }}>
						App Code
					</Button>
					<Button small noShadow style={{ backgroundColor: Colors.greyish }}>
						Server Code
					</Button>
				</ButtonsContainer>
			</ContentContainer>
		</Main>
	);
};

export default Project;
