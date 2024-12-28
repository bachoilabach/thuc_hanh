/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const withMT = require('@material-tailwind/react/utils/withMT');
export default withMT({
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		height: {
			'h-71': '71px',
			'w-100': '400px'
		},
	},
	plugins: [],
});
