import React from "react";
import { NavbarContainer } from "./containers";
import { HeaderContainer, AboutContainer, SkillsContainer, WorksContainer, FooterContainer } from "./sections";

const App: React.FC = () => {
	return (
		<>
			<NavbarContainer />
			<HeaderContainer />
			<AboutContainer />
			<SkillsContainer />
			<WorksContainer />
			<FooterContainer />
		</>
	);
};

export default App;
