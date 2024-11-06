import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		colors: {
			white: '#FFFFFF',
			primary: {
				'200': 'rgb(236 254 255)', // couleur de fond login quand je suis pas dessus
				'300': 'rgb(6 182 212)', //couleur de fond du login quand je passe dessus
				'400': 'rgb(6 182 212)', //couleur autre bouton quand je passe dessus
				'600': 'rgb(8 145 178)',
				DEFAULT: 'rgb(14 116 144)'
			},
			secondary: {
				'200': '#F5F7FA',
				'300': '#E4E7EB',
				'400': '#CBD2D9',
				'600': '#9AA5B1',
				DEFAULT: '#EF5F00'
			},
			gray: {
				'300': '#fafafa',
				'400': '#f2f2f2',
				'500': '#e5e5e5',
				'600': '#b2b2b2',
				'700': '#808080',
				'800': '#333333',
				DEFAULT: '#1D1D1D'
			},
			alert: {
				danger: "#FF4E4E",
				success: "#90DA1",
				warning: "#FEB72F",
			},
		},
		fontSize: {
			'8xl': ["120px", { lineHeight: "120px", letterSpacing: "-6px", fontWeight: '500' }],
			'7xl': ["72px", { lineHeight: "80px", letterSpacing: "-4.5px", fontWeight: '600' }],
			'6xl': ["55px", { lineHeight: "60px", letterSpacing: "-2.5px", fontWeight: '500' }],
			'5xl': ["48px", { lineHeight: "54px", letterSpacing: "-1.6px", fontWeight: '500' }],
			'4xl': ["36px", { lineHeight: "44px", letterSpacing: "-1.2px", fontWeight: '500' }],
			'3xl': ["28px", { lineHeight: "34px", letterSpacing: "-0.8px", fontWeight: '500' }],
			'2xl': ["24px", { lineHeight: "30px", letterSpacing: "-1px", fontWeight: '400' }],
			xl: ["24px", { lineHeight: "30px", letterSpacing: "-1px", fontWeight: '400' }],
			lg: ["21px", { lineHeight: "30px", letterSpacing: "-0.8px", fontWeight: '400' }],
			base: ["17px", { lineHeight: "25px", letterSpacing: "-0.7px", fontWeight: '400' }],
			sm: ["15px", { lineHeight: "23px", letterSpacing: "-0.6px", fontWeight: '400' }],
			caption1: ["20px", { lineHeight: "24px", letterSpacing: "-0.6px", fontWeight: '400' }],
			caption2: ["18px", { lineHeight: "20px", letterSpacing: "-0.3px", fontWeight: '400' }],
			caption3: ["16px", { lineHeight: "18px", letterSpacing: "-0.5px", fontWeight: '400' }],
			caption4: ["13px", { lineHeight: "15px", letterSpacing: "-0.2px", fontWeight: '400' }]
		},
		borderRadius: {
			DEFAULT: '10px',
			full: '9999px'
		},
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
		}
	},
	plugins: [tailwindcssAnimate],
}