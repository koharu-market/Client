import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ffecec',
          200: '#fcdddd',
          400: '#F494A9',
        },
        semi_primary: '#bce3ef',
        secondary: '#bfd9ff',
        danger: '#e74c3c',
      },
      container: {
        screens: {
          lg: '1280px',
        },
        center: true,
      },
      width: {
        screen: '100dvw',
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
export default config;
