import styled from "styled-components/macro";
import { Colors, Shadow } from "../../../styles/snippets";

export const Main = styled.div`
	width: fit-content;
	margin-right: 0.7rem;
	border-radius: 3px;
	color: ${Colors.grey};
	display: flex;
	align-items: center;
	transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);

	svg {
		margin-right: 0.2rem;
	}
`;
