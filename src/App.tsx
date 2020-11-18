import React from "react";
import { NavbarContainer, HeaderContainer, AboutContainer, SkillsContainer, WorksContainer } from "./containers";

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
