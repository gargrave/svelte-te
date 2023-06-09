/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/tw-elements/dist/js/**/*.js'],
	theme: {
		extend: {
			borderWidth: {
				1: '1px',
				3: '3px'
			}
		}
	},
	darkMode: 'class',
	plugins: [require('tw-elements/dist/plugin.cjs')],
	safelist: [
		'border-1',
		'border-2',
		'border-3',
		'border-4',
		'h-4',
		'h-6',
		'h-8',
		'h-10',
		'h-12',
		'w-4',
		'w-6',
		'w-8',
		'w-10',
		'w-12'
	]
};
