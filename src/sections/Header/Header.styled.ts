import styled from "styled-components/macro";

export const Main = styled.div`
	position: relative;
	height: 100vh;
	width: 100%;
`;

export const Content = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 2;
	display: flex;
	justify-content: center;
`;

export const P = styled.p`
	font-size: 1.2em;
`;
