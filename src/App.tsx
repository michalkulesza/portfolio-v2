import React from "react";
import { NavbarContainer, HeaderContainer, AboutContainer } from "./containers";

const App: React.FC = () => {
	return (
		<>
			<NavbarContainer logoText="michalkulesza" />
			<HeaderContainer />
			<AboutContainer />
		</>
	);
};

export default App;
