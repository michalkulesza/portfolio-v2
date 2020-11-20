import styled from "styled-components/macro";
import { mediaQuery } from "../../styles/mediaQuery";
import { Colors, Shadow, Transition } from "../../styles/snippets";

type PosterProps = {
	visible: boolean;
};

export const Main = styled.div`
	height: fit-content;
	width: 100%;

	${mediaQuery("md")(`
		margin: 1rem;
	`)}
`;

export const ContentContainer = styled.div`
	span {
		display: flex;
		align-items: center;
		margin-top: 1.2rem;
	}
`;

export const VideoContainer = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	padding-bottom: 62.5%;
	box-shadow: ${Shadow.medium};
	border-radius: 3px;
	overflow: hidden;
`;

export const Video = styled.video`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	overflow: hidden;
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
	transition: ${Transition(1, "opacity")};
`
);

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 0.7rem;
	align-items: center;
	padding: 0.5rem;
	background-color: ${Colors.lightGrey};
	border-radius: 3px;
	flex-wrap: nowrap;
`;

export const TagsContainer = styled.div`
	display: flex;
`;
