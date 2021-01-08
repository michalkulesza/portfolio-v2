import React from "react";
import App from "./App";
import { render } from "react-dom";
import { GlobalStyles } from "./styles/global-styles";
import ReactGA from "react-ga";
import "normalize.css";

ReactGA.initialize("G-P6CSNW30P2");
ReactGA.pageview(window.location.pathname + window.location.search);

render(
	<React.StrictMode>
		<GlobalStyles />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
