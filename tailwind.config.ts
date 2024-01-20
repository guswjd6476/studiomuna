import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            textShadow: {
                sm: '0 1px 2px var(--tw-shadow-color)',
                DEFAULT: '0 2px 4px var(--tw-shadow-color)',
                lg: '0 8px 16px var(--tw-shadow-color)',
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
            },
        },
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
    ],
};

export default config;
