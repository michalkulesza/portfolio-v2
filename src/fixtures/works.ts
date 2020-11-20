import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { SiJavascript, SiJest, SiRedux, SiTypescript } from "react-icons/si";

import chatterImg from "../res/img/chatter.jpg";
import feederImg from "../res/img/feeder.jpg";
import cardImg from "../res/img/card.jpg";
import noteImg from "../res/img/note.jpg";
import discoverImg from "../res/img/discover.jpg";
import urlImg from "../res/img/url.jpg";
import calcImg from "../res/img/calc.jpg";
import guessImg from "../res/img/guess.jpg";
import speedImg from "../res/img/speed.jpg";

import video1 from "../res/vid/backgroundVideo.webm";
import video2 from "../res/vid/backgroundVideo.mp4";

export const worksData = {
	subtitle: "Works",
	title: `Few of my projects that I 
   have recently made.`,
	data: [
		{
			id: 1,
			title: "Netflix",
			description: "Streaming webisite mockup",
			image: chatterImg,
			video: video1,
			link: "https://michalkulesza.me/chatter",
			frontendUrl: "https://github.com/michalkulesza/chat-client",
			backendUrl: "https://github.com/michalkulesza/chat-server",
			tags: [
				{
					id: 1,
					name: "React",
					icon: FaReact,
				},
				{
					id: 2,
					name: "TypeScript",
					icon: SiTypescript,
				},
				{
					id: 3,
					name: "Node",
					icon: FaNodeJs,
				},
				{
					id: 4,
					name: "Sass",
					icon: FaSass,
				},
			],
		},
		{
			id: 2,
			title: "Feeder",
			description: "Social media website, post and like feeds.",
			image: feederImg,
			video: video2,
			link: "https://michalkulesza.me/feeder/",
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
			id: 3,
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
			id: 4,
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
			id: 5,
			title: "Diccover",
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
			id: 7,
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
			id: 8,
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
			id: 9,
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
