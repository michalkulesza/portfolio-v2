import styled from "styled-components/macro";

export const Wrapper = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	overflow: hidden;
`;

export const Video = styled.video`
	position: absolute;
	left: 50%;
	top: 50%;
	height: 100%;
	width: 177.77777778vh; /* 100 * 16 / 9 */
	min-width: 100%;
	min-height: 56.25vw; /* 100 * 9 / 16 */
	transform: translate(-50%, -50%);
	z-index: 0;
`;

export const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 1;
`;
