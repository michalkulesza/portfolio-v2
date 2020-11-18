import styled from "styled-components/macro";

type PosterProps = {
	visible: boolean;
};

export const Main = styled.div`
	width: 100%;
	height: fit-content;
`;

export const VideoContainer = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	overflow: hidden;
`;

export const Video = styled.video`
	height: 100%;
	width: 100%;
	z-index: -1;
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
