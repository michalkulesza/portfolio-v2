import styled from "styled-components/macro";
import { Colors } from "../../styles/colors";

export const Main = styled.div`
	height: 100%;
	width: 100%;
	max-height: 140px;
	max-width: 140px;
	display: flex;
	align-items: center;
	flex-direction: column;
	cursor: pointer;
	transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);

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
