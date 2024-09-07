import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			'sm': '640px',
			'md': '767px',
			'lg': '1024px',
			'customs':'768px'
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				fadeIn: "fadeIn 1s ease-in-out",
			},
		},
		
	},
	plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
export default config;
