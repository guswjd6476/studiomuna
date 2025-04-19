import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
    	extend: {
    		backgroundImage: {
    			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
    		},
    		textShadow: {
    			sm: '0 1px 2px var(--tw-shadow-color)',
    			DEFAULT: '0 2px 4px var(--tw-shadow-color)',
    			lg: '0 8px 16px var(--tw-shadow-color)'
    		},
    		colors: {
    			transparent: 'transparent',
    			current: 'currentColor',
    			white: '#ffffff',
    			purple: '#3f3cbb',
    			midnight: '#121063',
    			metal: '#565584',
    			tahiti: '#3ab7bf',
    			silver: '#ecebff',
    			'bubble-gum': '#ff77e9',
    			bermuda: '#78dcca',
    			color1: '#f87171',
    			color2: '#fb923c',
    			color3: '#22c55e',
    			color4: '#fbbf24',
    			color5: '#06b6d4',
    			color6: '#a78bfa',
    			color7: '#fb7185',
    			color8: '#7dd3fc',
    			color9: '#f9a8d4',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		fontFamily: {
    			gowun: [
    				'Gowun Dodum',
    				'sans-serif'
    			],
    			batang: [
    				'Gowun Batang',
    				'serif'
    			],
    			poor: [
    				'Poor Story',
    				'cursive'
    			]
    		},
    		letterSpacing: {
    			wider: '0.05em',
    			widest: '0.1em'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme('textShadow') }
            );
        }),
        require("tailwindcss-animate")
    ],
};

export default config;
