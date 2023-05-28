module.exports = {
	content: ['./index,html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						'code ::before': { content: 'none' },
						'code ::after': { content: 'none' },
						a: {
							color: '#64748b',
							textUnderlineOffset: '0.15rem',
							'&:hover': {
								color: '#f97316',
							},
						},
						code: {
							padding: '0.25rem',
							fontWeight: '400',
							borderRadius: '0.15rem',
							background: '#e2e8f0',
							color: '#64748b',
						},
					},
				},
			},
		},
		fontFamily: {
			sans: ['MinigapLight', 'sans-serif'],
			header: ['MinigapBold', 'sans-serif'],
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
