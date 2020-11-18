import styled from "styled-components/macro";
import { Shadow } from "../../styles/snippets";

type PosterProps = {
	visible: boolean;
};

export const Main = styled.div`
	width: 100%;
	height: fit-content;
`;

export const VideoContainer = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
`;

export const ContentContainer = styled.div``;

export const Video = styled.video`
	max-height: 100%;
	max-width: 100%;
	z-index: -1;
	overflow: hidden;
	box-shadow: ${Shadow.medium};
`;

export const Poster = styled.img(
	({ visible }: PosterProps) => `
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	object-fit: cover;
	opacity: ${visible ? "1" : "0"};
	transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
`
);

export const ButtonsContainer = styled.div`
	display: flex;
	margin-bottom: 0.7rem;
`;

export const TagsContainer = styled.div`
	display: flex;
	/* overflow: hidden; */
`;
