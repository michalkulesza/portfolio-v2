import React from "react";
import { NavbarContainer, HeaderContainer, AboutContainer, SkillsContainer } from "./containers";

const App: React.FC = () => {
	return (
		<>
			<NavbarContainer logoText="michalkulesza" />
			<HeaderContainer />
			<AboutContainer />
			<SkillsContainer />
		</>
	);
};

export default App;
