/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	content: [],
	darkMode: ['class', '[data-mode="dark"]'],
	theme: {
		screens: {
			...defaultTheme.screens
		},
		colors: {
			'dark': 'rgb(30 41 59)',
			transparent: colors.transparent,
			slate: colors.slate,
			white: colors.white,
			black: colors.black,
			orange: colors.orange,
			gray: colors.gray,
			grey: colors.grey,
			blue: colors.blue
		},
		extend: {
			colors: {
				'dark-grey': {
					700: 'rgb(72 85 133)',
					900: 'rgb(27 37 89 )'
				}
			},
			borderOpacity: {
				'10': '0.1',
				'20': '0.2',
				'95': '0.95',
			},
			maxWidth: {
				'auto': 'auto',
			},
		},
		container: {
			center: true,
		},
	},
	plugins: [

	],
}

