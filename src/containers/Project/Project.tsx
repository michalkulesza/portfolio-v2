import React, { useEffect, useState } from "react";
// import { Main } from "./Project.styled";
import { Project } from "../../components";
import { IconType } from "react-icons";

type Props = {
	data: {
		id: number;
		title: string;
		description: string;
		image: string;
		video: string | null;
		link: string;
		frontendUrl: string;
		backendUrl: string | null;
		tags: {
			id: number;
			name: string;
			icon: IconType;
		}[];
	};
};

const ProjectContainer: React.FC<Props> = ({ data }) => {
	const [videoReady, setVideoReady] = useState(false);
	const [posterVisible, setPosterVisible] = useState(true);

	useEffect(() => {
		if (videoReady) {
			let posterTimer = setTimeout(() => setPosterVisible(false), 1000);

			return () => clearTimeout(posterTimer);
		}
	}, [videoReady]);

	return <Project setVideoReady={setVideoReady} posterVisible={posterVisible} data={data} />;
};

export default ProjectContainer;
