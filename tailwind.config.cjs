/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        night: {
          950: '#070b10',
          900: '#0d141d',
          850: '#141d29',
          800: '#1c2736'
        },
        accent: {
          400: '#45b980',
          500: '#339867',
          600: '#277851'
        },
        paper: {
          100: '#f2f5f0',
          200: '#dce3d8',
          300: '#b2bdb3'
        }
      },
      fontFamily: {
        sans: ['"Source Sans 3"', '"Segoe UI"', 'sans-serif'],
        serif: ['"Fraunces"', '"Times New Roman"', 'serif']
      },
      boxShadow: {
        soft: '0 14px 40px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  plugins: []
};
