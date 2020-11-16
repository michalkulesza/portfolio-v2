import { css, FlattenSimpleInterpolation } from "styled-components";
import { breakpoints } from "./breakpoints";

export const respondTo = Object.keys(breakpoints).reduce((acc, label) => {
	acc[label] = (l: TemplateStringsArray, ...p: any[]) => css`
		@media (min-width: ${breakpoints[label]}) {
			${css(l, ...p)};
		}
	`;
	return acc;
}, {} as Record<keyof typeof breakpoints, (l: TemplateStringsArray, ...p: any[]) => FlattenSimpleInterpolation>);
