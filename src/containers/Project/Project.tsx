import React, { useEffect, useState } from "react";
import { Main } from "./Project.styled";
import { Project } from "../../components";
import { IconType } from "react-icons";

type Props = {
	data: {
		id: number;
		title: string;
		description: string;
		image: string;
		video: string;
		link: string;
		frontendUrl: string;
		backendUrl: string;
		tech: {
			name: string;
			icon: IconType;
		}[];
	};
};

let posterTimer: number;

const ProjectContainer: React.FC<Props> = ({ data }) => {
	const [videoReady, setVideoReady] = useState(false);
	const [posterVisible, setPosterVisible] = useState(true);

	useEffect(() => {
		if (videoReady) {
			posterTimer = setTimeout(() => setPosterVisible(false), 1000);
		}

		return () => clearTimeout(posterTimer);
	}, [videoReady]);

	return (
		<Main>
			<Project setVideoReady={setVideoReady} posterVisible={posterVisible} data={data}></Project>
		</Main>
	);
};

export default ProjectContainer;
