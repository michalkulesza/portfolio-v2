import styled from "styled-components/macro";
import { Colors, Shadow } from "../../../styles/snippets";

export const Main = styled.div`
	position: relative;
	width: fit-content;
	margin-right: 0.7rem;
	border-radius: 3px;
	color: ${Colors.grey};
	display: flex;
	align-items: center;
	transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;
	user-select: none;
`;

export const Icon = styled.div`
	padding: 0.3rem;
`;

export const Text = styled.div`
	position: absolute;
	top: -130%;
	left: 50%;
	transform: translateX(-50%) scale(0.92);
	transform-origin: bottom;
	padding: 0.25rem 0.7rem;
	background-color: ${Colors.lightGrey};
	border-radius: 2px;
	opacity: 0;
	box-shadow: ${Shadow.medium};
	transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
	pointer-events: none;

	&:after {
		content: "";
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		border-top: 5px solid ${Colors.lightGrey};
		border-right: 5px solid transparent;
		border-left: 5px solid transparent;
		z-index: -10;
	}

	${Main}:hover & {
		transform: translateX(-50%) scale(1);
		opacity: 1;
	}
`;
