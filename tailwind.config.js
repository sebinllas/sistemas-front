/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	important: '#__next',
	theme: {
		extend: {
			colors: {
				green1: '#026937',
				green2: '#35944b',
				green3: '#43b649',
				green4: '#8dc63f',
				blue1: '#0e7774',
				blue2: '#069a7e',
				blue3: '#3ebdac'
			}
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif']
		}
	},
	plugins: []
};
