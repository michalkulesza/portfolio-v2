import { breakpoints } from "./breakpoints";

export const mediaQuery = (key: keyof typeof breakpoints) => {
	return (style: TemplateStringsArray | String) => `@media (min-width: ${breakpoints[key]}) { ${style} }`;
};
