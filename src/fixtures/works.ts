import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

import image1 from "../res/img/chatter.jpg";

import video1 from "../res/vid/backgroundVideo.mp4";

export const worksData = {
	subtitle: "Works",
	title: `Few of my projects that I 
   have recently made.`,
	data: [
		{
			id: 1,
			title: "Chatter",
			description: "Realtime chatting service.",
			image: image1,
			video: video1,
			link: "",
			frontendUrl: "",
			backendUrl: "",
			tags: [
				{
					id: 1,
					name: "React",
					icon: FaReact,
				},
				{
					id: 2,
					name: "JavaScript",
					icon: SiJavascript,
				},
				{
					id: 3,
					name: "Node",
					icon: FaNodeJs,
				},
			],
		},
	],
};
