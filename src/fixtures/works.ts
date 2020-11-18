import { FaReact } from "react-icons/fa";

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
			tech: [
				{
					name: "",
					icon: FaReact,
				},
			],
		},
	],
};
