import React from "react";
import App from "./App";
import { render } from "react-dom";
// import reportWebVitals from "./reportWebVitals";
import { GlobalStyles } from "./styles/global-styles";
import "normalize.css";

render(
	<React.StrictMode>
		<GlobalStyles />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
