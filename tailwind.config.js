const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: 'var(--primary-100)',
					200: 'var(--primary-200)',
					300: 'var(--primary-300)',
					400: 'var(--primary-400)',
				},
				secondary: {
					100: 'var(--secondary-100)',
					200: 'var(--secondary-200)',
					300: 'var(--secondary-300)',
					400: 'var(--secondary-400)',
				},
				navy: 'var(--navy)',
				tangerine: 'var(--tangerine)',
				strawberry: 'var(--strawberry)',
				lemon: 'var(--lemon)',
				lime: 'var(--lime)',
				fuscia: 'var(--fuscia)',
				main: 'var(--main)',
			},
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
