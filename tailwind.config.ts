import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'light-bg': '#FFFFFF',
        'light-title': '#333333',
        'light-subtitle': '#666666',
        'light-general': '#999999',
        'light-container': '#F5F5F5',

        'dark-bg': '#1A1A1A',
        'dark-title': '#FFFFFF',
        'dark-subtitle': '#DDDDDD',
        'dark-general': '#AAAAAA',
        'dark-container': '#333333',
      },
      screens: {
        max: '1440px',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
export default config;
