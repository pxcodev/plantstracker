// tailwind.config.js
module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			LuckiestGuy: ["Luckiest Guy", "cursive"],
			Poppins: ["Poppins", "bold"],
		},
		letterSpacing: {
			time: "2.5px",
		},
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			backgroundImage: {
				madera: "url('assets/images/madera.jpg')",
			},
			colors: {
				bg: {
					1: "#000000",
					2: "#11131B",
					3: "#040E13",
				},
				primary: "#9FDE47",
				secondary: "#242734",
				logo: {
					1: "#FFAC4A",
					2: "#E9576F",
					3: "#BC63D6",
				},
				text: {
					1: "#EAFCAB",
					2: "#e9fbb0",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
