import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        vault: {
          50: '#eef9ff',
          100: '#dcf1ff',
          200: '#bfe7ff',
          300: '#8cd2ff',
          400: '#5bb8ff',
          500: '#2d93ff',
          600: '#1e76e9',
          700: '#1857b8',
          800: '#1d4c95',
          900: '#1d3d75',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(96,165,250,0.2), 0 20px 60px rgba(14,165,233,0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
