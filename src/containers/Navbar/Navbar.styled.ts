import styled from "styled-components/macro";
import { Colors, Shadow, Transition } from "../../styles/snippets";

type MainProps = {
	visible?: boolean;
	scrolled?: number;
};

export const Main = styled.nav(({ visible = true, scrolled = 0 }: MainProps) => {
	return `
		position: ${scrolled >= 100 || visible ? "fixed" : "absolute"};
		top: ${scrolled >= 100 ? "-100px" : "0px"};
		left: 0;
		height: 80px;
		width: 100%;
		z-index: 999;
		display: flex;
		justify-content: center;
		transform: translateY(${visible && scrolled >= 100 ? "100px" : "0px"});
		transition: ${visible && scrolled >= 100 ? Transition(0.3, "transform") : visible ? Transition(0.3, "background") : ""};
		background: ${
			visible && scrolled >= 100
				? Colors.lightGrey
				: "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 70%)"
		};

		a{
			color: ${visible && scrolled >= 100 ? Colors.darkGrey : Colors.lightGrey};

			span{
				color: ${visible && scrolled >= 100 ? Colors.darkGrey : Colors.lightGrey}
			}
		}
		box-shadow: ${visible && scrolled >= 100 && Shadow.small}
	`;
});
