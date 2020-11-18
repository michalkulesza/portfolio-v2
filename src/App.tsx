import React from "react";
import { NavbarContainer } from "./containers";
import { HeaderContainer, AboutContainer, SkillsContainer, WorksContainer } from "./sections";

const App: React.FC = () => {
	return (
		<>
			<NavbarContainer logoText="michalkulesza" />
			<HeaderContainer />
			<AboutContainer />
			<SkillsContainer />
			<WorksContainer />
		</>
	);
};

export default App;
