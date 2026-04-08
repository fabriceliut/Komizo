/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        marine: {
          900: '#022d3a',
          800: '#033745',
          700: '#044d5f',
          600: '#056579'
        },
        vert: {
          600: '#3a927a',
          500: '#4aaa8b',
          400: '#5cba9b',
          300: '#7dcbb2',
          200: '#c0ded2',
          100: '#e8f3ee'
        },
        gris: {
          400: '#a7b4c0',
          300: '#c4ced7',
          200: '#e2e7ec',
          100: '#f5f7f9'
        },
        corail: {
          600: '#d45a3a',
          500: '#e06a4a',
          400: '#ef795a',
          300: '#efbfb4',
          200: '#f8e2dc',
          100: '#fdf3f0'
        }
      },
      fontFamily: {
        sans: ['"Outfit"', '"Segoe UI"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 4px 24px rgba(3, 55, 69, 0.08)',
        card: '0 2px 12px rgba(3, 55, 69, 0.06)'
      }
    }
  },
  plugins: []
};
