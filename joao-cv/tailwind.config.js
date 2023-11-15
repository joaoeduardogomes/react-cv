/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        myGreen: '#4C9F70',
        myPurple: '#8E8DBE',
        myWhite: '#F8F8F8',
        myBlack: '#262626',
        myGray: '#D9D9D9',
      },
      screens: {
        'xm': '387px'
      }
    },
  },
  plugins: [],
}
