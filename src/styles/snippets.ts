export const Colors = {
	black: "#1a1a1a",
	darkGrey: "#222228",
	grey: "#747474",
	greyish: "#ececec",
	lightGrey: "#F6F6F6",
	white: "#f2f2f2",
	yellow: "#E6C271",
	green: "#2EB087",
	purple: "#8366FC",
	purpleIntense: "#5f39ff",
};

export const Shadow = {
	small: "0 10px 20px -5px rgba(50, 50, 93, 0.25), 0 8px 11px -8px rgba(0, 0, 0, 0.3);",
	medium: "0 30px 30px -9px rgba(50,50,93,0.25), 0 10px 26px -5px rgba(0,0,0,0.3);",
	large: "0 30px 60px -12px rgba(50,50,93,0.25), 0 18px 36px -18px rgba(0,0,0,0.3);",
};

export const Transition = (duration: number, target?: string) =>
	`${target ? target : "all"} ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`;
