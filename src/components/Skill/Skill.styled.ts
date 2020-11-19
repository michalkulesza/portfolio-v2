import styled from "styled-components/macro";
import { Colors, Transition } from "../../styles/snippets";

export const Main = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	cursor: pointer;
`;

export const Icon = styled.div`
	height: 100%;
	width: 100%;
	max-height: 100px;
	max-width: 100px;
	transition: ${Transition(0.1, "all")};
	margin-bottom: 0.8em;

	${Main}:hover & {
		transform: scale(1.1);
	}

	svg {
		height: 100%;
		width: 100%;
		fill: ${Colors.darkGrey};

		path {
			color: ${Colors.darkGrey};
		}
	}
`;
