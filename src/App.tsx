import React from "react";
import { NavbarContainer, HeaderContainer } from "./containers";

const App: React.FC = () => {
	return (
		<>
			<NavbarContainer logoText="michalkulesza" />
			<HeaderContainer />
		</>
	);
};

export default App;
