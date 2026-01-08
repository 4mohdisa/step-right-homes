import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: 'rgb(249, 202, 1)',
          DEFAULT: 'rgb(249, 202, 1)',
        },
        secondary: {
          black: '#000000',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      spacing: {
        section: '5rem',
        'section-sm': '3rem',
      },
    },
  },
  plugins: [],
};

export default config;
