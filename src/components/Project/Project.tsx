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
import LazyLoad from "react-lazyload";

import { BsArrowRightShort } from "react-icons/bs";

type Props = {
	data: {
		id: number;
		title: string;
		description: string;
		image: string;
		video: string | null;
		link: string;
		frontendUrl: string;
		backendUrl: string | null;
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
				<LazyLoad offset={1200}>
					{data.video && <Video autoPlay src={data.video} onCanPlayThrough={handleCanPlayThrough}></Video>}
					<Poster src={data.image} visible={posterVisible}></Poster>
				</LazyLoad>
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
					<Button
						newTab
						url={data.link}
						small
						grow
						scaleOnHover
						color="purple"
						textColor="light"
						style={{ marginRight: "0.5rem" }}
					>
						Preview
						<BsArrowRightShort />
					</Button>
					<Button newTab url={data.frontendUrl} small grow noShadow style={{ marginRight: "0.5rem" }}>
						{data.backendUrl ? "App Source" : "Source on GitHub"}
					</Button>
					{data.backendUrl && (
						<Button newTab url={data.backendUrl} small grow noShadow>
							Server Source
						</Button>
					)}
				</ButtonsContainer>
			</ContentContainer>
		</Main>
	);
};

export default Project;
