import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { SiJavascript, SiJest, SiMongodb, SiRedux, SiStyledComponents, SiTypescript } from "react-icons/si";

import feederImg from "../res/img/feeder.jpg";
import chatterImg from "../res/img/chatter.jpg";
import cardImg from "../res/img/card.jpg";
import noteImg from "../res/img/note.jpg";
import discoverImg from "../res/img/discover.jpg";
import urlImg from "../res/img/url.jpg";
import calcImg from "../res/img/calc.jpg";
import guessImg from "../res/img/guess.jpg";
import speedImg from "../res/img/speed.jpg";
import netflixImg from "../res/img/netflix.jpg";

export const worksData = {
	subtitle: "Works",
	title: `Few of my projects that I 
   have recently made.`,
	data: [
		{
			id: 1,
			title: "Netflix",
			description: "Search and save your favourite videos.",
			image: netflixImg,
			video: null,
			link: "https://xcxz-netflix.netlify.app/",
			frontendUrl: "https://github.com/michalkulesza/netflix",
			backendUrl: "https://github.com/michalkulesza/netflix-backend",
			tags: [
				{
					id: 1,
					name: "React",
					icon: FaReact,
				},
				{
					id: 2,
					name: "Javascript",
					icon: SiJavascript,
				},
				{
					id: 3,
					name: "Redux",
					icon: SiRedux,
				},
				{
					id: 4,
					name: "StyledComponents",
					icon: SiStyledComponents,
				},
				{
					id: 5,
					name: "Jest",
					icon: SiJest,
				},
				{
					id: 6,
					name: "Node",
					icon: FaNodeJs,
				},
			],
		},
		{
			id: 2,
			title: "Chatter",
			description: "Realtime chatting application.",
			image: chatterImg,
			video: null,
			link: "https://xcxz-chatter.netlify.app/",
			frontendUrl: "https://github.com/michalkulesza/chatterV2/tree/production/client",
			backendUrl: "https://github.com/michalkulesza/chatterV2/tree/production/server",
			tags: [
				{
					id: 1,
					name: "React",
					icon: FaReact,
				},
				{
					id: 2,
					name: "Javascript",
					icon: SiJavascript,
				},
				{
					id: 3,
					name: "TypeScript",
					icon: SiTypescript,
				},
				{
					id: 4,
					name: "Redux",
					icon: SiRedux,
				},
				{
					id: 5,
					name: "MongoDB",
					icon: SiMongodb,
				},
				{
					id: 6,
					name: "Sass",
					icon: FaSass,
				},
				{
					id: 7,
					name: "Node",
					icon: FaNodeJs,
				},
			],
		},
		{
			id: 3,
			title: "Feeder",
			description: "Social media website, post and like feeds.",
			image: feederImg,
			video: null,
			link: "https://xcxz-feeder.netlify.app/",
			frontendUrl: "https://github.com/michalkulesza/feeder",
			backendUrl: null,
			tags: [
				{
					id: 1,
					name: "React",
					icon: FaReact,
				},
				{
					id: 2,
					name: "Javascript",
					icon: SiJavascript,
				},
				{
					id: 3,
					name: "Redux",
					icon: SiRedux,
				},
				{
					id: 4,
					name: "Sass",
					icon: FaSass,
				},
			],
		},
		{
			id: 4,
			title: "CreditCard",
			description: "Interactive & animated credit card form.",
			image: cardImg,
			video: null,
			link: "https://www.michalkulesza.me/creditcard/",
			frontendUrl: "https://github.com/michalkulesza/credit-card",
			backendUrl: null,
			tags: [
				{
					id: 1,
					name: "React",
					icon: FaReact,
				},
				{
					id: 2,
					name: "Sass",
					icon: FaSass,
				},
				{
					id: 3,
					name: "Jest",
					icon: SiJest,
				},
			],
		},
		{
			id: 5,
			title: "Discover",
			description: "Discover new songs based on a artists you like.",
			image: discoverImg,
			video: null,
			link: "https://michalkulesza.me/discover/",
			frontendUrl: "https://github.com/michalkulesza/Discover",
			backendUrl: null,
			tags: [
				{
					id: 1,
					name: "React",
					icon: FaReact,
				},
				{
					id: 2,
					name: "Javascript",
					icon: SiJavascript,
				},
				{
					id: 3,
					name: "CSS3",
					icon: FaCss3Alt,
				},
			],
		},
		{
			id: 6,
			title: "Note App",
			description: "Create, edit and delete notes with formatting.",
			image: noteImg,
			video: null,
			link: "https://michalkulesza.me/noteapp",
			frontendUrl: "https://github.com/michalkulesza/note-app",
			backendUrl: null,
			tags: [
				{
					id: 1,
					name: "React",
					icon: FaReact,
				},
				{
					id: 2,
					name: "Javascript",
					icon: SiJavascript,
				},
				{
					id: 3,
					name: "Redux",
					icon: SiRedux,
				},
				{
					id: 4,
					name: "Sass",
					icon: FaSass,
				},
			],
		},
		{
			id: 7,
			title: "URL Shortener",
			description: "Service that shortens long URL's.",
			image: urlImg,
			video: null,
			link: "https://michalkulesza.me/urlShort",
			frontendUrl: "https://github.com/michalkulesza/URL-shortener-front",
			backendUrl: "https://github.com/michalkulesza/URL-Shortener",
			tags: [
				{
					id: 1,
					name: "Javascript",
					icon: SiJavascript,
				},
				{
					id: 2,
					name: "Node",
					icon: FaNodeJs,
				},
				{
					id: 3,
					name: "HTML5",
					icon: FaHtml5,
				},
				{
					id: 4,
					name: "CSS3",
					icon: FaCss3Alt,
				},
			],
		},
		{
			id: 8,
			title: "Calculator",
			description: "Simple calculator based on a iOS Calculator app.",
			image: calcImg,
			video: null,
			link: "https://michalkulesza.me/calculator",
			frontendUrl: "https://github.com/michalkulesza/Calculator",
			backendUrl: null,
			tags: [
				{
					id: 1,
					name: "React",
					icon: FaReact,
				},
				{
					id: 2,
					name: "Javascript",
					icon: SiJavascript,
				},
			],
		},
		{
			id: 9,
			title: "Guess the country",
			description: "Game where you guess european countries.",
			image: guessImg,
			video: null,
			link: "https://michalkulesza.me/guess",
			frontendUrl: "https://github.com/michalkulesza/GuessTheCountry",
			backendUrl: null,
			tags: [
				{
					id: 1,
					name: "Javascript",
					icon: SiJavascript,
				},
				{
					id: 2,
					name: "HTML5",
					icon: FaHtml5,
				},
				{
					id: 3,
					name: "CSS3",
					icon: FaCss3Alt,
				},
			],
		},
		{
			id: 10,
			title: "Speed type",
			description: "Speed typing game that measures WPM.",
			image: speedImg,
			video: null,
			link: "https://michalkulesza.me/speedtype",
			frontendUrl: "https://github.com/michalkulesza/speedtype",
			backendUrl: null,
			tags: [
				{
					id: 1,
					name: "React",
					icon: FaReact,
				},
				{
					id: 2,
					name: "Javascript",
					icon: SiJavascript,
				},

				{
					id: 3,
					name: "CSS3",
					icon: FaCss3Alt,
				},
			],
		},
	],
};
