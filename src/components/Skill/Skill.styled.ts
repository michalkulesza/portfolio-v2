import styled from "styled-components/macro";
import { Colors, Transition } from "../../styles/snippets";

export const Main = styled.div`
	height: 100%;
	width: 100%;
	max-height: 140px;
	max-width: 140px;
	display: flex;
	align-items: center;
	flex-direction: column;
	cursor: pointer;
	transition: ${Transition(0.1, "transform")};

	svg {
		height: 100%;
		width: 100%;
		fill: ${Colors.darkGrey};

		path {
			color: ${Colors.darkGrey};
		}
	}

	&:hover {
		transform: scale(1.1);
	}
`;
